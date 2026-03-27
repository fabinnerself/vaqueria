import { SendEmailPayload } from "../types/email";

export function validateSendEmailPayload(body: unknown): {
  ok: boolean;
  data?: SendEmailPayload;
  error?: string;
} {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Body must be a JSON object" };
  }

  const payload = body as Record<string, unknown>;

  const to = payload.to;
  const subject = payload.subject;
  const html = payload.html;
  const text = payload.text;

  if (typeof to !== "string" || to.length < 3) {
    return { ok: false, error: "Field 'to' is required" };
  }
  if (typeof subject !== "string" || subject.length < 1) {
    return { ok: false, error: "Field 'subject' is required" };
  }
  if (typeof html !== "string" && typeof text !== "string") {
    return { ok: false, error: "Provide 'html' or 'text'" };
  }

  const parsed: SendEmailPayload = {
    to,
    subject,
    html: typeof html === "string" ? html : undefined,
    text: typeof text === "string" ? text : undefined,
  };

  return { ok: true, data: parsed };
}
