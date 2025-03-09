import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  let res = await fetch("https://v2.jokeapi.dev/joke/Any");
  let data = await res.json();
  console.log(data);
  return NextResponse.json({ data });
}
