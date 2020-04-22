export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export const colorCode = (color) => {
  const index = COLORS.indexOf(color);
  if (index >= 0) {
    return index;
  }
  throw new Error("No sopported code");
};
