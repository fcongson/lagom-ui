import "./ContentContainer.css";

export const ContentContainer: React.FunctionComponent<{
  children?: React.ReactNode;
}> = ({ children }) => (
  <div className="lagom-content-container">{children}</div>
);
