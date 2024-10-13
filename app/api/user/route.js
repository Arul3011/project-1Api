import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = await client.db("wasteuserdtabase");
  const dbresponsre = await db.collection("users").find().toArray();
  return NextResponse.json({ dbresponsre });
}

export async function POST(response) {
  const fetchdata = await response;
  const fetdata = await fetchdata.json();
  const client = await clientPromise;
  const db = await client.db("wasteuserdtabase");
  if (fetdata) {
    var dbrespinse = await db
      .collection("users")
      .find({ email: fetdata.email })
      .toArray();
  }

  if (dbrespinse) {
    if (dbrespinse.length === 0) return NextResponse.json({ response: false });
  }
  if (dbrespinse[0].password == fetdata.password) {
    return NextResponse.json({
      request: true,
      userId: dbrespinse[0]._id,
      name: dbrespinse[0].name,
      email: dbrespinse[0].email,
      
    });
  } else {
    return NextResponse.json({ request: false });
  }
}
