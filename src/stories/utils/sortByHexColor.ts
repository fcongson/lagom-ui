const sortByComparator = (obj, comparator) => {
  const sortedKeys = Object.keys(obj).sort((a, b) => comparator(obj, a, b));

  const sortedObject = {};
  sortedKeys.forEach((key) => {
    sortedObject[key] = obj[key];
  });

  return sortedObject;
};

// Comparator function for sorting by hex color values
const compareHexColors = (obj, a, b) => {
  const colorA = obj[a];
  const colorB = obj[b];

  // Convert hex color codes to decimal values for comparison
  const decimalA = parseInt(colorA.slice(1), 16);
  const decimalB = parseInt(colorB.slice(1), 16);

  // Compare decimal values
  return decimalA - decimalB;
};

// Example usage:
export const sortByHexColor = (obj) => sortByComparator(obj, compareHexColors);
