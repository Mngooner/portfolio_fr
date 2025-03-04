import { connectToDatabase } from '@/app/lib/mongodb'
import { NextResponse } from 'next/server'
  
export async function GET() {
    const client = await connectToDatabase();
    const db = client.db("sample_mflix");
    const collection = db.collection('movies');
    const data = await collection.find({}).limit(15).toArray();

  return NextResponse.json(data, {status:200})
}