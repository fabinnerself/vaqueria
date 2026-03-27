import { NextResponse } from "next/server";
import { sendEmail } from "../../../lib/emailService";
import { validateSendEmailPayload } from "../../../lib/validate";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validateSendEmailPayload(body);

    if (!validation.ok) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const result = await sendEmail(validation.data!);
    const status = result.status === "failed" ? 500 : 200;

    return NextResponse.json(result, { status });
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
