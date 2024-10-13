import { NextResponse } from "next/server";
import sendEmail from "@/app/lib/mail";
import clientPromise from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  return NextResponse.json({ status: true });
}

export async function POST(request) {
  const resdata = await request.json();
    const client = await clientPromise;
  const db = await client.db("wasteuserdtabase");
  const userdata = await db.collection("users").find({_id:new ObjectId(resdata.sellerId)}).toArray();
 
  const mailstst = await sendEmail(
    resdata.email,
    "Request to buy your product",
    "Request to buy your product",
    `<div>
    <h1>Request messege form Wastrally</h1>
    <p>USERNAME :${userdata[0].name}</p> <br>
    <p>PRODUCT:${resdata.type}</p><br>
    <a href="tel:   ${userdata[0].mobialNum}">CONTACT</a>
  
    </div>`

  );
  if (mailstst) {
    return NextResponse.json({
      mailrespnse: true,
    });
  }
  return NextResponse.json({
    mailrespnse: false,
  });
}
