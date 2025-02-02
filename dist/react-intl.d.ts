import { DisplayNames } from '@formatjs/intl-displaynames';
import { DisplayNamesOptions } from '@formatjs/intl-displaynames';
import { DisplayNamesOptions as DisplayNamesOptions_2 } from '@formatjs/intl-displaynames/lib';
import * as React from 'react';

declare type ArgumentElement = BaseElement<TYPE.argument>;

declare interface ArgumentPart {
    type: PART_TYPE.argument;
    value: any;
}

declare interface BaseElement<T extends TYPE> {
    type: T;
    value: string;
    location?: Location;
}

/**
 * Create intl object
 * @param config intl config
 * @param cache cache for formatter instances to prevent memory leak
 */
export declare function createIntl(config: OptionalIntlConfig, cache?: IntlCache): IntlShape;

export declare function createIntlCache(): IntlCache;

export declare interface CustomFormatConfig {
    format?: string;
}

export declare interface CustomFormats extends Partial<Formats> {
    relative?: Record<string, IntlRelativeTimeFormatOptions>;
}

declare type DateElement = SimpleFormatElement<TYPE.date, DateTimeSkeleton>;

declare interface DateTimeSkeleton {
    type: SKELETON_TYPE.dateTime;
    pattern: string;
    location?: Location;
}

declare const DEFAULT_INTL_CONFIG: Pick<IntlConfig, 'formats' | 'messages' | 'timeZone' | 'textComponent' | 'defaultLocale' | 'defaultFormats' | 'onError'>;

export declare function defineMessages<T, U extends Record<string, T>>(msgs: U): U;

declare interface ElementPart {
    type: 'element';
    value: string;
}

declare interface FieldData {
    '0'?: string;
    '1'?: string;
    '-1'?: string;
    '2'?: string;
    '-2'?: string;
    '3'?: string;
    '-3'?: string;
    future: RelativeTimeData;
    past: RelativeTimeData;
}

export declare type FormatDateOptions = Exclude<Intl.DateTimeFormatOptions, 'localeMatcher'> & CustomFormatConfig;

export declare type FormatDisplayNameOptions = Exclude<DisplayNamesOptions, 'localeMatcher'>;

export declare type FormatListOptions = Exclude<IntlListFormatOptions, 'localeMatcher'>;

export declare type FormatNumberOptions = Exclude<UnifiedNumberFormatOptions, 'localeMatcher'> & CustomFormatConfig;

export declare type FormatPluralOptions = Exclude<Intl.PluralRulesOptions, 'localeMatcher'> & CustomFormatConfig;

export declare type FormatRelativeTimeOptions = Exclude<IntlRelativeTimeFormatOptions, 'localeMatcher'> & CustomFormatConfig;

declare interface Formats {
    number: Record<string, Intl.NumberFormatOptions>;
    date: Record<string, Intl.DateTimeFormatOptions>;
    time: Record<string, Intl.DateTimeFormatOptions>;
}

declare type FormattableUnit = Unit | Units;

export declare const FormattedDate: React.FC<Intl.DateTimeFormatOptions & CustomFormatConfig & {
    value: string | number | Date | undefined;
}>;

export declare const FormattedDateParts: React.FC<Intl.DateTimeFormatOptions & CustomFormatConfig & {
    value: string | number | Date | undefined;
    children(val: Intl.DateTimeFormatPart[]): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
}>;

export declare const FormattedDisplayName: React.FC<DisplayNamesOptions_2 & {
    value: string | number | object;
}>;

export declare class FormattedHTMLMessage extends FormattedMessage<Record<string, PrimitiveType>> {
    static displayName: string;
    static defaultProps: {
        tagName: "span";
        values: {};
    };
    render(): JSX.Element;
}

export declare const FormattedList: React.FC<IntlListFormatOptions & {
    value: React.ReactNode[];
}>;

