// Type definitions for ExtendScript Built-in types
// Definitions by: Ludwig DUBOS <https://github.com/ldubos>

/**
 * The base class of all JavaScript objects.
 */
interface Object {

    /**
     * Points to the constructor function that created this object.
     * Note that this property is treated as an XML element in the XML class.
     */
    constructor: Function;

    /**
     * Retrieves and returns the Reflection object associated with this method or a property.
     * Note that this property is treated as an XML element in the XML class.
     */
    reflect: Reflection;

    /**
     * Creates and returns a string representation of this object.
     * This function serializes the object, so that it can, for example, be passed between engines. Pass the returned string back to eval() to recreate the object. Works only with built-in classes.
     */
    toSource(): string;

    /**
     * Many objects (such as Date) override this method in favor of their own implementation. If an object has no string value and no user-defined toString() method, the default method returns [object type], where "type" is the object type or the name of the constructor function that created the object.
     */
    toString(): string;

    /**
     * Removes the watch function of a property.
     * @param name The name of the property to unwatch.
     */
    unwatch(name: string): void;

    /**
     * If the object has no primitive value, returns the object itself.  Note that you rarely need to call this method yourself.  The JavaScript interpreter automatically invokes it when encountering an object where a primitive value is expected.
     */
    valueOf(): Object;

    /**
     * Adds a watch function to a property, which is called when the value changes.
     * This function can accept, modify, or reject a new value that the user, application, or a script has attempted to place in a property.
     * @param name The name of the property to watch.
     * @param func The function to be called when the value of this property changes.
     * This function must three arguments, and return as its result the value to be stored in the property. The arguments are:
     *      name: the name of the property that changes.
     *      oldValue: the old property value.
     *      newValue: the new property value that was specified.
     */
    watch(name: string, func: Function): void;
}

interface ObjectConstructor {
    /**
     * Note that this property is treated as an XML element in the XML class.
     */
    readonly prototype: Object;

    /**
     * Reports whether an object is still valid.
     * @param what The object to check.
     */
    isValid(what: Object): boolean;
}

/**
 * The $ object provides a number of debugging facilities and informational methods.
 */
declare const $: Helper;

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

/**
 * Provides information about a class.
 */
declare class Reflection extends Object {

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
declare class ReflectionInfo extends Object {

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

declare class ScreenObject extends Object {

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

/**
 * Wraps a runtime error.
 */
interface Error {

    /**
     * The error message.
     */
    description: string;

    /**
     * The name of the file.
     */
    fileName: string;

    /**
     * The line number.
     */
    line: number;

    /**
     * The error message.
     */
    message: string;

    /**
     * The error name.
     */
    name: string;

    /**
     * The error number.
     */
    number: number;
}

interface ErrorConstructor {

    /**
     * Wraps a runtime error.
     * @param message The error message.
     * @param file The name of the file.
     * @param line The line number.
     */
    new(message?: string, file?: string, line?: number): Error;

    readonly prototype: Error;
}

declare const File: FileConstructor;

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
    encoding: "ascii" | "utf8" | "utf16le" | "ucs2" | "base64" | "latin1" | "binary" | "hex";

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
}
