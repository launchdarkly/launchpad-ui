export const isString = (str: unknown) => str != null && typeof str.valueOf() === 'string';
