export type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendContactMessage(
  accessKey: string | undefined,
  input: ContactMessage,
) {
  if (!accessKey?.trim())
    throw new Error(
      "The form is temporarily unavailable. Please use the email link instead.",
    );
  const data = {
    name: input.name.trim(),
    email: input.email.trim(),
    subject: input.subject.trim(),
    message: input.message.trim(),
  };
  if (
    !data.name ||
    data.name.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ||
    data.email.length > 254 ||
    !data.subject ||
    data.subject.length > 160 ||
    /[\r\n]/.test(data.subject) ||
    !data.message ||
    data.message.length > 2000
  ) {
    throw new Error(
      "Please check your name, email, subject, and message before sending.",
    );
  }
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...data,
        access_key: accessKey,
        subject: `Portfolio: ${data.subject}`,
        botcheck: false,
      }),
      signal: AbortSignal.timeout(15000),
    });
    const result = await response.json();
    if (!response.ok || result?.success !== true)
      throw new Error("Delivery failed");
  } catch {
    throw new Error(
      "Your message could not be sent. Please try again or use the email link instead.",
    );
  }
}
