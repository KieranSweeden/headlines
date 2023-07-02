import z from 'zod';

import articleLib from '$lib/articles';
import blanksLib from '$lib/blanks';

import type { GuardianArticle } from '$lib/articles/types';

import type { Headline } from './types';

export default {
    get: async function() {
        const articles = await articleLib.getArticles();

        if (!articles?.length) {
            throw new Error('Error fetching articles');
        }

        const headlines = [];
        for (const article of articles) {
            headlines.push(await this.generate(article));
        }

        return headlines;
    },

    generate: async function(article: GuardianArticle): Promise<Headline> {
        const headline = {};

        const blanks = blanksLib.create(article.fields.headline);

        return {
            title: article.fields.headline,
            datePosted: new Date(article.webPublicationDate),
            section: article.sectionName,
            body: article.fields.body,
            blanks
        };
    }
};