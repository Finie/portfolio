import Text from "src/components/output/text/Text";
import styles from "./animatedbutton.module.css";

interface AnimatedButtonProps {
  title: string;
}

export default function AnimatedButton({ title }: AnimatedButtonProps) {
  return (
    <button className={styles.learnMore}>
      <span className={styles.circle} aria-hidden="true">
        <span className={`${styles.icon} ${styles.arrow}`}></span>
      </span>
      <Text type={"caption"} className={styles.buttonText}>
        {title}
      </Text>
    </button>
  );
}
