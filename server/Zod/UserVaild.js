import z from "zod";

export const registerSchema = 
  z.object({
    name: z.string().min(4, { message: "Name Must be 4 or more characters long" }),
    email: z.string({ message: "Invalid email address" }),
    password: z.string().min(4, { message: "Password Must be $ or more characters long" })
  })

export const loginSchema  = z.object({
  email: z.string({ message: "Invalid email address" }),
  password: z.string().min(4, { message: "Password Must be 4 or more characters long" })
})