export declare class FormattedMessage<V extends Record<string, any> = Record<string, PrimitiveType | React.ReactElement | FormatXMLElementFn>> extends React.Component<Props_3<V>> {
    static displayName: string;
    static defaultProps: {
        values: {};
    };
    shouldComponentUpdate(nextProps: Props_3<V>): boolean;
    render(): JSX.Element;
}

export declare const FormattedNumber: React.FC<UnifiedNumberFormatOptions & CustomFormatConfig & {
    value: number;
}>;

export declare const FormattedNumberParts: React.FC<Formatter['formatNumber'] & {
    value: Parameters<IntlShape['formatNumber']>[0];
    children(val: Intl.NumberFormatPart[]): React.ReactElement | null;
}>;

export declare const FormattedPlural: React.ForwardRefExoticComponent<Pick<Props_2, "children" | "other" | "zero" | "one" | "two" | "few" | "many" | "localeMatcher" | "format" | "type" | "value"> & {
    forwardedRef?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
} & React.RefAttributes<any>> & {
    WrappedComponent: React.ComponentType<Props_2>;
};

export declare class FormattedRelativeTime extends React.PureComponent<Props, State_2> {
    _updateTimer: any;
    static displayName: string;
    static defaultProps: Pick<Props, 'unit' | 'value'>;
    state: State_2;
    constructor(props: Props);
    scheduleNextUpdate({ updateIntervalInSeconds, unit }: Props, { currentValueInSeconds }: State_2): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    static getDerivedStateFromProps(props: Props, state: State_2): Partial<State_2> | null;
    render(): JSX.Element;
}

export declare const FormattedTime: React.FC<Intl.DateTimeFormatOptions & CustomFormatConfig & {
    value: string | number | Date | undefined;
}>;

export declare const FormattedTimeParts: React.FC<Intl.DateTimeFormatOptions & CustomFormatConfig & {
    value: string | number | Date | undefined;
    children(val: Intl.DateTimeFormatPart[]): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
}>;

declare type Formatter = {
    formatDate: FormatDateOptions;
    formatTime: FormatDateOptions;
    formatNumber: FormatNumberOptions;
    formatList: FormatListOptions;
    formatDisplayName: FormatDisplayNameOptions;
};

export declare interface Formatters {
    getDateTimeFormat(...args: ConstructorParameters<typeof Intl.DateTimeFormat>): Intl.DateTimeFormat;
    getNumberFormat(...args: ConstructorParameters<typeof Intl.NumberFormat>): Intl.NumberFormat;
    getMessageFormat(...args: ConstructorParameters<typeof IntlMessageFormat>): IntlMessageFormat;
    getRelativeTimeFormat(...args: ConstructorParameters<typeof RelativeTimeFormat>): RelativeTimeFormat;
    getPluralRules(...args: ConstructorParameters<typeof Intl.PluralRules>): Intl.PluralRules;
    getListFormat(...args: ConstructorParameters<typeof ListFormat>): ListFormat;
    getDisplayNames(...args: ConstructorParameters<typeof DisplayNames>): DisplayNames;
}

declare interface Formatters_2 {
    getNumberFormat(...args: ConstructorParameters<typeof Intl.NumberFormat>): Intl.NumberFormat;
    getDateTimeFormat(...args: ConstructorParameters<typeof Intl.DateTimeFormat>): Intl.DateTimeFormat;
    getPluralRules(...args: ConstructorParameters<typeof Intl.PluralRules>): Intl.PluralRules;
}

declare type FormatXMLElementFn = (...args: any[]) => string | object;

export declare function injectIntl<IntlPropName extends string, P extends WrappedComponentProps<IntlPropName> = WrappedComponentProps<any>>(WrappedComponent: React.ComponentType<P>, options?: Opts<IntlPropName, false>): React.FC<WithIntlProps<P>> & {
    WrappedComponent: React.ComponentType<P>;
};

export declare function injectIntl<IntlPropName extends string = 'intl', P extends WrappedComponentProps<IntlPropName> = WrappedComponentProps<any>, T extends React.ComponentType<P> = any>(WrappedComponent: React.ComponentType<P>, options?: Opts<IntlPropName, true>): React.ForwardRefExoticComponent<React.PropsWithoutRef<WithIntlProps<P>> & React.RefAttributes<T>> & {
    WrappedComponent: React.ComponentType<P>;
};

