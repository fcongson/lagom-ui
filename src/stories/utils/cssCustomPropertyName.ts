/**
 * The CSS custom property for a token's JS export name:
 * `lagomCoreFontSizesH1` → `--lagom-core-font-sizes-h1`, and palette stops
 * `fernOlive45` → `--fern-olive-45`.
 */
export const cssCustomPropertyName = (name: string) => {
  const palette = name.match(/^(lagom|fern|waypoint)([A-Z][a-z]+)(\d+)$/);
  if (palette) {
    return `--${palette[1]}-${palette[2].toLowerCase()}-${palette[3]}`;
  }
  // Convert any capital letter to lowercase with a dash in front
  const propertyName = name.replace(
    /[A-Z]/g,
    (match) => `-${match.toLowerCase()}`,
  );
  return `--${propertyName}`;
};
