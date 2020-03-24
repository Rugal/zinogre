export const date = (input: number) => {
  const d = new Date(input * 1000);
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
};
