import { z } from 'zod'

export const loginZodValidator = z.object({
  username: z
    .string({ required_error: 'Username is required.' })
    .trim()
    .toLowerCase()
    .min(3, 'Username must contain at least 3 characters')
    .max(255, 'Username must contain at most 255 characters'),
  password: z
    .string({ required_error: 'Password is required.' })
    .trim()
    .min(3, 'Password must contain at least 3 characters')
    .max(255, 'Password must contain at most 255 characters'),
})

export const signupZodValidator = z.object({
  name: z
    .string({ required_error: 'Name is required.' })
    .trim()
    .min(3, 'Name must contain at least 3 characters')
    .max(50, 'Name must contain at most 50 characters')
    .refine((name) => /^[a-zA-Z\s]*$/.test(name), 'Name must contain only letters'),
  username: z
    .string({ required_error: 'Username is required.' })
    .trim()
    .toLowerCase()
    .min(3, 'Username must contain at least 3 characters')
    .max(255, 'Username must contain at most 255 characters')
    .refine((id) => /^[a-zA-Z0-9]*$/.test(id), 'Username must contain only letters and numbers'),
  email: z
    .string({ required_error: 'Email is required.' })
    .trim()
    .toLowerCase()
    .min(5, 'Email must contain at least 5 characters')
    .max(50, 'Email must contain at most 50 characters')
    .refine((email) => /\S+@\S+\.\S+/.test(email), 'Invalid email format'),
  password: z
    .string({ required_error: 'Password is required.' })
    .trim()
    .min(5, 'Password must contain at least 3 characters')
    .max(100, 'Password must contain at most 255 characters'),
})

export const verifyEmailZodValidator = z.object({
  username: z
    .string({ required_error: 'Username of email is required.' })
    .trim()
    .toLowerCase()
    .min(3, 'Username must contain at least 3 characters')
    .max(255, 'Username must contain at most 255 characters'),
  otp: z
    .string({ required_error: 'OTP is required.' })
    .trim()
    .min(6, 'OTP must contain at least 6 characters')
    .max(6, 'OTP must contain at most 6 characters'),
})
