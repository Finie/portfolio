import styles from "./mirrored.module.css";

export default function MirroredText() {
  return (
    <div>
      <h2 className={styles.rotate}>Writing</h2>
      <h2>Mode</h2>
    </div>
  );
}
