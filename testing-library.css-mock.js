// Jest can't parse .css files. Components import their stylesheet as a
// side effect (e.g. `import "./Button.css"`); this mock lets that import
// resolve to an empty module during tests instead of erroring.
module.exports = {};
