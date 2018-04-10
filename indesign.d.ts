// Type definitions for InDesign (13.0.x)
// Definitions by: Ludwig DUBOS <https://github.com/ldubos>
// Definitions: https://github.com/ldubos/indesign.d.ts
// TypeScript Version: 2.8.1

/// <reference path="./extend-script.d.ts" />

interface Application {

    /** Dispatched before a Document is created. This event bubbles. This event is cancelable. */
    BEFORE_NEW: string;

    /** Dispatched before a Document is opened. This event bubbles. This event is cancelable. */
    BEFORE_OPEN: string;

    /** Dispatched after a Document is closed. This event bubbles. This event is not cancelable. */
    AFTER_CLOSE: string;

    /** Dispatched after the active context changes. This event bubbles. This event is not cancelable. */
    AFTER_CONTEXT_CHANGED: string;

    /** Dispatched after the active selection changes. This event bubbles. This event is not cancelable. */
    AFTER_SELECTION_CHANGED: string;

    /** Dispatched after an attribute on the active selection changes. This event bubbles. This event is not cancelable. */
    AFTER_SELECTION_ATTRIBUTE_CHANGED: string;

    /** Dispatched before the Application becomes inactive. This event bubbles. This event is not cancelable. */
    BEFORE_DEACTIVATE: string;

    /** Dispatched after the Application becomes active. This event bubbles. This event is not cancelable. */
    AFTER_ACTIVATE: string;

    /** Dispatched before the Application is quit. Allows the quit to be canceled. This event bubbles. This event is cancelable. */
    BEFORE_QUIT: string;

    /** Dispatched when the Application is quitting. Since the quit has been committed, it can not be canceled. This event bubbles. This event is not cancelable. */
    AFTER_QUIT: string;

    /** The XML preference settings. */
    xmlPreferences: XMLPreference;

    /** XML import preference settings. */
    xmlImportPreferences: XMLImportPreference;

    /** XML export preference settings. */
    xmlExportPreferences: XMLExportPreference;

    /** The default export for web preferences. */
    exportForWebPreferences: ExportForWebPreference;

    /** Transparency preference settings. */
    transparencyPreferences: TransparencyPreference;

    /** Text frame preference settings. */
    textFramePreferences: TextFramePreference;

    /** Text preference settings. */
    textPreferences: TextPreference;

    /** Text default settings. */
    textDefaults: TextDefault;

    /** User dictionary preference settings. */
    dictionaryPreferences: DictionaryPreference;

    /** Story preference settings. */
    storyPreferences: StoryPreference;

    /** Anchored object default settings. */
    anchoredObjectDefaults: AnchoredObjectDefault;

    /** Anchored object settings. */
    anchoredObjectSettings: AnchoredObjectSetting;

    /** Baseline frame grid option settings. */
    baselineFrameGridOptions: BaselineFrameGridOption;

    /** Footnote option settings. */
    footnoteOptions: FootnoteOption;

    /** Lists all paragraph styles (regardless of their group). */
    allParagraphStyles: Array<ParagraphStyle>;

    /** Lists all character styles (regardless of their group). */
    allCharacterStyles: Array<CharacterStyle>;

    /** The text wrap preference properties that define the default formatting for wrapping text around objects. */
    textWrapPreferences: TextWrapPreference;

    /** All Table styles. */
    allTableStyles: Array<TableStyle>;

    /** All Cell styles. */
    allCellStyles: Array<CellStyle>;

    /** Document preference settings. */
    documentPreferences: DocumentPreference;

    /** Grid preference settings. */
    gridPreferences: GridPreference;

    /** Guide preference settings. */
    guidePreferences: GuidePreference;

    /** Margin preference settings. */
    marginPreferences: MarginPreference;

    /** Pasteboard preference settings. */
    pasteboardPreferences: PasteboardPreference;

    /** View preference settings. */
    viewPreferences: ViewPreference;

