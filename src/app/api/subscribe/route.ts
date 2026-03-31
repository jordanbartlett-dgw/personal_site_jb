import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json(
      { error: "Email is required" },
      { status: 400 }
    );
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    return NextResponse.json(
      { error: "Newsletter service is not configured" },
      { status: 500 }
    );
  }

  const response = await fetch(
    `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: "jordanbartlett.co",
        utm_medium: "website",
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    console.error("Beehiiv subscribe error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: response.status }
    );
  }

  return NextResponse.json({ success: true });
}
