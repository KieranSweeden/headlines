import z from 'zod';

export const blankSchema = z.object({
    index: z.number(),
    length: z.number()
});