    /** Smart Guide preference properties. */
    smartGuidePreferences: SmartGuidePreference;

    /** Spell-check preferences. */
    spellPreferences: SpellPreference;

    /** Auto-correct preferences. */
    autoCorrectPreferences: AutoCorrectPreference;

    /** Linked story options. */
    linkedStoryOptions: LinkedStoryOption;

    /** Linked Page Item options. */
    linkedPageItemOptions: LinkedPageItemOption;

    /** Script preferences. */
    scriptPreferences: ScriptPreference;

    /** Arguments to pass to a script. */
    scriptArgs: ScriptArg;

    /** EPS export preferences. */
    epsExportPreferences: EPSExportPreference;

    /** PNG export preferences. */
    pngExportPreferences: PNGExportPreference;

    /** A collection of PDF export preferences. */
    pdfExportPreferences: PDFExportPreference;

    /** Interactive PDF export preferences. */
    interactivePDFExportPreferences: InteractivePDFExportPreference;

    /** The PDF place preference properties that define how PDF files are placed in the current document. */
    pdfPlacePreferences: PDFPlacePreference;

    /** Tagged PDF preferences. */
    taggedPDFPreferences: TaggedPDFPreference;

    /** Lists the extensions of file types that can be placed. */
    placeableFileExtensions: Array<string>;

    /** Lists the types of files that can be placed. */
    placeableFileTypes: Array<string>;

    /** The links preference properties that define preferences for links. */
    linkingPreferences: LinkingPreference;

    /** Grabber preference properties that define display performance quality during scrolling. */
    grabberPreferences: GrabberPreference;

    /** The index options properties that define how an index is formatted. */
    indexGenerationOptions: IndexOptions;

    /** Track changes preference settings. */
    trackChangesPreferences: TrackChangesPreference;

    /** Export options for InCopy INCX document format. */
    incopyExportOptions: InCopyExportOption;

    /** IME preference settings. */
    imePreferences: IMEPreference;

    /** The image I/O preference properties that define preferences for importing images. */
    imageIOPreferences: ImageIOPreference;

    /** Image preferences. */
    imagePreferences: ImagePreference;

    /** Stroke/fill proxy settings. */
    strokeFillProxySettings: StrokeFillProxySetting;

    /** Polygon preference properties to use to define default settings for creating a polygon. */
    polygonPreferences: PolygonPreference;

    /** All object styles contained by the Application. */
    allObjectStyles: ObjectStyle;

    /** The default page item formatting for the Application. */
    pageItemDefaults: PageItemDefault;

    /** Preferences for alignment and distribution. */
    alignDistributePreferences: AlignDistributePreference;

    /** The frame fitting option to apply to placed or pasted content. Can be applied to a frame, object style, or document or to the application. */
    frameFittingOptions: FrameFittingOption;

    /** Button preference settings. */
    buttonPreferences: ButtonPreference;

    /** EPS import preferences. */
    epsImportPreferences: EPSImportPreference;

    /** Placed InDesign page attributes. */
    importedPageAttributes: ImportedPageAttribute;

    /** SWF export preferences. */
    swfExportPreferences: SWFExportPreference;

    /** XFL export preferences. */
    xflExportPreferences: XFLExportPreference;

    /** The swatches that are not being used. */
    unusedSwatches: Swatch;

    /** Watermark preferences */
    watermarkPreferences: WatermarkPreference;

    /** The Content Placer. Used to get a reference to the content placer object. */
    contentPlacer: ContentPlacerObject;

    /** Conditional text preferences. */
    conditionalTextPreferences: ConditionalTextPreference;

    /** Color setting properties that define color management defaults. */
    colorSettings: ColorSetting;

    /** Default properties specific to layout grids. */
    layoutGridData: LayoutGridDataInformation;

    /** Default properties specific to frame grids. */
    storyGridData: StoryGridDataInformation;

    /** CJK grid preference settings. */
    cjkGridPreferences: CjkGridPreference;

