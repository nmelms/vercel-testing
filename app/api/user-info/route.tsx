import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return NextResponse.json({ message: "Hello from api!" });
}
