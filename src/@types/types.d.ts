// types/mdx.d.ts
declare module "*.mdx" {
  let MDXComponent: (props) => React.JSX.Element;
  export default MDXComponent;
}

// Components import their stylesheet as a side effect, e.g.
// `import "./Button.css"`. No exported bindings are needed, so this just
// lets tsc resolve the specifier.
declare module "*.css";
