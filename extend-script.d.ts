// Type definitions for ExtendScript JS
// Definitions by: Ludwig DUBOS <https://github.com/ldubos>
// Definitions: https://github.com/ldubos/indesign.d.ts
// TypeScript Version: 2.8.1

/// <reference no-default-lib="true"/>

/////////////////////////////
/// ECMAScript APIs
/////////////////////////////

declare var NaN: number;
declare var Infinity: number;

/**
  * Evaluates JavaScript code and executes it.
  * @param x A String value that contains valid JavaScript code.
  */
declare function eval(x: string): any;

/**
  * Converts A string to an integer.
  * @param s A string to convert into a number.
  * @param radix A value between 2 and 36 that specifies the base of the number in numString.
  * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
  * All other strings are considered decimal.
  */
declare function parseInt(s: string, radix?: number): number;

/**
  * Converts a string to a floating-point number.
  * @param string A string that contains a floating-point number.
  */
declare function parseFloat(string: string): number;

/**
  * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
  * @param number A numeric value.
  */
declare function isNaN(number: number): boolean;

/**
  * Determines whether a supplied number is finite.
  * @param number Any numeric value.
  */
declare function isFinite(number: number): boolean;

/**
  * Gets the unencoded version of an encoded Uniform Resource Identifier (URI).
  * @param encodedURI A value representing an encoded URI.
  */
declare function decodeURI(encodedURI: string): string;

/**
  * Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
  * @param encodedURIComponent A value representing an encoded URI component.
  */
declare function decodeURIComponent(encodedURIComponent: string): string;

/**
  * Encodes a text string as a valid Uniform Resource Identifier (URI)
  * @param uri A value representing an encoded URI.
  */
declare function encodeURI(uri: string): string;

/**
  * Encodes a text string as a valid component of a Uniform Resource Identifier (URI).
  * @param uriComponent A value representing an encoded URI component.
  */
declare function encodeURIComponent(uriComponent: string): string;

/**
  * Displays an alert box.
  * @param message The text to display.
  * @param title The title of the alert (ignored on the Macintosh).
  * @param errorIcon Display an Error icon (ignored on the Macintosh). Default is false.
  */
declare function alert(message: string, title?: string, errorIcon?: boolean): string;

/**
  * Displays an alert box with Yes and No buttons; returns true for Yes.
  * @param message The text to display.
  * @param noAsDefault Set to true to set the No button as the default button. Default is false.
  * @param title The title of the alert (ignored on the Macintosh).
  */
declare function comfirm(message: string, noAsDefault?: boolean, title?: string): boolean;

/**
  * Creates a URL-encoded string from aString.
  * In the new string, characters of aString that require URL encoding are replaced with the format %xx, where xx is the hexadecimal value of the character code in the Unicode character set.
  * This format is used to transmit information appended to a URL during, for example, execution of the GET method.
  * Use the unescape() global function to translate the string back into its original format.
  * Returns a string which is aString URL-encoded.
  * @param aString The string to be encoded.
  */
declare function escpae(aString: string): string;

/**
  * Returns true if the supplied string is a valid XML name.
  * @param name The XML name to test.
  */
declare function isXMLName(name: string): boolean;

/**
  * Localizes a ZString-encoded string and merges additional arguments into the string.
  * @param what The string to localize. A ZString-encoded string that can contain placeholder for additional arguments in the form %1 to %n.
  * @param argument Optional argument(s) to be merged into the string. There may be more than one argument.
  */
declare function localize(what: string, argument?: any): string;

/**
  * Displays a dialog allowing the user to enter text
  * Returns null if the user cancelled the dialog, the text otherwise.
  * @param prompt The text to display.
  * @param defaultText The default text to preset the edit field with.
  * @param title The title of the dialog.
  */
declare function prompt(prompt: string, defaultText?: string, title?: string): string;

/**
  * Defines the default XML namespace.
  * This is a replacement function for the standard JavaScript statement set default xml namespace.
  * @param namespace The namespace to use. Omit this parameter to return to the empty namespace.
  * This is either a Namespace object or a string.
  */
declare function setDefaultXMLNamespace(namespace: Namespace | string): void;

/**
  * Translates URL-encoded string into a regular string, and returns that string.
  * Use the escape() global function to URL-encode strings.
  * @param stringExpression The URL-encoded string to convert.
  */
declare function unescape(stringExpression: string): string;

/**
  * Creates a source code representation of the supplied argument, and returns it as a string.
  * @param what The object to uneval.
  */
declare function uneval(what: any): string;

interface Object {
    /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */
    constructor: Function;

    /**
      * Creates and returns a string representing this object, localized for the current locale.
      * @see toString()
      */
    toLocaleString(): string;

    /**
      * Creates and returns a string representation of this object.
      * This function serializes the object, so that it can, for example, be passed between engines.
      * Pass the returned string back to eval() to recreate the object.
      * Works only with built-in classes.
      */
    toSource(): string;

    /** Returns a string representation of an object. */
    toString(): string;

    /**
      * Returns a date converted to a string using the current locale.
      * @see toString()
      */
    toLocaleString(): string;

    /** Returns the primitive value of the specified object. */
    valueOf(): Object;

    /**
      * Determines whether an object has a property with the specified name.
      * @param v A property name.
      */
    hasOwnProperty(v: string): boolean;

    /**
      * Determines whether an object exists in another object's prototype chain.
      * @param v Another object whose prototype chain is to be checked.
      */
    isPrototypeOf(v: Object): boolean;

    /**
      * Determines whether a specified property is enumerable.
      * @param v A property name.
      */
    propertyIsEnumerable(v: string): boolean;

    /**
      * Adds a watch function to a property, which is called when the value changes.
      * This function can accept, modify, or reject a new value that the user, application, or a script has attempted to place in a property.
      * @param name The name of the property to watch.
      * @param callback The function to be called when the value of this property changes.
      * This function must three arguments, and return as its result the value to be stored in the property.
      * The arguments are: name: the name of the property that changes.
      * oldValue: The old property value. newValue: The new property value that was specified.
      */
    watch(name: string, callback: Function): void;

    /**
      * Removes the watch function of a property.
      * @param name The name of the property to unwatch.
      */
    unwatch(name: string): void;
}

interface ObjectConstructor {
    new(value?: any): Object;
    (): any;
    (value: any): any;

    /** A reference to the prototype for a class of objects. */
    prototype: Object;

    /** Retrieves and returns the Reflection object associated with this method or a property. */
    reflect: Reflection;
}

/**
  * Provides functionality common to all JavaScript objects.
  */
declare var Object: ObjectConstructor;

/**
  * Creates a new function.
  */
interface Function {
    /**
      * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
      * @param thisArg The object to be used as the this object.
      * @param argArray A set of arguments to be passed to the function.
      */
    apply(thisArg: any, argArray?: any): any;

    /**
      * Calls a method of an object, substituting another object for the current object.
      * @param thisArg The object to be used as the current object.
      * @param argArray A list of arguments to be passed to the method.
      */
    call(thisArg: any, ...argArray: any[]): any;

    prototype: any;
    length: number;
    /**
      * The number of formal arguments.
      * This property is deprecated; use the length property instead.
      * @deprecated
      */
    arity: number;

    arguments: any;
    caller: Function;
}

interface FunctionConstructor {
    /**
      * Creates a new function.
      * @param args A list of arguments the function accepts.
      */
    new(...args: string[]): Function;
    (...args: string[]): Function;
    prototype: Function;
}

declare var Function: FunctionConstructor;

interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}

interface String {
    /** Returns a string representation of a string. */
    toString(): string;

    /**
      * Returns the character at the specified index.
      * @param pos The zero-based index of the desired character.
      */
    charAt(pos: number): string;

    /**
      * Returns the Unicode value of the character at the specified location.
      * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
      */
    charCodeAt(index: number): number;

    /**
      * Returns a string that contains the concatenation of two or more strings.
      * @param strings The strings to append to the end of the string.
      */
    concat(...strings: string[]): string;

    /**
      * Returns a string consisting of this string enclosed in a <tt> tag.
      */
    fixed(): string;

    /**
      * Returns a string consisting of this string enclosed in a <font> tag.
      * @param color The value to be stored in the tag's color attribute.
      */
    fontcolor(color: string): string;

    /**
      * Returns a string consisting of this string enclosed in a <font> tag.
      * @param size The value to be stored in the tag's size attribute.
      */
    fontsize(size: string): string;

    /**
      * Returns a string consisting of this string enclosed in a <i> tag.
      */
    italics(): string;

    /**
      * Returns a string consisting of this string enclosed in a <a> tag.
      * @param href The value to be stored in the tag's href attribute.
      */
    link(href: string): string;

    /**
      * Returns a string consisting of this string enclosed in a <small> tag.
      */
    small(): string;

    /**
      * Returns a string consisting of this string enclosed in a <strike> tag.
      */
    strike(): string;

    /**
      * Returns a string consisting of this string enclosed in a <sub> tag.
      */
    sub(): string;

