import { NextRequest, NextResponse } from "next/server";
import { useState } from "react";

let counter = 0;

export async function GET(request: NextRequest) {
  let res = await fetch("https://v2.jokeapi.dev/joke/Any");
  let jokeData = await res.json();
  counter++;

  console.log(counter);
  return NextResponse.json({ jokeData, counter });
}
