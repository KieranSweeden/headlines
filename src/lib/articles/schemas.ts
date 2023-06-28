import z from 'zod';

export const articleFilterSchema = z.object({
    type: z.string(),
    showFields: z.array(z.string()),
    lang: z.string(),
    section: z.string().optional(),
    fromDate: z.date().optional(),
    toDate: z.date().optional(),
});