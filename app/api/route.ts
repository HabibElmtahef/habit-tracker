import { connectToDb } from "@/src/lib/connectToDb";
import { NextResponse } from "next/server";

// Handles GET requests to /api
export async function GET(request: Request) {
  // ...
  await connectToDb()
  return NextResponse.json({ message: "Hello World" });
}
