import clientPromise from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ resmsg: true });
}
export async function POST(response) {
  const fetchdata = await response;
  const fetdata = await fetchdata.json();
  const client = await clientPromise;
  const db = await client.db("wasteuserdtabase");
  const dbresponsre = await db
    .collection("users")
    .find({ _id: new ObjectId(fetdata.userID) })
    .toArray();
  if (dbresponsre)
    return NextResponse.json({
      dbresponsre,
    });
}
