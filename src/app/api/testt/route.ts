import { db } from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await db.query.postsTable.findMany();
  return NextResponse.json(posts);
}
