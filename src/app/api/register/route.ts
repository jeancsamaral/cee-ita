import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Authentication with credentials is disabled" }, { status: 400 });
}
