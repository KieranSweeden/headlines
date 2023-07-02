import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (({ url }) => {
    if (url.pathname === '/') {
        throw redirect(301, '/play');
    }
}) satisfies LayoutServerLoad;