export declare interface IntlCache {
    dateTime: Record<string, Intl.DateTimeFormat>;
    number: Record<string, Intl.NumberFormat>;
    message: Record<string, IntlMessageFormat>;
    relativeTime: Record<string, RelativeTimeFormat>;
    pluralRules: Record<string, Intl.PluralRules>;
    list: Record<string, ListFormat>;
    displayNames: Record<string, DisplayNames>;
}

export declare interface IntlConfig {
    locale: string;
    timeZone?: string;
    formats: CustomFormats;
    textComponent?: React.ComponentType | keyof React.ReactHTML;
    messages: Record<string, string> | Record<string, MessageFormatElement[]>;
    defaultLocale: string;
    defaultFormats: CustomFormats;
    onError(err: string): void;
}

export declare const IntlContext: React.Context<IntlShape>;

export declare interface IntlFormatters {
    formatDate(value: Parameters<Intl.DateTimeFormat['format']>[0] | string, opts?: FormatDateOptions): string;
    formatTime(value: Parameters<Intl.DateTimeFormat['format']>[0] | string, opts?: FormatDateOptions): string;
    formatDateToParts(value: Parameters<Intl.DateTimeFormat['format']>[0] | string, opts?: FormatDateOptions): Intl.DateTimeFormatPart[];
    formatTimeToParts(value: Parameters<Intl.DateTimeFormat['format']>[0] | string, opts?: FormatDateOptions): Intl.DateTimeFormatPart[];
    formatRelativeTime(value: Parameters<RelativeTimeFormat['format']>[0], unit?: Parameters<RelativeTimeFormat['format']>[1], opts?: FormatRelativeTimeOptions): string;
    formatNumber(value: Parameters<Intl.NumberFormat['format']>[0], opts?: FormatNumberOptions): string;
    formatNumberToParts(value: Parameters<Intl.NumberFormat['format']>[0], opts?: FormatNumberOptions): Intl.NumberFormatPart[];
    formatPlural(value: Parameters<Intl.PluralRules['select']>[0], opts?: FormatPluralOptions): ReturnType<Intl.PluralRules['select']>;
    formatMessage(descriptor: MessageDescriptor, values?: Record<string, PrimitiveType>): string;
    formatMessage(descriptor: MessageDescriptor, values?: Record<string, PrimitiveType | React.ReactElement | FormatXMLElementFn>): string | React.ReactNodeArray;
    formatHTMLMessage(descriptor: MessageDescriptor, values?: Record<string, PrimitiveType>): React.ReactNode;
    formatList(values: Array<string>, opts?: FormatListOptions): string;
    formatList(values: Array<string | React.ReactNode>, opts?: FormatListOptions): React.ReactNode;
    formatDisplayName(value: Parameters<DisplayNames['of']>[0], opts?: FormatDisplayNameOptions): string | undefined;
}

declare interface IntlListFormatOptions {
    /**
     * The locale matching algorithm to use.
     * Possible values are "lookup" and "best fit"; the default is "best fit".
     * For information about this option, see
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation.
     */
    localeMatcher?: 'best fit' | 'lookup';
    /**
     * The format of output message. Possible values are:
     * - "always" (default, e.g., 1 day ago),
     * - or "auto" (e.g., yesterday).
     * The "auto" value allows to not always have to
     * use numeric values in the output.
     */
    type?: 'conjunction' | 'disjunction' | 'unit';
    /**
     * The length of the internationalized message. Possible values are:
     * - "long" (default, e.g., in 1 month)
     * - "short" (e.g., in 1 mo.),
     * - or "narrow" (e.g., in 1 mo.).
     * The narrow style could be similar to the short style for some locales.
     */
    style?: 'long' | 'short' | 'narrow';
}

