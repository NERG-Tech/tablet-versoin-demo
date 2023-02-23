export const setAll = (state: any, properties: any) => {
  const keys = Object.keys(properties);
  keys.forEach(key => {
    state[key] = properties[key];
  });
};