    /** Grid printing preference and export settings. */
    gridPrintingPreferences: GridPrintingPreference;

    /** Font locking preference settings. */
    fontLockingPreferences: FontLockingPreference;

    /** Mojikumi user interface preference settings. */
    mojikumiUIPreferences: MojikumiUiPreference;

    /** The name of the Application. */
    name: string;

    /** The full path to the Application, including the name of the Application. */
    fullName: File;

    /** The full path to the file. */
    filePath: File;

    /** The application version. */
    version: string;

    /** The locale of the application. */
    locale: Locale;

    /** The current script running from the Scripts panel. */
    activeScript: File;

    /** If true, the Application is visible. */
    visible: boolean;

    /** General preference settings. */
    generalPreferences: GeneralPreference;

    /** Clipboard preference properties that define the way that the application interacts with the system clipboard. */
    clipboardPreferences: ClipboardPreference;

    /** Transform preference properties that define default behaviors when transforming objects. Note: Transforming includes rotation, scaling, flipping, and shearing. */
    transformPreferences: TransformPreference;

    /** If true, a modal dialog or alert is active. */
    modalState: boolean;

    /** The feature set. */
    featureSet: FeatureSetOptions;

    /** The name of the action on the top of the undo stack. */
    undoName: string;

    /** The name of the action on the top of the redo stack. */
    redoName: string;

    /** The names of the items in the undo stack. */
    undoHistory: string;

    /** The names of the items in the redo stack. */
    redoHistory: string;

    /** The undo mode for the current script execution. */
    activeScriptUndoMode: UndoModes;

    /** The user's serial number. */
    serialNumber: string;

    /** The current user's adobe id */
    userAdobeId: string;

    /** The current user's GUID */
    userGuid: string;

    /** XML view preference settings. */
    xmlViewPreferences: XMLViewPreference;

    /** The available performance metrics. */
    performanceMetrics: Number;

    /** The current tool box states */
    toolBoxTools: ToolBox;

    /** Display performance settings. */
    displayPerformancePreferences: DisplayPerformancePreference;

    /** Galley preference settings. */
    galleyPreferences: GalleyPreference;

    /** Text editing preference settings. */
    textEditingPreferences: TextEditingPreference;

    /** Sync preference settings. */
    syncPreferences: SyncPreference;

    /** Preflight option settings. */
    preflightOptions: PreflightOption;

    /** Preflight book option settings. */
    preflightBookOptions: PreflightBookOption;

    /** The list of all object types (strings) a preflight rule can operate on. */
    allPreflightObjectTypes: string;

    /** The list of all categories that have been declared by rules. */
    allPreflightRuleCategories: string;

    /** The list of all known (declared) rule IDs. */
    allPreflightRuleIDs: string;

    /** The data merge option properties that define the data merge. */
    dataMergeOptions: DataMergeOption;

    /** Layout sdjustment preference settings. */
    layoutAdjustmentPreferences: LayoutAdjustmentPreference;

    /** Note preference settings. */
    notePreferences: NotePreference;

    /** JPEG export preferences. */
    jpegExportPreferences: JPEGExportPreference;

    /** Text import preferences. */
    textImportPreferences: TextImportPreference;

    /** Text export preferences. */
    textExportPreferences: TextExportPreference;

    /** Tagged text export preferences. */
    taggedTextExportPreferences: TaggedTextExportPreference;

    /** Tagged text import preferences. */
    taggedTextImportPreferences: TaggedTextImportPreference;

    /** Word and RTF import preferences. */
    wordRTFImportPreferences: WordRTFImportPreference;

    /** Excel import preferences. */
    excelImportPreferences: ExcelImportPreference;

    /** Returns true if the object specifier resolves to valid objects. */
    isValid: boolean;

    /** The parent of the Application (a Application). */
    parent: Application;

    /** Find/change object options. */
    findChangeObjectOptions: FindChangeObjectOption | NothingEnum;

