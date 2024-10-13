import clientPromise from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ test: "testscucess" });
}
export async function POST(response) {
  const fetchdata = await response;
  const fetdata = await fetchdata.json();
  const client = await clientPromise;
  const db = await client.db("wasteuserdtabase");
  const insertresponse = await db
    .collection("posts")
    .find({ userID:fetdata.userID })
    .toArray();
  return NextResponse.json({ insertresponse });
}