    /**
      * Returns a string consisting of this string enclosed in a <sup> tag.
      */
    sup(): string;

    /**
      * Returns the position of the first occurrence of a substring.
      * @param searchString The substring to search for in the string
      * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
      */
    indexOf(searchString: string, position?: number): number;

    /**
      * Returns the last occurrence of a substring in the string.
      * @param searchString The substring to search for.
      * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
      */
    lastIndexOf(searchString: string, position?: number): number;

    /**
      * Determines whether two strings are equivalent in the current locale.
      * @param that String to compare to target string
      */
    localeCompare(that: string): number;

    /**
      * Matches a string with a regular expression, and returns an array containing the results of that search.
      * @param regexp A variable name or string literal containing the regular expression pattern and flags.
      */
    match(regexp: string): RegExpMatchArray;

    /**
      * Matches a string with a regular expression, and returns an array containing the results of that search.
      * @param regexp A regular expression object that contains the regular expression pattern and applicable flags.
      */
    match(regexp: RegExp): RegExpMatchArray;

    /**
      * Replaces text in a string, using a regular expression or search string.
      * @param searchValue A string that represents the regular expression.
      * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
      */
    replace(searchValue: string, replaceValue: string): string;

    /**
      * Replaces text in a string, using a regular expression or search string.
      * @param searchValue A string that represents the regular expression.
      * @param replacer A function that returns the replacement text.
      */
    replace(searchValue: string, replacer: (substring: string, ...args: any[]) => string): string;

    /**
      * Replaces text in a string, using a regular expression or search string.
      * @param searchValue A Regular Expression object containing the regular expression pattern and applicable flags.
      * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
      */
    replace(searchValue: RegExp, replaceValue: string): string;

    /**
      * Replaces text in a string, using a regular expression or search string.
      * @param searchValue A Regular Expression object containing the regular expression pattern and applicable flags
      * @param replacer A function that returns the replacement text.
      */
    replace(searchValue: RegExp, replacer: (substring: string, ...args: any[]) => string): string;

    /**
      * Finds the first substring match in a regular expression search.
      * @param regexp The regular expression pattern and applicable flags.
      */
    search(regexp: string): number;

    /**
      * Finds the first substring match in a regular expression search.
      * @param regexp The regular expression pattern and applicable flags.
      */
    search(regexp: RegExp): number;

    /**
      * Returns a section of a string.
      * @param start The index to the beginning of the specified portion of stringObj.
      * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
      * If this value is not specified, the substring continues to the end of stringObj.
      */
    slice(start?: number, end?: number): string;

    /**
      * Split a string into substrings using the specified separator and return them as an array.
      * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
      * @param limit A value used to limit the number of elements returned in the array.
      */
    split(separator: string, limit?: number): string[];

    /**
      * Split a string into substrings using the specified separator and return them as an array.
      * @param separator A Regular Express that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
      * @param limit A value used to limit the number of elements returned in the array.
      */
    split(separator: RegExp, limit?: number): string[];

    /**
      * Returns the substring at the specified location within a String object.
      * @param start The zero-based index number indicating the beginning of the substring.
      * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
      * If end is omitted, the characters from start through the end of the original string are returned.
      */
    substring(start: number, end?: number): string;

    /** Converts all the alphabetic characters in a string to lowercase. */
    toLowerCase(): string;

    /** Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. */
    toLocaleLowerCase(): string;

    /** Converts all the alphabetic characters in a string to uppercase. */
    toUpperCase(): string;

    /** Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. */
    toLocaleUpperCase(): string;

    /** Returns the length of a String object. */
    length: number;

    // IE extensions
    /**
      * Gets a substring beginning at the specified location and having the specified length.
      * @param from The starting position of the desired substring. The index of the first character in the string is zero.
      * @param length The number of characters to include in the returned substring.
      */
    substr(from: number, length?: number): string;

    /** Returns the primitive value of the specified object. */
    valueOf(): string;

    /** Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes. */
    toSource(): string;

    /** Returns itself. */
    toString(): string;

    [index: number]: string;
}

interface StringConstructor {
    new(value?: any): String;
    (value?: any): string;
    prototype: String;
    fromCharCode(...codes: number[]): string;
}

/**
  * Allows manipulation and formatting of text strings and determination and location of substrings within strings.
  */
declare var String: StringConstructor;

interface Boolean {
    /** Returns the primitive value of the specified object. */
    valueOf(): boolean;

    /** Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes. */
    toSource(): string;

    /** Returns the string representation of the value of bool. */
    toString(): string;
}

interface BooleanConstructor {
    new(value?: any): Boolean;
    (value?: any): boolean;
    prototype: Boolean;
}

declare var Boolean: BooleanConstructor;

interface Number {
    /**
      * Returns a string representation of an object.
      * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
      */
    toString(radix?: number): string;

    /**
      * Returns a string representing a number in fixed-point notation.
      * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
      */
    toFixed(fractionDigits?: number): string;

    /**
      * Returns a string containing a number represented in exponential notation.
      * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
      */
    toExponential(fractionDigits?: number): string;

    /**
      * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
      * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
      */
    toPrecision(precision?: number): string;

    /** Returns the primitive value of the specified object. */
    valueOf(): number;

    /** Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes. */
    toSource(): string;
}

interface NumberConstructor {
    new(value?: any): Number;
    (value?: any): number;
    prototype: Number;

    /** The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308. */
    MAX_VALUE: number;

    /** The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324. */
    MIN_VALUE: number;

    /**
      * A value that is not a number.
      * In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function.
      */
    NaN: number;

    /**
      * A value that is less than the largest negative number that can be represented in JavaScript.
      * JavaScript displays NEGATIVE_INFINITY values as -infinity.
      */
    NEGATIVE_INFINITY: number;

    /**
      * A value greater than the largest number that can be represented in JavaScript.
      * JavaScript displays POSITIVE_INFINITY values as infinity.
      */
    POSITIVE_INFINITY: number;
}

/** An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers. */
declare var Number: NumberConstructor;

interface TemplateStringsArray extends Array<string> {
    raw: string[];
}

interface Math {
    /** The mathematical constant e. This is Euler's number, the base of natural logarithms. */
    E: number;

    /** The natural logarithm of 10. */
    LN10: number;

    /** The natural logarithm of 2. */
    LN2: number;

    /** The base-2 logarithm of e. */
    LOG2E: number;

    /** The base-10 logarithm of e. */
    LOG10E: number;

    /** Pi. This is the ratio of the circumference of a circle to its diameter. */
    PI: number;

    /** The square root of 0.5, or, equivalently, one divided by the square root of 2. */
    SQRT1_2: number;

    /** The square root of 2. */
    SQRT2: number;

    /**
      * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
      * For example, the absolute value of -5 is the same as the absolute value of 5.
      * @param x A numeric expression for which the absolute value is needed.
      */
    abs(x: number): number;

    /**
      * Returns the arc cosine (or inverse cosine) of a number.
      * @param x A numeric expression.
      */
    acos(x: number): number;

    /**
      * Returns the arcsine of a number.
      * @param x A numeric expression.
      */
    asin(x: number): number;

    /**
      * Returns the arctangent of a number.
      * @param x A numeric expression for which the arctangent is needed.
      */
    atan(x: number): number;

    /**
      * Returns the angle (in radians) from the X axis to a point.
      * @param y A numeric expression representing the cartesian y-coordinate.
      * @param x A numeric expression representing the cartesian x-coordinate.
      */
    atan2(y: number, x: number): number;

    /**
      * Returns the smallest number greater than or equal to its numeric argument.
      * @param x A numeric expression.
      */
    ceil(x: number): number;

    /**
      * Returns the cosine of a number.
      * @param x A numeric expression that contains an angle measured in radians.
      */
    cos(x: number): number;

    /**
      * Returns e (the base of natural logarithms) raised to a power.
      * @param x A numeric expression representing the power of e.
      */
    exp(x: number): number;

    /**
      * Returns the greatest number less than or equal to its numeric argument.
      * @param x A numeric expression.
      */
    floor(x: number): number;

    /**
      * Returns the natural logarithm (base e) of a number.
      * @param x A numeric expression.
      */
    log(x: number): number;

    /**
      * Returns the larger of a set of supplied numeric expressions.
      * @param values Numeric expressions to be evaluated.
      */
    max(...values: number[]): number;

    /**
      * Returns the smaller of a set of supplied numeric expressions.
      * @param values Numeric expressions to be evaluated.
      */
    min(...values: number[]): number;

    /**
      * Returns the value of a base expression taken to a specified power.
      * @param x The base value of the expression.
      * @param y The exponent value of the expression.
      */
    pow(x: number, y: number): number;

    /** Returns a pseudorandom number between 0 and 1. */
    random(): number;

    /**
      * Returns a supplied numeric expression rounded to the nearest number.
      * @param x The value to be rounded to the nearest number.
      */
    round(x: number): number;

