export const parse = (val) => (val ? JSON.parse(decodeURIComponent(val)) : "");
export const stringify = (val) => JSON.stringify(encodeURIComponent(val));
