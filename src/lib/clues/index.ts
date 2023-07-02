import cohere from 'cohere-ai';
import { COHERE_API_KEY } from '$env/static/private';

cohere.init(COHERE_API_KEY);

export default {
    generate: async function(articleBody: string) {
        const response = await cohere.summarize({
            text: articleBody,
            temperature: 1,
            length: 'short',
            format: 'paragraph'
        });

        return {
            statusCode: response.statusCode,
            body: response.body.summary
        };
    }
};