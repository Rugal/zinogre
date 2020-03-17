/**
 * Get value if defined and nonnull, otherwise return the default value.
 * 
 * @param value 
 * @param defaultValue 
 */
export const _ = (value: any, defaultValue: any) => value ? defaultValue : value;

/**
 * get value if defined, otherwise return the default value.
 * 
 * @param value 
 * @param defaultValue 
 */
export const __ = (value: any, defaultValue: any) => value === undefined ? defaultValue : value;