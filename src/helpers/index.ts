export const formatPrice = (value: number) => {
  return (
    "$" +
    value.toFixed(0).replace(/./g, (c, i, a) => {
      return i && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    })
  );
};

export const urlEncode = (input: string) => {
  if (typeof input !== "string") {
    return input;
  }
  return input.replace(/\s/g, "+");
};