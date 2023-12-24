import { sortByComparator } from "./sortByComparator";

const comparePixelValues = (obj, a, b) => {
  // Extract numeric values from strings containing pixels
  const aValue = parseInt(obj[a].replace("px", ""), 10);
  const bValue = parseInt(obj[b].replace("px", ""), 10);

  // Compare numeric values
  if (aValue < bValue) {
    return -1;
  } else if (aValue > bValue) {
    return 1;
  } else {
    return 0;
  }
};

export const sortByPx = (obj) => sortByComparator(obj, comparePixelValues);
