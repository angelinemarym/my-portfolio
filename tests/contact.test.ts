import { test } from "node:test";
import assert from "node:assert/strict";
import { sendContactMessage } from "../src/lib/contact";

const message = {
  name: "Visitor",
  email: "visitor@example.com",
  subject: "Collaboration",
  message: "I would like to discuss a project.",
};

test("missing form configuration does not send a request", async (t) => {
  const fetchMock = t.mock.method(globalThis, "fetch", async () => {
    throw new Error("Unexpected request");
  });
  await assert.rejects(
    sendContactMessage(undefined, message),
    /temporarily unavailable/,
  );
  assert.equal(fetchMock.mock.callCount(), 0);
});

test("invalid and blank messages are rejected before sending", async (t) => {
  const fetchMock = t.mock.method(globalThis, "fetch", async () => {
    throw new Error("Unexpected request");
  });
  for (const invalid of [
    { ...message, email: "not-an-email" },
    { ...message, message: "  " },
    { ...message, subject: "Hello\nBcc: other@example.com" },
  ]) {
    await assert.rejects(
      sendContactMessage("form-key", invalid),
      /Please check/,
    );
  }
  assert.equal(fetchMock.mock.callCount(), 0);
});

test("submits the visitor email for replies and confirms provider success", async (t) => {
  const fetchMock = t.mock.method(globalThis, "fetch", async () =>
    Response.json({ success: true }),
  );
  await sendContactMessage("form-key", { ...message, name: " Visitor " });
  const call = fetchMock.mock.calls[0].arguments as [string, RequestInit];
  assert.equal(call[0], "https://api.web3forms.com/submit");
  const body = JSON.parse(String(call[1].body));
  assert.equal(body.name, "Visitor");
  assert.equal(body.email, message.email);
  assert.equal(body.access_key, "form-key");
  assert.equal(body.subject, "Portfolio: Collaboration");
  assert.equal(body.botcheck, false);
});

test("provider rejection never becomes a successful send", async (t) => {
  t.mock.method(globalThis, "fetch", async () =>
    Response.json({ success: false }, { status: 400 }),
  );
  await assert.rejects(
    sendContactMessage("form-key", message),
    /could not be sent/,
  );
});

test("network errors produce a retryable message", async (t) => {
  t.mock.method(globalThis, "fetch", async () => {
    throw new TypeError("Network unavailable");
  });
  await assert.rejects(sendContactMessage("form-key", message), /try again/);
});
