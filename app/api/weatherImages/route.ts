import { NextResponse } from "next/server";
import { prisma } from "@/prisma/client";


export async function GET() {
  const images = await prisma.weatherImage.findMany();
  return NextResponse.json(images);
}



