import Guardian from 'guardian-js';
import { GUARDIAN_OP_KEY } from '$env/static/private';
import type { GuardianArticle, GuardianResponse, GuardianArticleFilter } from './types';
import { articleFilterSchema } from './schemas';

const guardianClient = new Guardian(GUARDIAN_OP_KEY, true);

const REQUIRED_ARTICLE_FILTER_FIELD_VALUES = {
    type: 'article',
    showFields: ['headline', 'body'],
    lang: 'en'
};

export default {
    // getArticle: async function(): Promise<LibResponse<GuardianArticle>> {

    // },

	getArticles: async function (
		query?: string,
		filter?: GuardianArticleFilter
	): Promise<GuardianArticle[]> {
        if (!query) query = '';
        
        if (!filter) {
            filter = {...REQUIRED_ARTICLE_FILTER_FIELD_VALUES};
        } else {
            Object.assign(filter, {...REQUIRED_ARTICLE_FILTER_FIELD_VALUES});
        }

        const validationResult = articleFilterSchema.safeParse(filter);
        if (validationResult.success) {
            filter = validationResult.data;
        } else {
            console.error(validationResult.error);
            throw new Error('filter object provided is not valid');
        }

        try {
            const res: GuardianResponse = await guardianClient.content.search(query, filter);
            return res.results;
        } catch (e) {
            console.error(e);
            throw new Error('error while searching for articles');
        }
	}
};
