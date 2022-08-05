export const parse = (val) => JSON.parse(decodeURIComponent(val));
export const stringify = (val) => JSON.stringify(encodeURIComponent(val));
