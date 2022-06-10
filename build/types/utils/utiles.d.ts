/**
 * Utility Service
 */
declare class Utilities {
    static WHITE_SPACES: string[];
    /**
     * Replaces all accented chars with regular ones
     */
    static replaceAccents(str: string): string;
    /**
     * Remove non-word chars.
     */
    static removeNonWord(str: string): string;
    /**
     * Remove chars from beginning of string.
     */
    static ltrim(str: string, chars: Array<string>): string;
    /**
     * Remove chars from end of string.
     */
    static rtrim(str: string, chars: Array<string>): string;
    /**
     * Remove white-spaces from beginning and end of string.
     */
    static trim(str: string, chars?: Array<string>): string;
    /**
     * Limit number of chars.
     */
    static truncate(str: string, maxChars: number, append: string, onlyFullWords: boolean): string;
    /**
     * Repeat string n times
     */
    static repeat(str: string, n: number): string;
}
export default Utilities;
