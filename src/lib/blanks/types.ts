import type z from 'zod';

import type { blankSchema } from "./schemas";

export type Blank = z.infer<typeof blankSchema>;