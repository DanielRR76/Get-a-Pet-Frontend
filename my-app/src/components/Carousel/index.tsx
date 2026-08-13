import React from "react";
import styles from "./styles.module.css";
export default function Carousel({
  children,
  width = "100%",
}: {
  children: React.ReactNode;
  width?: string;
}) {
  return (
    <div className={styles.carousel} style={{ width: width }}>
      {children}
    </div>
  );
}
