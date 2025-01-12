import Text from "src/components/output/text/Text";
import styles from "./animatedHover.module.css";

interface HoverTextProps {
  text: string;
}

export default function AnimatedHoverText({ text }: HoverTextProps) {
  return (
    <Text type={"large"} className={styles.hoverText}>
      {text}
    </Text>
  );
}
