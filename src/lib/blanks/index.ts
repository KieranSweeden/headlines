import type { Blank } from "./types";

const WORD_BLACKLIST = ['to', 'the', 'and', 'or', 'a', 'an', 'in', 'on', 'for', 'of'];

export default {
    create: function (title: string): Blank[] {
        const words = title.split(' ');

        return words.reduce((blanks: Blank[], word: string) => {
            if (WORD_BLACKLIST.includes(word)) return blanks;

            blanks.push({
                index: title.indexOf(word),
                length: word.length
            });

            return blanks;
        }, []);
    }
}