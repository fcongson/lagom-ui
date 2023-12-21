interface PreviewProps {
  backgroundColor?: string;
  border?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: string;
}

export interface TokenCardProps {
  preview?: string;
  previewProps?: PreviewProps;
  name: string;
  value: string;
}

export const TokenCard: React.FunctionComponent<TokenCardProps> = ({
  preview,
  previewProps,
  name,
  value,
}) => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "4rem",
        margin: "1rem",
        borderRadius: "0.5rem",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <span
        style={{
          padding: "1rem",
          width: "50%",
          borderRight: "none",
          borderRadius: "0.5rem 0 0 0.5rem",
          ...previewProps,
        }}
      >
        {preview}
      </span>
      <span
        style={{
          padding: "1rem",
          width: "50%",
          backgroundColor: "var(--lagom-semantic-color-bg-muted)",
          borderRadius: "0 0.5rem 0.5rem 0",
          fontFamily: "var(--lagom-core-font-families-monospace)",
        }}
      >
        <div>{name}</div>
        <div
          style={{
            fontSize: "var(--lagom-core-font-sizes-sm)",
            paddingTop: "0.5rem",
          }}
        >
          {value}
        </div>
      </span>
    </div>
  );
};
