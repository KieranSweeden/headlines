import type {
    responseSchema,
    articleSchema,
    articleFilterSchema
} from './schemas';

import type z from 'zod';



export type GuardianResponse = z.infer<typeof responseSchema>;
export type GuardianArticle = z.infer<typeof articleSchema>;
export type GuardianArticleFilter = z.infer<typeof articleFilterSchema>;


