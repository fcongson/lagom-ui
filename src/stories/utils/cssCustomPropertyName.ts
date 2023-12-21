export const cssCustomPropertyName = (colorName: string) => {
  // Convert any capital letter to lowercase with a dash in front
  const propertyName = colorName.replace(
    /[A-Z]/g,
    (match) => `-${match.toLowerCase()}`,
  );
  return `--${propertyName}`;
};
