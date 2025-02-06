import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import schema from "./schema"

export async function GET() {
  const images = await prisma.image.findMany();
  return NextResponse.json(images);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 404})
    const image = await prisma.image.create({
        data: {
            name: body.name,
            url: body.url,
            learnt: body.learnt
        }
    })
    return NextResponse.json(image, {status: 200})
}


