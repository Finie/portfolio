import Text from "src/components/output/text/Text";
import styles from "./introSlidingText.module.css";

interface IntroSlidingTextProps {
  data: {
    id: number;
    color: string;
    text: string;
  }[];
  stillText: string;
}

export default function IntroSlidingText({
  data,
  stillText,
}: IntroSlidingTextProps) {
  return (
    <div className={styles.container}>
      <Text type={"sub-heading"}>{stillText}</Text>
      <section className={styles.animation}>
        <div>
          {data.map((item) => {
            return (
              <div
                style={{ backgroundColor: item.color, borderRadius: 7 }}
                className={styles.slideItemContainer}
              >
                <Text type={"sub-heading"}>{item.text}</Text>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