declare class IntlMessageFormat {
    private readonly ast;
    private readonly locales;
    private readonly formatters;
    private readonly formats;
    private readonly message;
    private readonly formatterCache;
    constructor(message: string | MessageFormatElement[], locales?: string | string[], overrideFormats?: Partial<Formats>, opts?: Options);
    format: (values?: Record<string, PrimitiveType> | undefined) => string;
    formatToParts: (values?: Record<string, any> | undefined) => MessageFormatPart[];
    formatHTMLMessage: (values?: Record<string, string | number | boolean | object | Date | FormatXMLElementFn | null | undefined> | undefined) => (string | object)[];
    resolvedOptions: () => {
        locale: string;
    };
    getAst: () => MessageFormatElement[];
    static defaultLocale: string;
    static __parse: typeof parse | undefined;
    static formats: {
        number: {
            currency: {
                style: string;
            };
            percent: {
                style: string;
            };
        };
        date: {
            short: {
                month: string;
                day: string;
                year: string;
            };
            medium: {
                month: string;
                day: string;
                year: string;
            };
            long: {
                month: string;
                day: string;
                year: string;
            };
            full: {
                weekday: string;
                month: string;
                day: string;
                year: string;
            };
        };
        time: {
            short: {
                hour: string;
                minute: string;
            };
            medium: {
                hour: string;
                minute: string;
                second: string;
            };
            long: {
                hour: string;
                minute: string;
                second: string;
                timeZoneName: string;
            };
            full: {
                hour: string;
                minute: string;
                second: string;
                timeZoneName: string;
            };
        };
    };
}

export declare class IntlProvider extends React.PureComponent<OptionalIntlConfig, State> {
    static displayName: string;
    static defaultProps: Pick<IntlConfig, "formats" | "messages" | "timeZone" | "textComponent" | "defaultLocale" | "defaultFormats" | "onError">;
    private cache;
    state: State;
    static getDerivedStateFromProps(props: OptionalIntlConfig, { prevConfig, cache }: State): Partial<State> | null;
    render(): JSX.Element;
}

declare interface IntlRelativeTimeFormatOptions {
    /**
     * The locale matching algorithm to use.
     * Possible values are "lookup" and "best fit"; the default is "best fit".
     * For information about this option, see
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation.
     */
    localeMatcher?: 'best fit' | 'lookup';
    /**
     * The format of output message. Possible values are:
     * - "always" (default, e.g., 1 day ago),
     * - or "auto" (e.g., yesterday).
     * The "auto" value allows to not always have to
     * use numeric values in the output.
     */
    numeric?: 'always' | 'auto';
    /**
     * The length of the internationalized message. Possible values are:
     * - "long" (default, e.g., in 1 month)
     * - "short" (e.g., in 1 mo.),
     * - or "narrow" (e.g., in 1 mo.).
     * The narrow style could be similar to the short style for some locales.
     */
    style?: 'long' | 'short' | 'narrow';
}

export declare interface IntlShape extends IntlConfig, IntlFormatters {
    formatters: Formatters;
}

declare interface IParseOptions {
    filename?: string;
    startRule?: string;
    tracer?: any;
    [key: string]: any;
}

declare type LDMLPluralRule = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other';

declare class ListFormat {
    constructor(locales?: string | string[], options?: IntlListFormatOptions);
    format(elements: string[]): string;
    formatToParts(elements: string[]): Part_2[];
    resolvedOptions(): ResolvedIntlListFormatOptions;
    static supportedLocalesOf(locales: string | string[], options?: Pick<IntlListFormatOptions, 'localeMatcher'>): string[];
    static __addLocaleData(...data: ListPatternLocaleData[]): void;
    static localeData: Record<string, ListPatternFieldsData>;
    private static availableLocales;
    private static __defaultLocale;
    private static getDefaultLocale;
    private static relevantExtensionKeys;
    static polyfilled: boolean;
    private static readonly __INTERNAL_SLOT_MAP__;
}

declare interface ListPattern {
    start: string;
    middle: string;
    end: string;
    pair: string;
}

declare interface ListPatternData {
    long: ListPattern;
    short?: ListPattern;
    narrow?: ListPattern;
}

