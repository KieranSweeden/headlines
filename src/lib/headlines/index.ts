import z from 'zod';

import articleLib from '$lib/articles';

import type { GuardianArticle } from '$lib/articles/types';

const headlineSchema = z.object({
    title: z.string(),
    datePosted: z.date(),
    section: z.string(),
    body: z.string(),
});

type Headline = z.infer<typeof headlineSchema>;

export default {
    get: async function() {
        const articles = await articleLib.getArticles();

        if (!articles?.length) {
            throw new Error('Error fetching articles');
        }

        console.log(articles)

        const headlines = [];

        for (const article of articles) {
            headlines.push(await this.generate(article));
        }

        console.log(headlines)

        return headlines;
    },

    generate: async function(article: GuardianArticle): Promise<Headline> {

        


        return {
            title: article.fields.headline,
            datePosted: new Date(article.webPublicationDate),
            section: article.sectionName,
            body: article.fields.body,
        };
    }
};