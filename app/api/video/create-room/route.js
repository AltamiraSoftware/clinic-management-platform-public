import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = await fetch("https://api.daily.co/v1/rooms", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.DAILY_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        properties: {
          enable_screenshare: true,
          enable_chat: false,
          exp: Math.round(Date.now() / 1000) + 60 * 60,
        },
      }),
    });

    const room = await response.json();

    if (!response.ok) {
      if (process.env.NODE_ENV === "development") {
        console.error("Daily API error:", room);
      }
      return NextResponse.json({ error: "No se pudo crear la sala" }, { status: 500 });
    }

    return NextResponse.json({ url: room.url });
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error("Daily unexpected error:", err);
    }
    return NextResponse.json(
      { error: "No se pudo crear la sala de videollamada" },
      { status: 500 }
    );
  }
}
