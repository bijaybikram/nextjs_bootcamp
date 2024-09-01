import prisma from "@/prisma/Prisma";
import { NextRequest, NextResponse } from "next/server";
import UserSchema from "../UserSchema";

interface Params {
    params: {
        user_id: string
    }
}
interface User {
    id: number,
    name: string,
    email: string,
}

export async function GET(request: NextRequest, {params: {user_id}}: Params){

    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(user_id)
        }
    })

    if(!user) {
        return NextResponse.json({
            error: "User not found!"
        },
    {
        status: 404
    })
    }

    return NextResponse.json(user)
}

    // update user
export async function PUT(request: NextRequest, {params: {user_id}}: Params){
    const body: User = await request.json()
    console.log(body)
    const validation = UserSchema.safeParse(body);
    
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(user_id)
        }
    })

    if(!user) {
        return NextResponse.json({
            error: "User not found!"
        },
    {
        status: 404
    })
    }

    // updated user
     const updatedUser = await prisma.user.update({
        where: {id: parseInt(user_id)},
    data: {
        name: body.name,
        email: body.email    
},
})


    return NextResponse.json(updatedUser)
}

    // delete user

export async function DELETE(request: NextRequest, {params: {user_id}}: Params) {
    
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(user_id)
        }
    })

    if(!user) {
        return NextResponse.json({
            error: "User not found!"
        },
    {
        status: 404
    })
    }

    const deletedUser = await prisma.user.delete({
        where: {
            id: parseInt(user_id)
        },
    })
    
    return NextResponse.json({
        message: "User deleted succesfully!"
     })
}