    /** Find text preferences. */
    findTextPreferences: FindTextPreference | NothingEnum;

    /** Change text preferences. */
    changeTextPreferences: ChangeTextPreference | NothingEnum;

    /** Find grep preferences. */
    findGrepPreferences: FindGrepPreference | NothingEnum;

    /** Change grep preferences. */
    changeGrepPreferences: ChangeGrepPreference | NothingEnum;

    /** Find glyph preferences. */
    findGlyphPreferences: FindGlyphPreference | NothingEnum;

    /** Change glyph preferences. */
    changeGlyphPreferences: ChangeGlyphPreference | NothingEnum;

    /** Find object preferences. */
    findObjectPreferences: FindObjectPreference | NothingEnum;

    /** Change object preferences. */
    changeObjectPreferences: ChangeObjectPreference | NothingEnum;

    /** Find/change transliterate options. */
    findChangeTransliterateOptions: FindChangeTransliterateOption | NothingEnum;

    /** Find transliterate preferences. */
    findTransliteratePreferences: FindTransliteratePreference | NothingEnum;

    /** Change transliterate preferences. */
    changeTransliteratePreferences: ChangeTransliteratePreference | NothingEnum;

    /** The color assigned to the tracked changes and notes created by the user. */
    userColor: [number, number, number] | InCopyUIColors;

    /** The user associated with the tracked changes and notes. */
    userName: string;

    /** Clear overrides first before applying object style */
    clearOverridesWhenApplyingStyle: boolean;

    /** The active book. */
    activeBook: Book;

    /** The selected object(s). */
    selection: Object | NothingEnum;

    /** The front-most window. Can return: Window, LayoutWindow or StoryWindow. */
    activeWindow: Mixed;

    /** Delay before mouse operations trigger live screen drawing of page items. */
    liveScreenDrawing: LiveDrawingOptions;

    /** The key object of the selection. */
    selectionKeyObject: PageItem | NothingEnum;

    /** The front-most document. */
    activeDocument: Document;

    /** A property that can be set to any string. */
    label: string;

    /** A property that allows setting of several properties at the same time. */
    properties: Object;

    /** A collection of preferences objects. */
    preferences: Preferences;

    /** A collection of XML export maps. */
    xmlExportMaps: XMLExportMaps;

    /** A collection of XML import maps. */
    xmlImportMaps: XMLImportMaps;

    /** A collection of XML rule processors. */
    xmlRuleProcessors: XMLRuleProcessors;

    /** A collection of XML tags. */
    xmlTags: XMLTags;

    /** A collection of transparency flattener presets. */
    flattenerPresets: FlattenerPresets;

    /** A collection of user dictionaries. */
    userDictionaries: UserDictionaries;

    /** A collection of paragraph style groups. */
    paragraphStyleGroups: ParagraphStyleGroups;

    /** A collection of character style groups. */
    characterStyleGroups: CharacterStyleGroups;

    /** A collection of character styles. */
    characterStyles: CharacterStyles;

    /** A collection of paragraph styles. */
    paragraphStyles: ParagraphStyles;

    /** A collection of text variables. */
    textVariables: TextVariables;

    /** A collection of table styles. */
    tableStyles: TableStyles;

    /** A collection of table style groups. */
    tableStyleGroups: TableStyleGroups;

    /** A collection of cell styles. */
    cellStyles: CellStyles;

    /** A collection of cell style groups. */
    cellStyleGroups: CellStyleGroups;

    /** A collection of stroke styles. */
    strokeStyles: StrokeStyles;

    /** A collection of dashed stroke styles. */
    dashedStrokeStyles: DashedStrokeStyles;

    /** A collection of dotted stroke styles. */
    dottedStrokeStyles: DottedStrokeStyles;

    /** A collection of striped stroke styles. */
    stripedStrokeStyles: StripedStrokeStyles;

    /** A collection of document presets. */
    documentPresets: DocumentPresets;

