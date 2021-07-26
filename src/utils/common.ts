// eslint-disable-next-line @typescript-eslint/no-empty-function
export const NoopFn = (): void => {};
export const toggleFn = (prev: boolean): boolean => !prev;

export const IS_WINDOW_DEFINED = typeof window !== `undefined`;

export const safeParserJson = (
  parseString: string | null,
): ReturnType<JSON[`parse`]> => {
  try {
    return parseString != null ? JSON.parse(parseString) : null;
  } catch (e) {
    return null;
  }
};

export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(` `);
};

export const genDateString = (date: string): string =>
  new Date(date).toLocaleDateString(`en-gb`, {
    day: `numeric`,
    month: `long`,
    year: `numeric`,
  });

export const IS_DEV_ENV: boolean =
  process?.env?.NODE_ENV === `development` ?? false;
