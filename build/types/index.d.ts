declare class Stringles {
    constructor();
    /**
     * "Safer" String.toLowerCase()
     */
    lowerCase: (str: string) => string;
    /**
     * "Safer" String.toUpperCase()
     */
    upperCase: (str: string) => string;
    /**
     * Convert string to camelCase text.
     */
    camelCase: (str: string) => string;
    /**
     * Add space between camelCase text.
     */
    unCamelCase: (str: string) => string;
    /**
     * UPPERCASE first char of each word.
     */
    properCase: (str: string) => string;
    /**
     * camelCase + UPPERCASE first char
     */
    pascalCase: (str: string) => string;
    /**
     * UPPERCASE first char of each sentence and lowercase other chars.
     */
    sentenceCase: (str: string) => string;
    /**
     * Convert to lower case, remove accents, remove non-word chars and
     * replace spaces with the specified delimeter.
     * Does not split camelCase text.
     */
    slugify: (str: string, delimeter: string) => string;
    /**
     * Replaces spaces with hyphens, split camelCase text, remove non-word chars, remove accents and convert to lower case.
     */
    hyphenate: (str: string) => string;
    /**
     * Replaces hyphens with spaces. (only hyphens between word chars)
     */
    unhyphenate: (str: string) => string;
    /**
     * Replaces spaces with underscores, split camelCase text, remove
     * non-word chars, remove accents and convert to lower case.
     */
    underscore: (str: string) => string;
    /**
     * Remove non-word chars.
     */
    removeNonWord: (str: string) => string;
    /**
     * Convert line-breaks from DOS/MAC to a single standard (UNIX by default)
     */
    normalizeLineBreaks: (str: string, lineEnd: string) => string;
    /**
     * Searches for a given substring
     */
    contains: (str: string, substring: string, fromIndex: number) => boolean;
    /**
     * Truncate string at full words.
     */
    crop: (str: string, maxChars: number, append: string) => string;
    /**
     * Escape RegExp string chars.
     */
    escapeRegExp: (str: string) => string;
    /**
     * Escapes a string for insertion into HTML.
     */
    escapeHtml: (str: string) => string;
    /**
     * Unescapes HTML special chars
     */
    unescapeHtml: (str: string) => string;
    /**
     * Escape string into unicode sequences
     */
    escapeUnicode: (str: string, shouldEscapePrintable: boolean) => string;
    /**
     * Remove HTML tags from string.
     */
    stripHtmlTags: (str: string) => string;
    /**
     * Remove non-printable ASCII chars
     */
    removeNonASCII: (str: string) => string;
    /**
     * String interpolation
     */
    interpolate: (template: string, replacements: Array<string>, syntax: string) => string;
    /**
     * Pad string with `char` if its' length is smaller than `minLen`
     */
    rpad: (str: string, minLen: number, ch: string) => string;
    /**
     * Pad string with `char` if its' length is smaller than `minLen`
     */
    lpad: (str: string, minLen: number, ch: string) => string;
    /**
     * Limit number of chars.
     */
    truncate: (str: string, maxChars: number, append: string, onlyFullWords: boolean) => string;
    /**
     * Capture all capital letters following a word boundary (in case the
     * input is in all caps)
     */
    abbreviate: (str: string) => string;
}
export default Stringles;
