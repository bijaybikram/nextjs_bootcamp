import z from "zod"

const UserSchema = z.object({
    name: z.string({required_error: "Name is required!"}).min(2, "Name must have 2 characters or more!"),
    email: z.string({required_error: "Name is required!"}).min(3),
})

export default UserSchema