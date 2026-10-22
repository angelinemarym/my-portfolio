import { test } from "node:test";
import assert from "node:assert/strict";
import { approach, beamTarget, drift } from "../src/lib/beam";
test("pointer beam stays within bounds even with invalid input", () => {
  assert.equal(beamTarget(-10), 30);
  assert.equal(beamTarget(10), 82);
  assert.equal(beamTarget(Number.NaN), 56);
});
test("smoothing is frame-rate independent", () => {
  const whole = approach(0, 100, 0.035, 1 / 30);
  const half = approach(approach(0, 100, 0.035, 1 / 60), 100, 0.035, 1 / 60);
  assert.ok(Math.abs(whole - half) < 1e-10);
});
test("idle drift remains within the intended light field", () => {
  for (let t = 0; t < 1000; t += 0.5) {
    assert.ok(drift(t) >= 49 && drift(t) <= 67);
  }
});
