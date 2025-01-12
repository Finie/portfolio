import Text from "src/components/output/text/Text";
import styles from "./textReveal.module.css";

interface TextRevealProps {
  firstText: string;
  secondText: string;
}

export default function TextReveal({ firstText, secondText }: TextRevealProps) {
  return (
    <Text type={"heading"} className={styles.homeTitle}>
      <span>{firstText}</span>
      <span>{secondText}</span>
    </Text>
  );
}