    /** A collection of auto-correct tables. */
    autoCorrectTables: AutoCorrectTables;

    /** A collection of para style mappings. */
    paraStyleMappings: ParaStyleMappings;

    /** A collection of char style mappings. */
    charStyleMappings: CharStyleMappings;

    /** A collection of table style mappings. */
    tableStyleMappings: TableStyleMappings;

    /** A collection of cell style mappings. */
    cellStyleMappings: CellStyleMappings;

    /** A collection of events. */
    events: Events;

    /** A collection of event listeners. */
    eventListeners: EventListeners;

    /** All attachable idle tasks. */
    idleTasks: IdleTasks;

    /** A collection of inks. */
    inks: Inks;

    /** A collection of trap presets. */
    trapPresets: TrapPresets;

    /** A collection of PDF export presets. */
    pdfExportPresets: PDFExportPresets;

    /** A collection of languages with vendors. */
    languagesWithVendors: LanguagesWithVendors;

    /** A collection of indexing sort options. */
    indexingSortOptions: IndexingSortOptions;

    /** A collection of object style groups. */
    objectStyleGroups: ObjectStyleGroups;

    /** A collection of object styles. */
    objectStyles: ObjectStyles;

    /** A collection of transformation matrices. */
    transformationMatrices: TransformationMatrices;

    /** A collection of fonts. */
    fonts: Fonts;

    /** A collection of Motion presets. */
    motionPresets: MotionPresets;

    /** A collection of documents. */
    documents: Documents;

    /** A collection of swatches. */
    swatches: Swatches;

    /** A collection of colors. */
    colors: Colors;

    /** A collection of tints. */
    tints: Tints;

    /** A collection of gradients. */
    gradients: Gradients;

    /** A collection of mixed inks. */
    mixedInks: MixedInks;

    /** A collection of mixed ink groups. */
    mixedInkGroups: MixedInkGroups;

    /** A collection of dialogs. */
    dialogs: Dialogs;

    /** A collection of conditions for conditional text. */
    conditions: Conditions;

    /** A collection of condition sets for conditional text. */
    conditionSets: ConditionSets;

    /** A collection of composite fonts. */
    compositeFonts: CompositeFonts;

    /** A collection of named grids. */
    namedGrids: NamedGrids;

    /** A collection of kinsoku tables. */
    kinsokuTables: KinsokuTables;

    /** A collection of mojikumi tables. */
    mojikumiTables: MojikumiTables;

    /** A collection of books. */
    books: Books;

    /** A collection of numbered lists. */
    numberingLists: NumberingLists;

    /** A collection of windows. */
    windows: Windows;

    /** A collection of layout windows. */
    layoutWindows: LayoutWindows;

    /** A collection of story windows. */
    storyWindows: StoryWindows;

    /** A collection of panels. */
    panels: Panels;

    /** A collection of background task objects. */
    backgroundTasks: BackgroundTasks;

    /** A collection of menu actions. */
    menuActions: MenuActions;

    /** A collection of script menu actions. */
    scriptMenuActions: ScriptMenuActions;

    /** A collection of menus. */
    menus: Menus;

    /** Display setting properties. */
    displaySettings: DisplaySettings;

    /** A collection of preflight profiles. */
    preflightProfiles: PreflightProfiles;

    /** A collection of preflight rules. */
    preflightRules: PreflightRules;

    /** A collection of preflight processes. */
    preflightProcesses: PreflightProcesses;

    /** A collection of object libraries. */
    libraries: Libraries;

    /** A collection of printer presets. */
    printerPresets: PrinterPresets;

    /** Find/change text options. */
    findChangeTextOptions: FindChangeTextOption | NothingEnum;

    /** Find/change grep options. */
    findChangeGrepOptions: FindChangeGrepOption | NothingEnum;

    /** Find/change glyph options. */
    findChangeGlyphOptions: FindChangeGlyphOption | NothingEnum;
}

declare var Application: Application;
declare var app: Application;
