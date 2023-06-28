import articleLib from '$lib/articles';

export default {
    generate: async function() {
        const articles = await articleLib.getArticles();

        return articles;
    }
};