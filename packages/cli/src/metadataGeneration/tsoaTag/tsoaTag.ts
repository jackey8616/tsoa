export type TsoaTagKind = 'isString' | 'isBoolean' | 'isInt' | 'isLong' | 'isFloat' | 'isDouble' | 'isDate' | 'isDateTime';

export interface TsoaTag {
  kind: TsoaTagKind;
  parameterName?: string;
  errorDescription?: string;
}
