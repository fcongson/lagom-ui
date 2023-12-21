export const formatPropertyName = (name) => {
  let formattedString = "";
  for (let i = 0; i < name.length; i++) {
    const char = name[i];
    if (char === char.toUpperCase()) {
      formattedString += " " + char;
    } else {
      formattedString += char;
    }
  }
  return (
    formattedString.trim().charAt(0).toUpperCase() + formattedString.slice(1)
  );
};
