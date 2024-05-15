export const isArray = (val: unknown) => Array.isArray(val);
// @ts-ignore
export const isNotEmptyArray = (val: unknown) => isArray(val) && val?.length > 0;

export const isFunction = (val: unknown) => typeof val === 'function';

export const isObject = (val: unknown) =>val !== null && typeof val === 'object';

export const isString = (val: unknown) => typeof val === 'string';

export const isNumber = (val: unknown) => typeof val === 'number';

export const isBoolean = (val: unknown) => typeof val === 'boolean';

export const isPromise = (val: unknown) => {
  // @ts-ignore
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
