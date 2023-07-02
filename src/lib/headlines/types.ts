import type z from 'zod';

import type { headlineSchema } from './schemas';

export type Headline = z.infer<typeof headlineSchema>;