    /**
      * Returns the sine of a number.
      * @param x A numeric expression that contains an angle measured in radians.
      */
    sin(x: number): number;

    /**
      * Returns the square root of a number.
      * @param x A numeric expression.
      */
    sqrt(x: number): number;

    /**
      * Returns the tangent of a number.
      * @param x A numeric expression that contains an angle measured in radians.
      */
    tan(x: number): number;
}

/** An intrinsic object that provides basic mathematics functionality and constants. */
declare var Math: Math;

/** Enables basic storage and retrieval of dates and times. */
interface Date {
    /** Returns a string representation of a date. The format of the string depends on the locale. */
    toString(): string;

    /** Returns a date as a string value. */
    toDateString(): string;

    /** Returns a time as a string value. */
    toTimeString(): string;

    /** Returns a value as a string value appropriate to the host environment's current locale. */
    toLocaleString(): string;

    /** Returns a date as a string value appropriate to the host environment's current locale. */
    toLocaleDateString(): string;

    /** Returns a time as a string value appropriate to the host environment's current locale. */
    toLocaleTimeString(): string;

    /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */
    valueOf(): number;

    /** Gets the time value in milliseconds. */
    getTime(): number;

    /** Gets the year, using local time. */
    getFullYear(): number;

    /** Gets the year using Universal Coordinated Time (UTC). */
    getUTCFullYear(): number;

    /** Gets the month, using local time. */
    getMonth(): number;

    /** Gets the month of a Date object using Universal Coordinated Time (UTC). */
    getUTCMonth(): number;

    /** Gets the day-of-the-month, using local time. */
    getDate(): number;

    /** Gets the day-of-the-month, using Universal Coordinated Time (UTC). */
    getUTCDate(): number;

    /** Gets the day of the week, using local time. */
    getDay(): number;

    /** Gets the day of the week using Universal Coordinated Time (UTC). */
    getUTCDay(): number;

    /** Gets the hours in a date, using local time. */
    getHours(): number;

    /** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */
    getUTCHours(): number;

    /** Gets the minutes of a Date object, using local time. */
    getMinutes(): number;

    /** Gets the minutes of a Date object using Universal Coordinated Time (UTC). */
    getUTCMinutes(): number;

    /** Gets the seconds of a Date object, using local time. */
    getSeconds(): number;

    /** Gets the seconds of a Date object using Universal Coordinated Time (UTC). */
    getUTCSeconds(): number;

    /** Gets the milliseconds of a Date, using local time. */
    getMilliseconds(): number;

    /** Gets the milliseconds of a Date object using Universal Coordinated Time (UTC). */
    getUTCMilliseconds(): number;

    /** Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC). */
    getTimezoneOffset(): number;

    /**
      * Sets the date and time value in the Date object.
      * @param time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.
      */
    setTime(time: number): number;

    /**
      * Sets the milliseconds value in the Date object using local time.
      * @param ms A numeric value equal to the millisecond value.
      */
    setMilliseconds(ms: number): number;

    /**
      * Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
      * @param ms A numeric value equal to the millisecond value.
      */
    setUTCMilliseconds(ms: number): number;

    /**
      * Sets the seconds value in the Date object using local time.
      * @param sec A numeric value equal to the seconds value.
      * @param ms A numeric value equal to the milliseconds value.
      */
    setSeconds(sec: number, ms?: number): number;

    /**
      * Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
      * @param sec A numeric value equal to the seconds value.
      * @param ms A numeric value equal to the milliseconds value.
      */
    setUTCSeconds(sec: number, ms?: number): number;

    /**
      * Sets the minutes value in the Date object using local time.
      * @param min A numeric value equal to the minutes value.
      * @param sec A numeric value equal to the seconds value.
      * @param ms A numeric value equal to the milliseconds value.
      */
    setMinutes(min: number, sec?: number, ms?: number): number;

    /**
      * Sets the minutes value in the Date object using Universal Coordinated Time (UTC).
      * @param min A numeric value equal to the minutes value.
      * @param sec A numeric value equal to the seconds value.
      * @param ms A numeric value equal to the milliseconds value.
      */
    setUTCMinutes(min: number, sec?: number, ms?: number): number;

    /**
      * Sets the hour value in the Date object using local time.
      * @param hours A numeric value equal to the hours value.
      * @param min A numeric value equal to the minutes value.
      * @param sec A numeric value equal to the seconds value.
      * @param ms A numeric value equal to the milliseconds value.
      */
    setHours(hours: number, min?: number, sec?: number, ms?: number): number;

    /**
      * Sets the hours value in the Date object using Universal Coordinated Time (UTC).
      * @param hours A numeric value equal to the hours value.
      * @param min A numeric value equal to the minutes value.
      * @param sec A numeric value equal to the seconds value.
      * @param ms A numeric value equal to the milliseconds value.
      */
    setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;

    /**
      * Sets the numeric day-of-the-month value of the Date object using local time.
      * @param date A numeric value equal to the day of the month.
      */
    setDate(date: number): number;

    /**
      * Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
      * @param date A numeric value equal to the day of the month.
      */
    setUTCDate(date: number): number;

    /**
      * Sets the month value in the Date object using local time.
      * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
      * @param date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
      */
    setMonth(month: number, date?: number): number;

    /**
      * Sets the month value in the Date object using Universal Coordinated Time (UTC).
      * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
      * @param date A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.
      */
    setUTCMonth(month: number, date?: number): number;

    /**
      * Sets the year of the Date object using local time.
      * @param year A numeric value for the year.
      * @param month A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.
      * @param date A numeric value equal for the day of the month.
      */
    setFullYear(year: number, month?: number, date?: number): number;

    /**
      * Sets the year value in the Date object using Universal Coordinated Time (UTC).
      * @param year A numeric value equal to the year.
      * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.
      * @param date A numeric value equal to the day of the month.
      */
    setUTCFullYear(year: number, month?: number, date?: number): number;

    /** Returns a date converted to a string using Universal Coordinated Time (UTC). */
    toUTCString(): string;

    toGMTString(): string;

    /** Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes. */
    toSource(): string;
}

