import { NextRequest, NextResponse } from "next/server";
export const runtime = "edge";

let counter = 0;

export async function GET(request: NextRequest) {
  counter++;
  return NextResponse.json({ message: "Hello from the edge", counter });
}
