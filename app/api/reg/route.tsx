import { NextRequest, NextResponse } from "next/server";

let counter = 0;

export async function GET(request: NextRequest) {
  let res = await fetch("https://vercel-test.nickmelms.dev");
  let jokeData = await res.json();
  counter++;

  console.log(counter);
  return NextResponse.json({ jokeData, counter });
}
