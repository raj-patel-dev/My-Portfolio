import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const authToken = request.cookies.get("authToken")?.value;

  if (authToken === "authenticated") {
    return NextResponse.json({ authenticated: true }, { status: 200 });
  } else {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}