declare interface ListPatternFieldsData {
    conjunction?: ListPatternData;
    disjunction?: ListPatternData;
    unit?: ListPatternData;
}

declare type ListPatternLocaleData = LocaleData<ListPatternFieldsData>;

declare type LiteralElement = BaseElement<TYPE.literal>;

declare interface LiteralPart {
    type: 'literal';
    value: string;
}

declare interface LiteralPart_2 {
    type: PART_TYPE.literal;
    value: string;
}

declare type Locale = string;

declare interface LocaleData<T> {
    data: Record<Locale, T>;
    aliases: Record<string, string>;
    availableLocales: string[];
    parentLocales: Record<string, string>;
}

declare type LocaleFieldsData = {
    [f in RelativeTimeField]?: FieldData;
} & {
    nu?: Array<string | null>;
};

declare interface Location {
    start: LocationDetails;
    end: LocationDetails;
}

declare interface LocationDetails {
    offset: number;
    line: number;
    column: number;
}

export declare interface MessageDescriptor {
    id?: string | number;
    description?: string | object;
    defaultMessage?: string;
}

declare type MessageFormatElement = LiteralElement | ArgumentElement | NumberElement | DateElement | TimeElement | SelectElement | PluralElement | PoundElement;

declare type MessageFormatPart = LiteralPart_2 | ArgumentPart;

declare type NumberElement = SimpleFormatElement<TYPE.number, NumberSkeleton>;

declare interface NumberFormatDigitOptions {
    minimumIntegerDigits?: number;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    minimumSignificantDigits?: number;
    maximumSignificantDigits?: number;
}

declare interface NumberSkeleton {
    type: SKELETON_TYPE.number;
    tokens: NumberSkeletonToken[];
    location?: Location;
}

declare interface NumberSkeletonToken {
    stem: string;
    options: string[];
}

export declare type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

declare type OptionalIntlConfig = Omit<IntlConfig, keyof typeof DEFAULT_INTL_CONFIG> & Partial<typeof DEFAULT_INTL_CONFIG>;

declare interface Options {
    formatters?: Formatters_2;
}

declare interface Options_2 {
    /**
     * Whether to convert `#` in plural rule options
     * to `{var, number}`
     * Default is true
     */
    normalizeHashtagInPlural?: boolean;
    /**
     * Capture location info in AST
     * Default is false
     */
    captureLocation?: boolean;
}

declare interface Opts<IntlPropName extends string = 'intl', ForwardRef extends boolean = false> {
    intlPropName?: IntlPropName;
    forwardRef?: ForwardRef;
    enforceContext?: boolean;
}

declare function parse(input: string, opts?: ParseOptions): MessageFormatElement[];

declare type ParseOptions = Options_2 & IParseOptions;

declare type Part = LiteralPart | RelativeTimeFormatNumberPart;

declare type Part_2 = LiteralPart | ElementPart;

declare const enum PART_TYPE {
    literal = 0,
    argument = 1
}

declare interface PluralElement extends BaseElement<TYPE.plural> {
    options: Record<ValidPluralRule, PluralOrSelectOption>;
    offset: number;
    pluralType: Intl.PluralRulesOptions['type'];
}

declare interface PluralOrSelectOption {
    value: MessageFormatElement[];
    location?: Location;
}

declare interface PoundElement {
    type: TYPE.pound;
    location?: Location;
}

declare type PrimitiveType = string | number | boolean | null | undefined | Date;

declare interface Props extends FormatRelativeTimeOptions {
    value?: number;
    unit?: Unit;
    updateIntervalInSeconds?: number;
    children?(value: string): React.ReactChild;
}

declare interface Props_2 extends FormatPluralOptions {
    value: number;
    intl: IntlShape;
    other: React.ReactNode;
    zero?: React.ReactNode;
    one?: React.ReactNode;
    two?: React.ReactNode;
    few?: React.ReactNode;
    many?: React.ReactNode;
    children?(value: React.ReactNode): React.ReactElement | null;
}

