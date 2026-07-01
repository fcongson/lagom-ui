import clsx from "clsx";
import "./Hero.css";

export const Hero: React.FunctionComponent<{
  image: React.ReactElement;
  children?: React.ReactNode;
  className?: string;
}> = ({ image, children, className, ...restProps }) => {
  return (
    <div className={clsx("lagom-hero", className)} {...restProps}>
      {image ? (
        <>
          <div className="lagom-hero__image">{image}</div>
        </>
      ) : null}
      {children ? (
        <>
          <div className="lagom-hero__image-overlay" />
          <div className="lagom-hero__content">{children}</div>
        </>
      ) : null}
    </div>
  );
};
