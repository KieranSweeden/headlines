import z from 'zod';

export const articleFilterSchema = z.object({
    type: z.string(),
    showFields: z.array(z.string()),
    lang: z.string(),
    section: z.string().optional(),
    fromDate: z.date().optional(),
    toDate: z.date().optional(),
});

export const articleSchema = z.object({
    id: z.string(),
    type: z.string(),
    sectionId: z.string(),
    sectionName: z.string(),
    webPublicationDate: z.string(),
    webTitle: z.string(),
    webUrl: z.string(),
    apiUrl: z.string(),
    isHosted: z.boolean(),
    pillarId: z.string(),
    pillarName: z.string(),
    fields: z.object({
        headline: z.string(),
        body: z.string(),
    })
});

export const responseSchema = z.object({
    status: z.string(),
    userTier: z.string(),
    total: z.number(),
    startIndex: z.number(),
    pageSize: z.number(),
    currentPage: z.number(),
    pages: z.number(),
    orderBy: z.string(),
    results: z.array(articleSchema)
});