interface DateConstructor {
    new(): Date;
    new(value: number): Date;
    new(value: string): Date;
    new(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date;
    (): string;
    prototype: Date;

    /**
      * Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.
      * @param s A date string
      */
    parse(s: string): number;

    /**
      * Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.
      * @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
      * @param month The month as an number between 0 and 11 (January to December).
      * @param date The date as an number between 1 and 31.
      * @param hours Must be supplied if minutes is supplied. An number from 0 to 23 (midnight to 11pm) that specifies the hour.
      * @param minutes Must be supplied if seconds is supplied. An number from 0 to 59 that specifies the minutes.
      * @param seconds Must be supplied if milliseconds is supplied. An number from 0 to 59 that specifies the seconds.
      * @param ms An number from 0 to 999 that specifies the milliseconds.
      */
    UTC(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number;

    now(): number;
}

declare var Date: DateConstructor;

interface RegExpMatchArray extends Array<string> {
    index?: number;
    input?: string;
}

interface RegExpExecArray extends Array<string> {
    index: number;
    input: string;
}

interface RegExp {
    /**
      * Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.
      * @param string The String object or string literal on which to perform the search.
      */
    exec(string: string): RegExpExecArray;

    /**
      * Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
      * @param string String on which to perform the search.
      */
    test(string: string): boolean;

    /** Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal. */
    source: string;

    /** Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only. */
    global: boolean;

    /** Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only. */
    ignoreCase: boolean;

    /** Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only. */
    multiline: boolean;

    compile(): RegExp;
}

interface RegExpConstructor {
    new(pattern: string, flags?: string): RegExp;
    (pattern: string, flags?: string): RegExp;
    prototype: RegExp;

    $1: string;
    $2: string;
    $3: string;
    $4: string;
    $5: string;
    $6: string;
    $7: string;
    $8: string;
    $9: string;
    input: string;
    lastMatch: string;
    lastPren: string;
    leftContext: string;
    rightContext: string;
}

declare var RegExp: RegExpConstructor;

interface Error {
    name: string;
    message: string;
    description: string;
    line: number;
    number: number;
    start: number;
    end: number;
    fileName: string;
    source: string;
}

interface ErrorConstructor {
    new(message?: string, file?: string, line?: number): Error;
    (message?: string, file?: string, line?: number): Error;
    prototype: Error;
}

declare var Error: ErrorConstructor;

interface EvalError extends Error {
}

interface EvalErrorConstructor {
    new(message?: string, file?: string, line?: number): EvalError;
    (message?: string, file?: string, line?: number): EvalError;
    prototype: EvalError;
}

declare var EvalError: EvalErrorConstructor;

interface RangeError extends Error {
}

interface RangeErrorConstructor {
    new(message?: string, file?: string, line?: number): RangeError;
    (message?: string, file?: string, line?: number): RangeError;
    prototype: RangeError;
}

declare var RangeError: RangeErrorConstructor;

interface ReferenceError extends Error {
}

interface ReferenceErrorConstructor {
    new(message?: string, file?: string, line?: number): ReferenceError;
    (message?: string, file?: string, line?: number): ReferenceError;
    prototype: ReferenceError;
}

declare var ReferenceError: ReferenceErrorConstructor;

interface SyntaxError extends Error {
}

interface SyntaxErrorConstructor {
    new(message?: string, file?: string, line?: number): SyntaxError;
    (message?: string, file?: string, line?: number): SyntaxError;
    prototype: SyntaxError;
}

declare var SyntaxError: SyntaxErrorConstructor;

interface TypeError extends Error {
}

interface TypeErrorConstructor {
    new(message?: string, file?: string, line?: number): TypeError;
    (message?: string, file?: string, line?: number): TypeError;
    prototype: TypeError;
}

declare var TypeError: TypeErrorConstructor;

interface URIError extends Error {
}

interface URIErrorConstructor {
    new(message?: string, file?: string, line?: number): URIError;
    (message?: string, file?: string, line?: number): URIError;
    prototype: URIError;
}

declare var URIError: URIErrorConstructor;

/////////////////////////////
/// ECMAScript Array API
/////////////////////////////

interface Array<T> {
    /**
      * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
      */
    length: number;

    /**
      * Returns a string representation of an array.
      */
    toString(): string;
    toLocaleString(): string;

    /**
      * Appends new elements to an array, and returns the new length of the array.
      * @param items New elements of the Array.
      */
    push(...items: T[]): number;

    /**
      * Removes the last element from an array and returns it.
      */
    pop(): T;

    /**
      * Combines two or more arrays.
      * @param items Additional items to add to the end of array1.
      */
    concat<U extends T[]>(...items: U[]): T[];

    /**
      * Combines two or more arrays.
      * @param items Additional items to add to the end of array1.
      */
    concat(...items: T[]): T[];

    /**
      * Adds all the elements of an array separated by the specified separator string.
      * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
      */
    join(separator?: string): string;

    /**
      * Reverses the elements in an Array.
      */
    reverse(): T[];

    /**
      * Removes the first element from an array and returns it.
      */
    shift(): T;

    /**
      * Returns a section of an array.
      * @param start The beginning of the specified portion of the array.
      * @param end The end of the specified portion of the array.
      */
    slice(start?: number, end?: number): T[];

    /**
      * Sorts an array.
      * @param compareFn The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.
      */
    sort(compareFn?: (a: T, b: T) => number): T[];

    /**
      * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
      * @param start The zero-based location in the array from which to start removing elements.
      */
    splice(start: number): T[];

    /**
      * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
      * @param start The zero-based location in the array from which to start removing elements.
      * @param deleteCount The number of elements to remove.
      * @param items Elements to insert into the array in place of the deleted elements.
      */
    splice(start: number, deleteCount: number, ...items: T[]): T[];

    /**
      * Inserts new elements at the start of an array.
      * @param items  Elements to insert at the start of the Array.
      */
    unshift(...items: T[]): number;

    /**
      * Returns the index of the first occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
      */
    indexOf(searchElement: T, fromIndex?: number): number;

    /**
      * Returns the index of the last occurrence of a specified value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
      */
    lastIndexOf(searchElement: T, fromIndex?: number): number;

    [n: number]: T;
}

interface ArrayConstructor {
    new(arrayLength?: number): any[];
    new <T>(arrayLength: number): T[];
    new <T>(...items: T[]): T[];
    (arrayLength?: number): any[];
    <T>(arrayLength: number): T[];
    <T>(...items: T[]): T[];
    isArray(arg: any): arg is Array<any>;
    prototype: Array<any>;
}

declare var Array: ArrayConstructor;

interface ArrayLike<T> {
    length: number;
    [n: number]: T;
}

/////////////////////////////
/// ExtendScript
/////////////////////////////

interface ScreenObject extends Object {

    /**
     * Pixel position of the left side of the screen in global coordinates.
     */
    readonly left: number;

    /**
     * Pixel position of the top side of the screen in global coordinates.
     */
    readonly top: number;

    /**
     * Pixel position of the right side of the screen in global coordinates.
     */
    readonly right: number;

    /**
     * Pixel position of the bottom side of the screen in global coordinates.
     */
    readonly bottom: number;

    /**
     * True if the screen describes the primary display.
     */
    readonly primary: boolean;
}

interface Helper {

    /**
     * The ExtendScript build information.
     */
    readonly build: string;

    /**
     * The ExtendScript build date.
     */
    readonly buildDate: Date;

    /**
     * The character used as the decimal point character in formatted numeric output.
     */
    decimalPoint: string;

    /**
     * The name of the current ExtendScript engine, if set.
     */
    readonly engineName: string;

    /**
     * The most recent run-time error information.
     */
    error: Error;

    /**
     * The file name of the current script.
     */
    readonly fileName: string;

    /**
     * Gets or sets low-level debug output flags.
     * A logical AND of bit flag values:
     *     - 0x0002 (2):   Displays each line with its line number as it is executed.
     *     - 0x0040 (64):  Enables excessive garbage collection.
     *                     Usually, garbage collection starts when the number of objects has increased by a certain amount since the last garbage collection.
     *                     This flag causes ExtendScript to garbage collect after almost every statement.
     *                     This impairs performance severely, but is useful when you suspect that an object gets released too soon.
     *     - 0x0080 (128): Displays all calls with their arguments and the return value.
     *     - 0x0100 (256): Enables extended error handling (see strict).
     *     - 0x0200 (512): Enables the localization feature of the toString method. Equivalent to the localize property.
     */
    flags: 0x0002 | 0x0040 | 0x0080 | 0x0100 | 0x0200;

    /**
     * A reference to the global object, which contains the JavaScript global namespace.
     */
    readonly global: Object;

    /**
     * A high-resolution timer, measuring the time in microseconds.
     * The timer starts when ExtendScript is initialized during the application startup sequence.
     * Every read access resets the timer to Zero.
     */
    readonly hiresTimer: number;

    /**
     * The path for include files for the current script.
     */
    readonly includePath: string;

    /**
     * The current debugging level, which enables or disables the JavaScript debugger.
     * One of:
     *     - 0: no debugging
     *     - 1: break on runtime errors
     *     - 2: full debug mode
     */
    level: 0 | 1 | 2;

    /**
     * The current line number of the currently executing script.
     */
    readonly line: number;

    /**
     * Gets or sets the current locale. The string contains five characters in the form LL_RR,
     * where LL is an ISO 639 language specifier, and RR is an ISO 3166 region specifier.
     * Initially, this is the value that the application or the platform returns for the current user.
     * You can set it to temporarily change the locale for testing.
     * To return to the application or platform setting, set to undefined, null, or the empty string.
     */
    locale: string;

    /**
     * Set to true to enable the extended localization features of the built-in toString() method.
     */
    localize: boolean;

    /**
     * The ExtendScript memory cache size, in bytes.
     */
    memCache: number;

    /**
     * The current operating system version information.
     */
    readonly os: string;

    /**
     * An array of objects containing information about the display screens attached to your computer.
     * Each object has the properties left, top, right, bottom, which contain the four corners of each screen in global coordinates.
     * A property primary is true if that object describes the primary display.
     */
    readonly screens: Array<ScreenObject>;

    /**
     * The current stack trace.
     */
    readonly stack: string;

    /**
     * Sets or clears strict mode for object modification.
     * When true, any attempt to write to a read-only property causes a runtime error.
     * Some objects do not permit the creation of new properties when true.
     */
    strict: boolean;

    /**
     * The version number of the ExtendScript engine.
     * Formatted as a three-part number and description; for example: "3.92.95 (debug)".
     */
    readonly version: string;

    /**
     * Shows an About box for the ExtendScript component, and returns the text for the box.
     */
    about(): string;

    /**
     * Breaks execution at the current position.
     * @param condition A string containing a JavaScript statement to be used as a condition.
     *                         If the statement evaluates to true or nonzero when this point is reached, execution stops.
     */
    bp(condidition?: any): void;

    /**
     * Invokes the platform-specific color selection dialog, and returns the selected color.
     * @param color The color to be preselected in the dialog, as 0xRRGGBB, or -1 for the platform default.
     */
    colorPicker(color?: number): number;

    /**
     * Loads and evaluates a file.
     * @param file The file to load.
     * @param timeout An optional timeout in milliseconds. (default: 10000)
     */
    evalFile(file: File, timeout?: number): any;

    /**
     * Initiates garbage collection in the ExtendScript engine.
     */
    gc(): void;

    /**
     * Retrieves the value of an environment variable.
     * @param name The name of the variable.
     */
    getenv(name: string): string;

    /**
     * Sets the value of an environment variable.
     * @param name The name of the variable.
     * @param value The value of the variable.
     */
    setenv(name: string, value: string): void;

    /**
     * Suspends the calling thread for a number of milliseconds.
     * During a sleep period, checks at 100 millisecond intervals to see whether the sleep should be terminated.
     * This can happen if there is a break request, or if the script timeout has expired.
     * @param msec number of milliseconds to sleep.
     */
    sleep(msec: number): void;

    /**
     * Converts this object to a string.
     */
    toString(): string;

    /**
     * Prints text to the Console.
     * @param args The text to print. All arguments are concatenated.
     */
    write(...args: any[]): void;

    /**
     * Prints text to the Console, and adds a newline character.
     * @param args The text to print. All arguments are concatenated.
     */
    writeln(...args: any[]): void;
}

declare var $: Helper;

/**
 * Provides information about a class.
 */
interface Reflection extends Object {

    /**
     * The long description text.
     */
    readonly description: string;

    /**
     * The short description text.
     */
    readonly help: string;

    /**
     * An array of method descriptions.
     */
    readonly methods: ReflectionInfo[];

    /**
     * The class name.
     */
    readonly name: string;

    /**
     * An array of property descriptions.
     */
    readonly properties: ReflectionInfo[];

    /**
     * Sample code, if present.
     */
    readonly sampleCode: string;

    /**
     * A file containing sample code. May be null.
     */
    readonly sampleFile: File;

    /**
     * An array of class method descriptions.
     */
    readonly staticMethods: ReflectionInfo[];

    /**
     * An array of class property descriptions.
     */
    readonly staticProperties: ReflectionInfo[];

    /**
     * Finds an element description by name.
     * @param name The name of the element to find.
     */
    find(name: string): ReflectionInfo;

    /**
     * Returns this class information as XML in OMV format.
     */
    toXML(): XML;
}

/**
 * Provides information about a method, a property or a method parameters.
 */
interface ReflectionInfo extends Object {

    /**
     * The description of method or function arguments.
     */
    readonly arguments: ReflectionInfo[];

    /**
     * The data type.
     */
    readonly dataType: string;

    /**
     * The default value.
     */
    readonly defaultValue: any;

    /**
     * The long description text.
     */
    readonly description: string;

    /**
     * The short description text.
     */
    readonly help: string;

    /**
     * Contains true if the class describes a collection class.
     */
    readonly isCollection: boolean;

    /**
     * The maximum value.
     */
    readonly max: number;

    /**
     * The minimum value.
     */
    readonly min: number;

    /**
     * The element name.
     */
    readonly name: string;

    /**
     * The class object that this element belongs to.
     */
    readonly parent: Reflection;

    /**
     * Sample code, if present.
     */
    readonly sampleCode: string;

    /**
     * A file containing sample code. May be null.
     */
    readonly sampleFile: File;

    /**
     * The element type.
     * One of unknown, readonly, readwrite, createonly, method or parameter.
     */
    readonly type: string;
}

/**
 * Represents a file in the local file system in a platform-independent manner.
 */
interface File {

    constructor: Function;

    /**
     * The full path name for the referenced file in URI notation.
     */
    readonly absoluteURI: string;

    /**
     * If true, the object refers to a file system alias or shortcut.
     */
    readonly alias: boolean;

    /**
     * The creation date of the referenced file, or null if the object does not refer to a file on disk.
     */
    readonly created: Date;

    /**
     * In Mac OS, the file creator as a four-character string. In Windows or UNIX, value is "????".
     */
    readonly creator: string;

    /**
     * The localized name of the referenced file, without the path specification.
     */
    readonly displayName: string;

    /**
     * Gets or sets the encoding for subsequent read/write operations.
     * One of the encoding constants listed in the JavaScript Tools Guide.
     * If the value is not recognized, uses the system default encoding.
     * A special encoder, BINARY, is used to read binary files.
     * It stores each byte of the file as one Unicode character regardless of any encoding.
     * When writing, the lower byte of each Unicode character is treated as a single byte to write.
     */
    encoding: "ascii" | "utf-8" | "binary";

    /**
     * When true, a read attempt caused the current position to be at the end of the file, or the file is not open.
     */
    readonly eof: boolean;

    /**
     * A string containing a message describing the most recent file system error.
     * Typically set by the file system, but a script can set it.
     * Setting this value clears any error message and resets the error bit for opened files.
     * Contains the empty string if there is no error.
     */
    error: string;

    /**
     * If true, this object refers to a file or file-system alias that actually exists in the file system.
     */
    readonly exists: boolean;

    /**
     * The platform-specific full path name for the referenced file.
     */
    readonly fsName: string;

    /**
     * The full path name for the referenced file in URI notation.
     */
    readonly fullName: string;

    /**
     * When true, the file is not shown in the platform-specific file browser.
     * If the object references a file-system alias or shortcut, the flag is altered on the alias, not on the original file.
     */
    hidden: boolean

    /**
     * The size of the file in bytes.
     * Can be set only for a file that is not open, in which case it truncates or pads the file with 0-bytes to the new length.
     */
    length: number;

    /**
     * How line feed characters are written in the file system.
     * One of the values "Windows", "Macintosh", or "Unix".
     */
    lineFeed: "Windows" | "Macintosh" | "Unix";

    /**
     * The date of the referenced file"s last modification, or null if the object does not refer to a file on the disk.
     */
    readonly modified: Date;

    /**
     * The file name portion of the absolute URI for the referenced file, without the path specification.
     */
    readonly name: string;

    /**
     * The Folder object for the folder that contains this file.
     */
    readonly parent: Folder;

    /**
     * The path portion of the absolute URI for the referenced file, without the file name.
     */
    readonly path: string;

    /**
     * When true, prevents the file from being altered or deleted.
     * If the referenced file is a file-system alias or shortcut, the flag is altered on the alias, not on the original file.
     */
    readonly: boolean;

    /**
     * The path name for the object in URI notation, relative to the current folder.
     */
    readonly relativeURI: string;

    /**
     * The file type as a four-character string.
     * In Mac OS, the Mac OS file type. In Windows, "appl" for .EXE files, "shlb" for .DLL files and "TEXT" for any other file.
     */
    readonly type: string;

    /**
     * The name of the file system.
     * This is a class property accessed through the File constructor.
     * Valid values are "Windows", "Macintosh", and "Unix".
     */
    readonly fs: "Windows" | "Macintosh" | "Unix";

    /**
     * Changes the path specification of the referenced file.
     * @param path A string containing the new path, absolute or relative to the current folder.
     */
    changePath(path: string): boolean;

    /**
     * Closes this open file.
     * Returns true if the file was closed successfully, false if an I/O error occurred.
     */
    close(): boolean;

    /**
     * Copies this object’s referenced file to the specified target location.
     * Resolves any aliases to find the source file.
     * If a file exists at the target location, it is overwritten. Returns true if the copy was successful.
     * @param target A string with the URI path to the target location, or a File object that references the target location.
     */
    copy(target: string | File): boolean;

    /**
     * Makes this file a file-system alias or shortcut to the specified file.
     * The referenced file for this object must not yet exist on disk.
     * Returns true if the operation was successful.
     * @param path A string containing the path of the target file.
     */
    createAlias(path: string): boolean;

    /**
     * Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
     * @see String.decodeURI()
     * @param uri The UTF-8 encoded string to decode.
     */
    decode(uri: string): string;

    /**
     * Encodes a string as required by RFC 2396, and returns the encoded string.
     * All special characters are encoded in UTF-8 and stored as escaped characters starting with the percent sign followed by two hexadecimal digits.
     * For example, the string "my file" is encoded as "my%20file".
     * Special characters are those with a numeric value greater than 127, except the following: / - _ . ! ~ * ' ( ).
     * @see String.encodeURI()
     * @param name The string to encode.
     */
    encode(name: string): string;

    /**
     * Executes or opens this file using the appropriate application, as if it had been double-clicked in a file browser.
     * You can use this method to run scripts, launch applications, and so on.Returns true immediately if the application launch was successful.
     */
    execute(): boolean;

    /**
     * Retrieves and returns the path for this file, relative to the specified base path, in URI notation.
     * If no base path is supplied, the URI is relative to the path of the current folder.
     * Returns a string containing the relative URI.
     * @param basePath A base path in URI notation.
     */
    getRelativeURI(basePath: string): string;

    /**
     * Opens the referenced file for subsequent read/write operations. The method resolves any aliases to find the file.
     * Returns true if the file was opened successfully.
     * The method attempts to detect the encoding of the open file.
     * It reads a few bytes at the current location and tries to detect the Byte Order Mark character 0xFFFE.
     * If found, the current position is advanced behind the detected character and the encoding property is set to one of the strings UCS-2BE, UCS-2LE, UCS4-BE, UCS-4LE, or UTF-8.
     * If the marker character is not found, it checks for zero bytes at the current location and makes an assumption about one of the above formats (except UTF-8).
     * If everything fails, the encoding property is set to the system encoding.
     *
     * IMPORTANT: Be careful about opening a file more than once.
     * The operating system usually permits you to do so, but if you start writing to the file using two different File objects, you can destroy your data.
     * @param mode The read-write mode, a single-character string.
     *             One of these characters:
     *                 - r (read): Opens for reading. If the file does not exist or cannot be found, the call fails.
     *                 - w (write): Opens a file for writing. If the file exists, its contents are destroyed.
     *                              If the file does not exist, creates a new, empty file.
     *                 - e (edit): Opens an existing file for reading and writing.
     *                 - a (append): Opens an existing file for reading and writing, and moves the current position to the end of the file.
     * @param type In Mac OS, the type of a newly created file, a 4-character string. Ignored in Windows and UNIX.
     * @param creator In Mac OS, the creator of a newly created file, a 4-character string. Ignored in Windows and UNIX.
     */
    open(mode: "r" | "w" | "e" | "a", type?: string, creator?: string): boolean;

    /**
     * Opens a dialog so the user can select one or more files to open.
     * Opens the built-in platform-specific file-browsing dialog in which a user can select an existing file or multiple files, and creates new File objects to represent the selected files.
     * If the user clicks OK, returns a File object for the selected file, or an array of objects if multiple files are selected.
     * If the user cancels, returns null.
     * @param prompt The prompt text, displayed if the dialog allows a prompt.
     * @param filter A filter that limits the types of files displayed in the dialog.
     *               In Windows, a filter expression such as "Javascript files:*.jsx;All files:*.*".
     *               In Mac OS, a filter function that takes a File instance and returns true if the file should be included in the display, false if it should not.
     *               (default: null)
     * @param multiSelect When true, the user can select multiple files and the return value is an array.
     *                    (default: false)
     */
    openDialog(prompt: string, filter?: string | Function, multiSelect?: boolean): File | null;

    /**
     * Opens the built-in platform-specific file-browsing dialog,
     * in which the user can select an existing file or files, and creates new File objects to represent the selected files.
     * Differs from the class method `openDialog()` in that it presets the current folder to this File object’s parent folder and the current file to this object’s associated file.
     * If the user clicks OK, returns a File or Folder object for the selected file or folder, or an array of objects.
     * If the user cancels, returns null.
     * @param prompt A string containing the prompt text, if the dialog allows a prompt.
     * @param filter A filter that limits the types of files displayed in the dialog.
     *               In Windows, a filter expression such as "Javascript files:*.jsx;All files:*.*".
     *               In Mac OS, a filter function that takes a File instance and returns true if the file should be included in the display, false if it should not.
     *               (default: null)
     * @param multiSelect When true, the user can select multiple files and the return value is an array.
     *                    (default: false)
     */
    openDlg(prompt: string, filter?: string | Function, multiSelect?: boolean): File | null;

    /**
     * Reads the contents of the file, starting at the current position.
     * Returns a string that contains up to the specified number of characters.
     * If a number of characters is not supplied, reads from the current position to the end of the file.
     * If the file is encoded, multiple bytes might be read to create single Unicode characters.
     * @param chars An integer specifying the number of characters to read.
     */
    read(chars?: number): string;

    /**
     * Reads a single text character from the file at the current position.
     * Line feeds are recognized as CR, LF, CRLF or LFCR pairs.
     * If the file is encoded, multiple bytes might be read to create a single Unicode character.
     * Returns a string that contains the character.
     */
    readch(): string;

    /**
     * Reads a single line of text from the file at the current position.
     * Line feeds are recognized as CR, LF, CRLF or LFCR pairs.
     * If the file is encoded, multiple bytes might be read to create single Unicode characters.
     * Returns a string that contains the text.
     */
    readln(): string;

    /**
     * Deletes the file associated with this object from disk immediately, without moving it to the system trash.
     * Does not resolve aliases; instead, deletes the referenced alias or shortcut file itself.
     * Returns true if the file was successfully removed.
     *
     * IMPORTANT: Cannot be undone.
     * It is recommended that you prompt the user for permission before deleting.
     */
    remove(): boolean;

    /**
     * Renames the associated file.
     * Does not resolve aliases, but renames the referenced alias or shortcut file itself.
     * Returns true if the file was successfully renamed.
     * @param newName The new file name, with no path information.
     */
    rename(newName: string): boolean;

    /**
     * Attempts to resolve the file-system alias or shortcut that this object refers to.
     * If successful, creates and returns a new File object that points to the resolved file system element.
     * Returns null if this object does not refer to an alias, or if the alias could not be resolved.
     */
    resolve(): File | null;

    /**
     * Opens a dialog so the user can select a file name to save to.
     * Opens the built-in platform-specific file-browsing dialog in which a user can select an existing file location to which to save information,
     * and creates a new File object to represent the selected file location.
     * If the user clicks OK, returns a File object for the selected file location. If the user cancels, returns null.
     * @param prompt The prompt text, displayed if the dialog allows a prompt.
     * @param filter In Windows only, a filter that limits the types of files displayed in the dialog.
     *               In Windows only, a filter expression such as "Javascript files:*.jsx;All files:*.*".
     *               Not used In Mac OS.
     *               (default: null)
     */
    saveDialog(prompt: string, filter?: string | Function): File | null;

    /**
     * Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file location to which to save information, and creates a new File object to represent the selected file.
     * Differs from the class method saveDialog() in that it presets the current folder to this File object’s parent folder and the file to this object’s associated file.
     * If the user clicks OK, returns a File object for the selected file.
     * If the user cancels, returns null.
     * @param prompt A string containing the prompt text, if the dialog allows a prompt.
     * @param filter In Windows only, a filter that limits the types of files displayed in the dialog.
     *               In Windows only, a filter expression such as "Javascript files:*.jsx;All files:*.*".
     *               Not used In Mac OS.
     *               (default: null)
     */
    saveDlg(prompt: string, filter?: string | Function): File | null;

    /**
     * Seeks to a given position in the file.
     * The new position cannot be less than 0 or greater than the current file size.
     * Returns true if the position was changed.
     * @param pos The new current position in the file as an offset in bytes from the start, current position, or end, depending on the mode.
     * @param mode The seek mode.
     *             One of:
     *                 - 0: Seek to absolute position, where pos=0 is the first byte of the file. This is the default.
     *                 - 1: Seek relative to the current position.
     *                 - 2. Seek backward from the end of the file.
     *             (default: 0)
     */
    seek(pos: number, mode?: 0 | -1 | -2): boolean;

    /**
     * Retrieves the current position as a byte offset from the start of the file.
     * Returns a number, the position index.
     */
    tell(): number;

    /**
     * Creates and returns a serialized string representation of this object.
     * Pass the resulting string to eval() to recreate the object.
     */
    toSource(): string;

    /**
     * Converts this object to a string.
     */
    toString(): string;

    /**
     * Writes the specified text to the file at the current position.
     * You can supply multiple text values; the strings are concatenated to form a single string.
     * For encoded files, writing a single Unicode character may write multiple bytes.
     * Returns true if the write was successful.
     *
     * IMPORTANT: Be careful not to write to a file that is open in another application or object, as this can overwrite existing data.
     * @param text A text string to be written.
     */
    write(text: string): boolean;

    /**
     * Writes a string to the file at the current position and appends a line-feed sequence.
     * You can supply multiple text values. The strings are concatenated into a single string,
     * which is written in the file followed by one line-feed sequence, of the style specified by this object's linefeed property.
     * For encoded files, writing a single Unicode character may write multiple bytes.
     * Returns true if the write was successful.
     *
     * IMPORTANT: Be careful not to write to a file that is open in another application or object, as this can overwrite existing data.
     * @param text A text string to be written.
     */
    writeln(text: string): boolean;
}

interface FileConstructor {

    /**
     * Creates and returns a new File object referring to a given file system location.
     * @param path The full or partial path name of the file, in platform-specific or URI format.
     *             The value stored in the object is the absolute path.
     *             The file that the path refers to does not need to exist.
     *             If the path refers to an existing folder: The File function returns a Folder object instead of a File object.
     *             The new operator returns a File object for a nonexisting file with the same name.
     */
    new(path?: string): File;
    (path?: string): File;
}

declare var File: FileConstructor;

/**
 * Represents a file-system folder or directory in a platform-independent manner.
 */
interface Folder {

    constructor: Function;

    /**
     * The full path name for the referenced folder in URI notation.
     */
    readonly absoluteURI: string;

    /**
     * When true, the object refers to a file system alias or shortcut.
     */
    readonly alias: boolean;

    /**
     * The creation date of the referenced folder, or null if the object does not refer to a folder on disk.
     */
    readonly created: Date;

    /**
     * The localized name portion of the absolute URI for the referenced folder, without the path specification.
     */
    readonly displayName: string;

    /**
     * A message describing the most recent file system error.
     * Typically set by the file system, but a script can set it.
     * Setting this value clears any error message and resets the error bit for opened files.
     * Contains the empty string if there is no error.
     */
    error: string;

    /**
     * When true, this object refers to a folder that currently exists in the file system.
     */
    readonly exists: boolean;

    /**
     * The platform-specific name of the referenced folder as a full path name.
     */
    readonly fsName: string;

    /**
     * The full path name for the referenced folder in URI notation.
     */
    readonly fullName: string;

    /**
     * The date of the referenced folder's last modification, or null if the object does not refer to a folder on disk.
     */
    readonly modified: Date;

    /**
     * The folder name portion of the absolute URI for the referenced file, without the path specification.
     */
    readonly name: string;

    /**
     * The Folder object for the folder that contains this folder, or null if this object refers to the root folder of a volume.
     */
    readonly parent: Folder | null;

    /**
     * The path portion of the object absolute URI for the referenced file, without the folder name.
     */
    readonly path: string;

    /**
     * The path name for the referenced folder in URI notation, relative to the current folder.
     */
    readonly relativeURI: string;

    /**
     * The folder containing the application data for all users.
     * In Windows, the value of %APPDATA% (by default, C:\\Documents and Settings\\All Users\\Application Data) In Mac OS, /Library/Application Support
     */
    readonly appData: Folder;

    /**
     * In Mac OS, a Folder object for the folder containing the bundle of the running application.
     */
    readonly appPackage: Folder;

    /**
     * A Folder object for the folder containing common files for all programs installed by the user.
     * In Windows, the value of %CommonProgramFiles% (by default, C:\\Program Files\\Common Files) In Mac OS, /Library/Application Support
     */
    readonly commonFiles: Folder;

    /**
     * A Folder object for the current folder.
     * Assign a Folder object or a string containing the new path name to set the current folder.
     * This is a class property accessed through the Folder constructor.
     */
    readonly current: Folder;

    /**
     * A Folder object for the folder that contains the user’s desktop.
     * In Windows, C:\\Documents and Settings\\username\\Desktop In Mac OS, ~/Desktop
     */
    readonly desktop: Folder;

    /**
     * The name of the current file system.
     * One of "Windows", "Macintosh", or "Unix".
     */
    readonly fs: "Windows" | "Macintosh" | "Unix";

    /**
     * A folder pointing to the user's My Documents folder.
     * In Windows, C:\\Documents and Settings\\username\\My Documents In Mac OS, ~/Documents
     */
    readonly myDocuments: Folder;

    /**
     * A Folder object for the folder containing the executable image of the running application.
     */
    readonly startup: Folder;

    /**
     * A Folder object for the folder containing the operating system files.
     * In Windows, the value of %windir% (by default, C:\\Windows) In Mac OS, /System
     */
    readonly system: Folder;

    /**
     * A Folder object for the default folder for temporary files.
     */
    readonly temp: Folder;

    /**
     * A Folder object for the folder containing deleted items.
     * On Windows, the trash folder is a virtual folder containing a database; therefore, the property value is null on Windows.
     */
    readonly trash: Folder;

    /**
     * A Folder object for the folder containing the user's application data.
     * In Windows, the value of %USERDATA% (by default, C:\\Documents and Settings\\username\\Application Data) In Mac OS, ~/Library/Application Support.
     */
    readonly userData: Folder;

    /**
     * Changes the path specification of the referenced folder.
     * @param path A string containing the new path, absolute or relative to the current folder.
     */
    changePath(path: string): boolean;

    /**
     * Creates a folder at the location given by this object's path property.
     * Returns true if the folder was created.
     */
    create(): boolean;

    /**
     * Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
     * @see String.decodeURI()
     * @param uri The UTF-8 encoded string to decode.
     */
    decode(uri: string): string;

    /**
     * Encodes a string as required by RFC 2396, and returns the encoded string.
     * All special characters are encoded in UTF-8 and stored as escaped characters starting with the percent sign followed by two hexadecimal digits.
     * For example, the string "my file" is encoded as "my%20file".
     * Special characters are those with a numeric value greater than 127, except the following: / - _ . ! ~ * ' ( ).
     * @see String.encodeURI()
     * @param name The string to encode.
     */
    encode(name: string): string;

    /**
     * Opens this folder in the platform-specific file browser (as if it had been double-clicked in the file browser).
     * Returns true immediately if the folder was opened successfully.
     */
    execute(): boolean;

    /**
     * Retrieves the contents of this folder, filtered by the supplied mask.
     * Returns an array of File and Folder objects, or null if this object's referenced folder does not exist.
     * @param mask A search mask for file names, specified as a string or a function.
     *             A mask string can contain question mark (?) and asterisk (*) wild cards.
     *             Default is "*", which matches all file names.
     *             Can also be the name of a function that takes a File or Folder object as its argument.
     *             It is called for each file or folder found in the search; if it returns true, the object is added to the return array.
     *
     *             NOTE: In Windows, all aliases end with the extension .lnk. ExtendScript strips this from the file name when found, in order to preserve compatibility with other operating systems.
     *             You can search for all aliases by supplying the search mask "*.lnk", but note that such code is not portable.
     */
    getFiles(mask?: string | Function): Array<File | Folder>;

    /**
     * Retrieves and returns the path for this file, relative to the specified base path, in URI notation.
     * If no base path is supplied, the URI is relative to the path of the current folder.
     * Returns a string containing the relative URI.
     * @param basePath A base path in URI notation.
     *                 (default: .)
     */
    getRelativeURI(basePath?: string): string;

    /**
     * Reports whether a given encoding is available.
     * @param name The encoding name.
     *             Typical values are "ASCII", "binary", or "UTF-8".
     *             For a complete list of supported encodings, see the JavaScript Tools Guide.
     */
    isEncodingAvailable(name: "ascii" | "utf-8" | "binary"): boolean;

    /**
     * Deletes the folder associated with this object from disk immediately, without moving it to the system trash.
     * Folders must be empty before they can be deleted. Does not resolve aliases; instead, deletes the referenced alias or shortcut file itself.
     * Returns true if the file was successfully removed.
     *
     * IMPORTANT: Cannot be undone.
     * It is recommended that you prompt the user for permission before deleting.
     */
    remove(): boolean;

    /**
     * Renames the associated folder.
     * Does not resolve aliases, but renames the referenced alias or shortcut file itself.
     * Returns true if the folder was successfully renamed.
     * @param newName The new folder name, with no path information.
     */
    rename(newName: string): boolean;

    /**
     * Attempts to resolve the file-system alias or shortcut that this object refers to.
     * If successful, creates and returns a new Folder object that points to the resolved file system element.
     * Returns null if this object does not refer to an alias, or if the alias could not be resolved.
     */
    resolve(): Folder | null;

    /**
     * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
     * Differs from the object method selectDlg() in that it does not preselect a folder.
     * If the user clicks OK, returns a File or Folder object for the selected file or folder.
     * If the user cancels, returns null.
     * @param prompt The prompt text, if the dialog allows a prompt.
     */
    selectDialog(prompt: string): Folder | null;

    /**
     * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
     * Differs from the class method selectDialog() in that it preselects this folder.
     * If the user clicks OK, returns a File or Folder object for the selected file or folder.
     * If the user cancels, returns null.
     * @param prompt The prompt text, if the dialog allows a prompt.
     */
    selectDlg(prompt: string): Folder | null;

    /**
     * Creates and returns a serialized string representation of this object.
     * Pass the resulting string to eval() to recreate the object.
     */
    toSource(): string;

    /**
     * Converts this object to a string.
     */
    toString(): string;
}

interface FolderConstructor {
    /**
     * Creates and returns a new Folder object referring to a given file-system location.
     * If the path name refers to an already existing disk file, a File object is returned instead.
     * Returns the new Folder object.
     * @param path The absolute or relative path to the folder associated with this object, specified in URI format.
     *             The value stored in the object is the absolute path.
     *             The path need not refer to an existing folder.
     *             If the path refers to an existing file, rather than a folder: The `Folder()` function returns a `File` object instead of a `Folder` object.
     *             The new operator returns a `Folder` object for a nonexisting folder with the same name.
     */
    new(path?: string): Folder | File;
    (path?: string): Folder | File;
}

declare var Folder: FolderConstructor;

/**
 * Wraps XML into an object.
 */
interface XML {

    /**
     * Controls whether XML comments should be parsed `false` or ignored `true`.
     */
    ignoreComments: boolean;

    /**
     * Controls whether XML preprocessing instructions should be parsed `false` or ignored `true`.
     */
    ignoreProcessingInstructions: boolean;

    /**
     * Controls whether whitespace should be parsed `false` or ignored `true`.
     */
    ignoreWhitespace: boolean;

    /**
     * The number of spaces used to indent pretty-printed XML.
     */
    prettyIndent: number;

    /**
     * When `true`, XML is pretty-printed when converting to a string.
     */
    prettyPrinting: boolean;

    /**
     * Adds a namespace declaration to the node. Returns the XML object itself.
     * @param namespace The namespace to add.
     */
    addNamespace(namespace: Namespace): XML;

    /**
     * Appends the given XML to this XML as a child. Returns the XML object itself.
     * If the argument is not XML, creates a new XML element containing the argument as text.
     * The element name of that new XML is the same as the last element in the original XML.
     * @param child The child XML to add.
     */
    appendChild(child: XML): XML;

    /**
     * Returns a list containing all attribute elements matching the given name.
     * @param name The attribute name to look for.
     */
    attribute(name: string): XML;

    /**
     * Returns a list containing all attribute elements.
     */
    attributes(): XML;

    /**
     * Returns a list containing all children of this XML matching the given element name.
     * If the argument is a number, uses the number as index into the array of children.
     * @param name The name or the index of the child element.
     */
    child(name: string): XML;

    /**
     * Returns a number representing the ordinal position of this XML object within the context of its parent.
     */
    childIndex(): number;

    /**
     * Returns an XML object containing all the properties of this XML object in order.
     */
    children(): XML;

    /**
     * Returns an XML object containing the properties of this XML object that represent XML comments.
     */
    comments(): XML;

    /**
     * Checks if this XML object contains the given XML object.
     * @param xml The XML to search for.
     */
    contains(xml: XML): boolean;

    /**
     * Creates a copy of this XML object.
     */
    copy(): XML;

    /**
     * Returns an object containing the default parsing and print settings for XML.
     */
    defaultSettings(): object;

    /**
     * Returns all the XML-valued descendants of this XML object with the given name.
     * If the name parameter is omitted, returns all descendants of this XML object.
     * @param name The name of the descendant to find.
     */
    descendants(name?: string): XML;

    /**
     * Returns a list of XML children that are elements with a given name, or all children that are XML elements.
     * @param name The element name. If not supplied, gets all children that are XML elements.
     */
    elements(name?: string): XML;

    /**
     * Reports whether this XML object contains complex content.
     * An XML object is considered to contain complex content if it represents an XML element that has child elements.
     * XML objects representing attributes, comments, processing instructions and text nodes do not have complex content.
     * The existence of attributes, comments,
     * processing instructions and text nodes within an XML object is not significant in determining if it has complex content.
     */
    hasComplexContent(): boolean;

    /**
     * Reports whether this XML object contains simple content.
     * An XML object is considered to contain simple content if it represents a text node,
     * represents an attribute node or if it represents an XML element that has no child elements.
     * XML objects representing comments and processing instructions do not have simple content.
     * The existence of attributes, comments, processing instructions and text nodes within an XML object is not significant in determining if it has simple content.
     */
    hasSimpleContent(): boolean;

    /**
     * Returns an array of Namespace objects mirroring the current list of valid namespaces at this element.
     * The last element of the returned array is the default namespace.
     */
    inScopeNamespaces(): Array<Namespace>;

    /**
     * Inserts the given `child2` after the given `child1` in this XML object and returns this XML object.
     * If `child1` is `null`, the method inserts `child2` before all children of this XML object (that is, after none of them).
     * If `child1` does not exist in this XML object, the method returns without modifying this XML object.
     * @param child1 The child to insert the other child after. If `null`, the method inserts `child2` before all children of this XML object.
     * @param child2 The XML to insert.
     */
    insertChildAfter(child1: XML, child2: XML): void;

    /**
     * Inserts the given `child2` before the given `child1` in this XML object and returns this XML object.
     * If `child1` is `null`, the method inserts `child2` after all children of this XML object (that is, before none of them).
     * If `child1` does not exist in this XML object, the method returns without modifying this XML object.
     * @param child1 The child to search for. If `null`, the method inserts `child2` after all children of this XML object.
     * @param child2 The XML to insert.
     */
    insertChildBefore(child1: XML, child2: XML): void;

    /**
     * Returns the number of elements contained in an XML list. If this XML object is not a list, returns 1.
     */
    length(): number;

    /**
     * Returns the local name of this XML object.
     * This value corresponds to the element name unless the name has a namespace prefix.
     * For example, if the element has the name "ns:tag", the return value is "tag".
     */
    localeName(): string;

    /**
     * Returns a QName object containing the URI and the local name of the element.
     */
    name(): QName;

    /**
     * Returns a Namespace object containing the namespace URI of the current element.
     */
    namespace(): Namespace;

    /**
     * Returns an array containing all namespace declarations of this XML object.
     */
    namespaceDeclarations(): Array<Namespace>;

    /**
     * Returns the type of this XML object as one of the strings "element", "attribute", "comment", "processing-instruction", or "text".
     */
    nodeKind(): "element" | "attribute" | "comment" | "processing-instruction" | "text";

    /**
     * Puts all text nodes in this and all descendant XML objects into a normal form by merging adjacent text nodes and eliminating empty text nodes.
     * Returns this XML object.
     */
    normalize(): XML;

    /**
     * Returns the parent object of this XML object.
     * The root object, as returned by the XML constructor, does not have a parent and returns null.
     * Note that the E4X standard does not define what happens if this XML object is a list containing elements with multiple parents.
     */
    parent(): XML;

    /**
     * Inserts a given child into this object before its existing XML properties, and returns this XML object.
     * @param child The XML to insert.
     */
    preprendChild(child: XML): XML;

    /**
     * Returns a list of preprocessing instructions.
     * Collects processing-instructions with the given name, if supplied.
     * Otherwise, returns an XML list containing all the children of this XML object that are processing-instructions regardless of their name.
     * @param name The name of the preprocessing instruction to return.
     */
    processingInstructions(name?: string): XML;

    /**
     * Removes the given namespace from this XML, and returns this XML.
     * @param namespace The namespace to remove.
     */
    removeNamespace(namespace: Namespace): XML;

    /**
     * Replaces the value of specified XML properties of this XML object returns this XML object.
     * This method acts like the assignment operator.
     * @param name The property name.
     *             Can be a numeric property name, a name for a set of XML elements, or the properties wildcard “*”.
     *             If this XML object contains no properties that match the name, the method returns without modifying this XML object.
     * @param value The XML with which to replace the value of the matching property.
     *              Can be an XML object, XML list or any value that can be converted to a String with toString().
     */
    replace(name: string, value: XML): XML;

    /**
     * Replaces all of the XML-valued properties in this object with a new value, and returns this XML object.
     * @param value The new value, which can be a single XML object or an XML list.
     */
    setChildren(value: XML): XML;

    /**
     * Replaces the local name of this XML object with a string constructed from the given name
     * The local name is any part behind a colon character. If there is no colon, it is the entire name.
     * @param name The name to set.
     */
    setLocaleName(name: string): void;

    /**
     * Replaces the name of this XML object with the given QName object.
     * @param name The fully qualified name.
     */
    setName(name: QName): void;

    /**
     * Sets the namespace for this XML element.
     * If the namespace has not been declared in the tree above this element, adds a namespace declaration.
     * @param namespace The namespace to set.
     */
    setNameSpace(namespace: Namespace): void;

    /**
     * Sets the parsing and print setting for XML using an object returned by the settings() method.
     * @param obj The object containing the settings to set.
     */
    setSettings(obj: object): void;

    /**
     * Returns an object containing the current parsing and print settings for XML.
     */
    settings(): object;

    /**
     * Returns an XML list containing all XML properties of this XML object that represent XML text nodes.
     */
    text(): XML;

    /**
     * Returns the string representation of this object.
     * For text and attribute nodes, this is the textual value of the node; for other elements, this is the result of calling the toXMLString() method.
     * If this XML object is a list, concatenates the result of calling toString() on each element.
     */
    toString(): string;

    /**
     * Returns an XML-encoded string representation of this XML object.
     * Always includes the start tag, attributes and end tag of the XML object regardless of its content.
     * It is provided for cases when the default XML to string conversion rules are not desired. Interprets the global settings XML.prettyPrint and XML.prettyIndent.
     */
    toXMLString(): string;

    /**
     * Evaluates the given XPath expression in accordance with the W3C XPath recommendation, using this XML object as the context node.
     * @param expr The XPath expression to use.
     */
    xpath(expr: string): XML;
}

interface XMLConstructor {
    new(text?: string): XML;
    (text?: string): XML;
}

declare var XML: XMLConstructor;

/**
 * An XML list object.
 * In this implementation, an XMLList object is synonymous to the XML object.
 * The constructor accepts an XML list, but everything else works like the XML object.
 */
interface XMLList {

}

interface XMLListConstructor extends XML {
    new(...elements: Array<XML>): XML;
    (...elements: Array<XML>): XML;
}

declare var XMLList: XMLListConstructor;

interface QName {

    /**
     * The local name part of the qualified name.
     */
    localName: string;

    /**
     * The URI part of the qualified name.
     */
    uri: string;
}

interface QNameConstructor {

    /**
     * Creates a QName object.
     * @param uri The URI, specified as a Namespace object, an existing QName object, or string.
     *            If this is a `Namespace` object, the URI is set to the namespace URI, and there is no local name.
     *            If this is a `QName` object, the URI and localName is set to those of that object.
     *            If this is a `string`, the URI is set to that string.
     * @param name The local name. Used only if URI is given as a string.
     */
    new(uri: QName | Namespace | string, name?: string): QName;
    (uri: QName | Namespace | string, name?: string): QName;
}

declare var QName: QNameConstructor;
