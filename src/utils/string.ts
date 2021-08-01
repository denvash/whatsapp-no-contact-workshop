export const stringify = (obj: unknown): string => JSON.stringify(obj, null, 4);

export const toUpperCaseFirstLetter = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

type StrOrNumb = string | number;

export const sorter = (a: StrOrNumb, b: StrOrNumb): StrOrNumb =>
  isNaN(a as number) && isNaN(b as number)
    ? ((a as string) || ``).localeCompare((b as string) || ``)
    : (a as number) - (b as number);

const genToBooleanString =
  (booleanString: string) =>
  (value: string): boolean =>
    typeof value === `string` ? value.toLowerCase() === booleanString : false;

const isFalseString = (value: string): boolean =>
  genToBooleanString(`false`)(value);

export const isTrueString = (value: string): boolean =>
  genToBooleanString(`true`)(value);

const isBooleanType = (value: unknown) => typeof value === `boolean`;

export const toBoolean = (value: boolean | string): boolean | string =>
  isBooleanType(value) ? value : isFalseString(value as string) ? false : true;
stringify;
