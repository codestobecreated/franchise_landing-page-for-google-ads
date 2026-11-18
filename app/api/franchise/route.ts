import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch("https://core.reluxelectric.com/api/franchise/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error("Franchise API Proxy Error:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry to Relux core server" },
      { status: 500 }
    );
  }
}