declare interface Props_3<V extends Record<string, any> = Record<string, React.ReactNode>> extends MessageDescriptor {
    values?: V;
    tagName?: React.ElementType<any>;
    children?(...nodes: React.ReactNodeArray): React.ReactNode;
}

export declare const RawIntlProvider: React.Provider<IntlShape>;

declare type RelativeTimeData = {
    [u in LDMLPluralRule]?: string;
};

declare type RelativeTimeField = 'second' | 'second-short' | 'second-narrow' | 'minute' | 'minute-short' | 'minute-narrow' | 'hour' | 'hour-short' | 'hour-narrow' | 'day' | 'day-short' | 'day-narrow' | 'week' | 'week-short' | 'week-narrow' | 'month' | 'month-short' | 'month-narrow' | 'quarter' | 'quarter-short' | 'quarter-narrow' | 'year' | 'year-short' | 'year-narrow';

declare class RelativeTimeFormat {
    constructor(locales?: string | string[], options?: IntlRelativeTimeFormatOptions);
    format(value: number, unit: FormattableUnit): string;
    formatToParts(value: number, unit: FormattableUnit): Part[];
    resolvedOptions(): ResolvedIntlRelativeTimeFormatOptions;
    static supportedLocalesOf(locales: string | string[], options?: Pick<IntlRelativeTimeFormatOptions, 'localeMatcher'>): string[];
    static __addLocaleData(...data: RelativeTimeLocaleData[]): void;
    static localeData: Record<string, UnpackedLocaleFieldsData>;
    private static availableLocales;
    private static __defaultLocale;
    private static getDefaultLocale;
    private static relevantExtensionKeys;
    static polyfilled: boolean;
    private static readonly __INTERNAL_SLOT_MAP__;
}

declare interface RelativeTimeFormatNumberPart extends Intl.NumberFormatPart {
    unit: Unit;
}

declare type RelativeTimeLocaleData = LocaleData<LocaleFieldsData>;

declare interface ResolvedIntlListFormatOptions {
    /**
     * The BCP 47 language tag for the locale actually used.
     * If any Unicode extension values were requested in the
     * input BCP 47 language tag that led to this locale,
     * the key-value pairs that were requested and are
     * supported for this locale are included in locale.
     */
    locale: string;
    /**
     * The format of output message. Possible values are:
     * - "always" (default, e.g., 1 day ago),
     * - or "auto" (e.g., yesterday).
     * The "auto" value allows to not always have to
     * use numeric values in the output.
     */
    type: 'conjunction' | 'disjunction' | 'unit';
    /**
     * The length of the internationalized message. Possible values are:
     * - "long" (default, e.g., in 1 month)
     * - "short" (e.g., in 1 mo.),
     * - or "narrow" (e.g., in 1 mo.).
     * The narrow style could be similar to the short style for some locales.
     */
    style: 'long' | 'short' | 'narrow';
}

declare interface ResolvedIntlRelativeTimeFormatOptions extends Pick<IntlRelativeTimeFormatOptions, 'style' | 'numeric'> {
    /**
     * The BCP 47 language tag for the locale actually used.
     * If any Unicode extension values were requested in the
     * input BCP 47 language tag that led to this locale,
     * the key-value pairs that were requested and are
     * supported for this locale are included in locale.
     */
    locale: string;
    /**
     * The value requested using the Unicode
     * extension key "nu" or filled in as a default.
     */
    numberingSystem: string;
}

declare interface SelectElement extends BaseElement<TYPE.select> {
    options: Record<string, PluralOrSelectOption>;
}

declare interface SimpleFormatElement<T extends TYPE, S extends Skeleton> extends BaseElement<T> {
    style?: string | S | null;
}

declare type Skeleton = NumberSkeleton | DateTimeSkeleton;

declare const enum SKELETON_TYPE {
    number = 0,
    dateTime = 1
}

declare interface State {
    /**
     * Explicit intl cache to prevent memory leaks
     */
    cache: IntlCache;
    /**
     * Intl object we created
     */
    intl?: IntlShape;
    /**
     * list of memoized config we care about.
     * This is important since creating intl is
     * very expensive
     */
    prevConfig: OptionalIntlConfig;
}

