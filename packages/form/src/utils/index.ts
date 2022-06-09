type FieldPath = string | string[];

const createFieldErrorId = (fieldIdentifier?: FieldPath) =>
  fieldIdentifier ? `${[...fieldIdentifier].join('')}-err` : undefined;

export { createFieldErrorId };
export type { FieldPath };
