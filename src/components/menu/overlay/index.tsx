import { useHumburgerContext } from "../context/HumburgerContext";
import styles from "./overlay.module.css";

export default function BackgroundOverlay() {
  const { isOpen, setIsOpen } = useHumburgerContext();

  return (
    <div
      hidden={!isOpen}
      onClick={() => setIsOpen(false)}
      className={`${styles.overlay}`}
    />
  );
}