declare interface State_2 {
    prevUnit?: Unit;
    prevValue?: number;
    currentValueInSeconds: number;
}

declare type TimeElement = SimpleFormatElement<TYPE.time, DateTimeSkeleton>;

declare enum TYPE {
    /**
     * Raw text
     */
    literal = 0,
    /**
     * Variable w/o any format, e.g `var` in `this is a {var}`
     */
    argument = 1,
    /**
     * Variable w/ number format
     */
    number = 2,
    /**
     * Variable w/ date format
     */
    date = 3,
    /**
     * Variable w/ time format
     */
    time = 4,
    /**
     * Variable w/ select format
     */
    select = 5,
    /**
     * Variable w/ plural format
     */
    plural = 6,
    /**
     * Only possible within plural argument.
     * This is the `#` symbol that will be substituted with the count.
     */
    pound = 7
}

declare type UnifiedNumberFormatOptions = Intl.NumberFormatOptions & NumberFormatDigitOptions & {
    localeMatcher?: UnifiedNumberFormatOptionsLocaleMatcher;
    style?: UnifiedNumberFormatOptionsStyle;
    compactDisplay?: UnifiedNumberFormatOptionsCompactDisplay;
    currencyDisplay?: UnifiedNumberFormatOptionsCurrencyDisplay;
    currencySign?: UnifiedNumberFormatOptionsCurrencySign;
    notation?: UnifiedNumberFormatOptionsNotation;
    signDisplay?: UnifiedNumberFormatOptionsSignDisplay;
    unit?: Unit_2;
    unitDisplay?: UnifiedNumberFormatOptionsUnitDisplay;
};

declare type UnifiedNumberFormatOptionsCompactDisplay = 'short' | 'long';

declare type UnifiedNumberFormatOptionsCurrencyDisplay = 'symbol' | 'code' | 'name' | 'narrowSymbol';

declare type UnifiedNumberFormatOptionsCurrencySign = 'standard' | 'accounting';

declare type UnifiedNumberFormatOptionsLocaleMatcher = 'lookup' | 'best fit';

declare type UnifiedNumberFormatOptionsNotation = 'standard' | 'scientific' | 'engineering' | 'compact';

declare type UnifiedNumberFormatOptionsSignDisplay = 'auto' | 'always' | 'never' | 'exceptZero';

declare type UnifiedNumberFormatOptionsStyle = 'decimal' | 'percent' | 'currency' | 'unit';

declare type UnifiedNumberFormatOptionsUnitDisplay = 'long' | 'short' | 'narrow';

declare type Unit = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';

declare type Unit_2 = 'degree' | 'acre' | 'hectare' | 'percent' | 'bit' | 'byte' | 'gigabit' | 'gigabyte' | 'kilobit' | 'kilobyte' | 'megabit' | 'megabyte' | 'petabyte' | 'terabit' | 'terabyte' | 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'second' | 'week' | 'year' | 'centimeter' | 'foot' | 'inch' | 'kilometer' | 'meter' | 'mile-scandinavian' | 'mile' | 'millimeter' | 'yard' | 'gram' | 'kilogram' | 'ounce' | 'pound' | 'stone' | 'celsius' | 'fahrenheit' | 'fluid-ounce' | 'gallon' | 'liter' | 'milliliter';

declare type Units = 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'quarters' | 'years';

declare type UnpackedLocaleFieldsData = {
    [f in RelativeTimeField]?: FieldData;
} & {
    nu: Array<string | null>;
};

export declare function useIntl(): IntlShape;

declare type ValidPluralRule = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other' | string;

export declare type WithIntlProps<P> = Omit<P, keyof WrappedComponentProps> & {
    forwardedRef?: React.Ref<any>;
};

export declare type WrappedComponentProps<IntlPropName extends string = 'intl'> = {
    [k in IntlPropName]: IntlShape;
};

export { }
