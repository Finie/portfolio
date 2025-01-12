import Text from "src/components/output/text/Text";
import styles from "./glowing.module.css";

export interface GlowingTextProps {
  data: {
    id: number;
    firstText: string;
    secondText: string;
  }[];
  noGlow?: boolean;
  coloredText?: boolean;
}

export default function GlowingText({
  data,
  noGlow = false,
  coloredText = false,
}: GlowingTextProps) {
  return (
    <div>
      {data.map((textProps) => {
        return (
          <div className={`${noGlow ? styles.headerNoGlow : styles.header}`}>
            <span>
              <span>
                <Text
                  className={
                    coloredText && textProps.id === 0 ? styles.firstText : ""
                  }
                  type={noGlow ? "body-bold" : "large"}
                >
                  {`${textProps.firstText}`}
                </Text>
              </span>
            </span>
            <span>
              <Text
                className={
                  coloredText && textProps.id === 1 ? styles.firstText : ""
                }
                type={noGlow ? "body-bold" : "large"}
                style={{ color: "var(--primary)" }}
              >
                {textProps.secondText}
              </Text>
            </span>
          </div>
        );
      })}
    </div>
  );
}
