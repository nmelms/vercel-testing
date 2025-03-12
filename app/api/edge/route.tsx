import { NextRequest, NextResponse } from "next/server";
export const runtime = "edge";

let counter = 0;

export async function GET(request: NextRequest) {
  counter++;
  try {
    // Fetch data from JSONPlaceholder API
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    // Check if the request was successful
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    // Parse the response as JSON
    const data = await response.json();

    // Return the data as JSON in the response
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(`errror: ${error}`, { status: 500 });
  }
}
