import Utilities from "./utils/utiles";

class Stringles {
  constructor() {}

  /**
   * "Safer" String.toLowerCase()
   */
  lowerCase = (str: string): string => {
    return str.toLowerCase();
  };

  /**
   * "Safer" String.toUpperCase()
   */
  upperCase = (str: string): string => {
    return str.toUpperCase();
  };

  /**
   * Convert string to camelCase text.
   */
  camelCase = (str: string): string => {
    str = Utilities.replaceAccents(str);
    str = Utilities.removeNonWord(str)
      .replace(/-/g, " ") //convert all hyphens to spaces
      .replace(/\s[a-z]/g, this.upperCase) //convert first char of each word to UPPERCASE
      .replace(/\s+/g, "") //remove spaces
      .replace(/^[A-Z]/g, this.lowerCase); //convert first char to lowercase
    return str;
  };

  /**
   * Add space between camelCase text.
   */
  unCamelCase = (str: string): string => {
    str = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2");
    str = str.toLowerCase(); //add space between camelCase text
    return str;
  };

  /**
   * UPPERCASE first char of each word.
   */
  properCase = (str: string): string => {
    return this.lowerCase(str).replace(/^\w|\s\w/g, this.upperCase);
  };

  /**
   * camelCase + UPPERCASE first char
   */
  pascalCase = (str: string): string => {
    return this.camelCase(str).replace(/^[a-z]/, this.upperCase);
  };

  /**
   * UPPERCASE first char of each sentence and lowercase other chars.
   */
  sentenceCase = (str: string): string => {
    // Replace first char of each sentence (new line or after '.\s+') to
    // UPPERCASE
    return this.lowerCase(str).replace(/(^\w)|\.\s+(\w)/gm, this.upperCase);
  };

  /**
   * Convert to lower case, remove accents, remove non-word chars and
   * replace spaces with the specified delimeter.
   * Does not split camelCase text.
   */
  slugify = (str: string, delimeter: string): string => {
    if (delimeter == null) {
      delimeter = "-";
    }

    str = Utilities.replaceAccents(str);
    str = Utilities.removeNonWord(str);
    str = Utilities.trim(str) //should come after removeNonWord
      .replace(/ +/g, delimeter) //replace spaces with delimeter
      .toLowerCase();

    return str;
  };

  /**
   * Replaces spaces with hyphens, split camelCase text, remove non-word chars, remove accents and convert to lower case.
   */
  hyphenate = (str: string): string => {
    str = this.unCamelCase(str);
    return this.slugify(str, "-");
  };

  /**
   * Replaces hyphens with spaces. (only hyphens between word chars)
   */
  unhyphenate = (str: string): string => {
    return str.replace(/(\w)(-)(\w)/g, "$1 $3");
  };

  /**
   * Replaces spaces with underscores, split camelCase text, remove
   * non-word chars, remove accents and convert to lower case.
   */
  underscore = (str: string): string => {
    str = this.unCamelCase(str);
    return this.slugify(str, "_");
  };

  /**
   * Remove non-word chars.
   */
  removeNonWord = (str: string): string => {
    return str.replace(/[^0-9a-zA-Z\xC0-\xFF -]/g, "");
  };

  /**
   * Convert line-breaks from DOS/MAC to a single standard (UNIX by default)
   */
  normalizeLineBreaks = (str: string, lineEnd: string): string => {
    lineEnd = lineEnd || "\n";

    return str
      .replace(/\r\n/g, lineEnd) // DOS
      .replace(/\r/g, lineEnd) // Mac
      .replace(/\n/g, lineEnd); // Unix
  };

  /**
   * Searches for a given substring
   */
  contains = (str: string, substring: string, fromIndex: number): boolean => {
    return str.indexOf(substring, fromIndex) !== -1;
  };

  /**
   * Truncate string at full words.
   */
  crop = (str: string, maxChars: number, append: string): string => {
    return Utilities.truncate(str, maxChars, append, true);
  };

  /**
   * Escape RegExp string chars.
   */
  escapeRegExp = (str: string): string => {
    const ESCAPE_CHARS = /[\\.+*?^$[\](){}/'#]/g;
    return str.replace(ESCAPE_CHARS, "\\$&");
  };

  /**
   * Escapes a string for insertion into HTML.
   */
  escapeHtml = (str: string): string => {
    str = str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/'/g, "&#39;")
      .replace(/"/g, "&quot;");

    return str;
  };

  /**
   * Unescapes HTML special chars
   */
  unescapeHtml = (str: string): string => {
    str = str
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"');
    return str;
  };

  /**
   * Escape string into unicode sequences
   */
  escapeUnicode = (str: string, shouldEscapePrintable: boolean): string => {
    return str.replace(/[\s\S]/g, (ch: string) => {
      // skip printable ASCII chars if we should not escape them
      if (!shouldEscapePrintable && /[\x20-\x7E]/.test(ch)) {
        return ch;
      }
      // we use "000" and slice(-4) for brevity, need to pad zeros,
      // unicode escape always have 4 chars after "\u"
      return "\\u" + ("000" + ch.charCodeAt(0).toString(16)).slice(-4);
    });
  };

  /**
   * Remove HTML tags from string.
   */
  stripHtmlTags = (str: string): string => {
    return str.replace(/<[^>]*>/g, "");
  };

  /**
   * Remove non-printable ASCII chars
   */
  removeNonASCII = (str: string): string => {
    // Matches non-printable ASCII chars -
    // http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
    return str.replace(/[^\x20-\x7E]/g, "");
  };

  /**
   * String interpolation
   */
  interpolate = (
    template: string,
    replacements: Array<string>,
    syntax: string
  ): string => {
    const stache = /\{\{(\w+)\}\}/g; //mustache-like

    const replaceFn = (match: string, prop: string) => {
      return prop in replacements ? replacements[prop] : "";
    };

    return template.replace(syntax || stache, replaceFn);
  };

  /**
   * Pad string with `char` if its' length is smaller than `minLen`
   */
  rpad = (str: string, minLen: number, ch: string) => {
    ch = ch || " ";
    return str.length < minLen
      ? str + Utilities.repeat(ch, minLen - str.length)
      : str;
  };

  /**
   * Pad string with `char` if its' length is smaller than `minLen`
   */
  lpad = (str: string, minLen: number, ch: string): string => {
    ch = ch || " ";

    return str.length < minLen
      ? Utilities.repeat(ch, minLen - str.length) + str
      : str;
  };

  /**
   * Limit number of chars.
   */
  truncate = (
    str: string,
    maxChars: number,
    append: string,
    onlyFullWords: boolean
  ): string => {
    append = append || "...";
    maxChars = onlyFullWords ? maxChars + 1 : maxChars;

    str = Utilities.trim(str);
    if (str.length <= maxChars) {
      return str;
    }
    str = str.substr(0, maxChars - append.length);
    //crop at last space or remove trailing whitespace
    str = onlyFullWords
      ? str.substr(0, str.lastIndexOf(" "))
      : Utilities.trim(str);
    return str + append;
  };

  /**
   * Capture all capital letters following a word boundary (in case the
   * input is in all caps)
   */
  abbreviate = (str: string): string => {
    return str.match(/\b([A-Z])/g).join("");
  };
}

export default Stringles;
