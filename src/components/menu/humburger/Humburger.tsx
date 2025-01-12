import { Dispatch, SetStateAction } from "react";

import styles from "./humburger.module.css";
import { useThemeStyleContext } from "src/context/ThemeContext";

interface Props {
  color?: string;
  size?: number;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Humburger({ size = 46, isOpen, setIsOpen }: Props) {
  const barHeight = 3;
  const barWidth = size * 0.875;
  const secondBarWidth = size * 0.775;
  const smallBarWidth = size * 0.4375;

  const { isDarkMode } = useThemeStyleContext();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); // Prevent default behavior for space bar
      toggle();
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${styles.humburger}`}
      style={{ width: size, height: size }}
      onClick={toggle}
      onKeyDown={handleKeyDown}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close" : "Open"}
      role={"button"}
      tabIndex={0}
    >
      <div
        className={`${styles.bar} ${styles.bar1} ${
          isOpen ? styles.barOneOpen : styles.barOneClosed
        }`}
        style={{
          width: barWidth,
          height: barHeight,
          backgroundColor:
            isOpen && isDarkMode
              ? "var(--primary)"
              : isDarkMode === "dark"
              ? "white"
              : "black",
        }}
      /> 
      <div
        className={`${styles.bar} ${styles.bar2} ${
          isOpen ? styles.barTwoOpen : styles.barTwoClosed
        }`}
        style={{
          width: isOpen ? barWidth : secondBarWidth,
          height: barHeight,
          backgroundColor:
            isOpen && isDarkMode
              ? "var(--primary)"
              : isDarkMode === "dark"
              ? "white"
              : "black",
        }}
      />
      <div
        className={`${styles.bar} ${styles.bar3} ${
          isOpen ? styles.barThreeOpen : styles.barThreeClosed
        }`}
        style={{
          width: smallBarWidth,
          height: barHeight,
          backgroundColor: isDarkMode === "dark" ? "white" : "black",
        }}
      />
    </div>
  );
}
