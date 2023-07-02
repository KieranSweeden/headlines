import z from 'zod';

import { blankSchema } from '$lib/blanks/schemas';

export const headlineSchema = z.object({
    title: z.string(),
    datePosted: z.date(),
    section: z.string(),
    body: z.string(),
    blanks: z.array(blankSchema),
});