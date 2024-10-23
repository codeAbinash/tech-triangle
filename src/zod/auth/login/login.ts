import { z } from 'zod'

export const loginZodValidator = z.object({
  username: z
    .string()
    .trim()
    .toLowerCase()
    .min(3, 'Username must contain at least 3 characters')
    .max(255, 'Username must contain at most 255 characters'),
  password: z
    .string()
    .trim()
    .toLowerCase()
    .min(3, 'Password must contain at least 3 characters')
    .max(255, 'Password must contain at most 255 characters'),
})
