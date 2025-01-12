import { CSSProperties, ReactNode } from "react";

import styles from "./text.module.css";

interface TextProps {
  type?:
    | "caption"
    | "heading"
    | "sub-heading"
    | "body-regular"
    | "body-bold"
    | "large";
  color?: "primary" | "secondary" | "accent";
  children: ReactNode;
  style?: CSSProperties; // Inline styles
  className?: string;
}

export default function Text({ type, className, children }: TextProps) {
  if (type === "body-bold") {
    return (
      <p className={`${styles.bodyBold} ${className || ""}`}>{children}</p>
    );
  } else if (type === "caption") {
    return (
      <span className={`${styles.caption} ${className || ""}`}>{children}</span>
    );
  } else if (type === "heading") {
    return (
      <h3 className={`${styles.heading} ${className || ""}`}>{children}</h3>
    );
  } else if (type === "sub-heading") {
    return (
      <h5 className={`${styles.subHeading} ${className || ""}`}>{children}</h5>
    );
  } else if (type === "body-regular") {
    return (
      <h5 className={`${styles.bodyRegular} ${className || ""}`}>{children}</h5>
    );
  } else {
    return <h1 className={`${styles.large} ${className || ""}`}>{children}</h1>;
  }
}
