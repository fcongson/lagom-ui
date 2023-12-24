export const sortByComparator = (obj, comparator) => {
  const sortedKeys = Object.keys(obj).sort((a, b) => comparator(obj, a, b));

  const sortedObject = {};
  sortedKeys.forEach((key) => {
    sortedObject[key] = obj[key];
  });

  return sortedObject;
};
