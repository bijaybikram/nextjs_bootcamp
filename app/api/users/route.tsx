import { NextRequest, NextResponse } from "next/server";
import UserSchema from "./UserSchema";
import prisma from "@/prisma/Prisma";
import { date } from "zod";



interface Params {
    params: {
        user_id: number
    }
}

export async function GET(request: NextRequest) {

    const users = await prisma.user.findMany({})

    return NextResponse.json(users);
}

// Post method
export async function POST(request: NextRequest) {
    const body = await request.json()

    const validation = UserSchema.safeParse(body);

    if(!validation.success){
        return NextResponse.json({
            error: validation.error.errors[0].message
        },
        {status: 400}
    )
    }

    const isEmailExist = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })
 
    if(isEmailExist){
        return NextResponse.json({
            error: "Email already exists!"
        },
    {
        status: 400
    })
    }
    
    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email
        }
    })

    return NextResponse.json(newUser)
}