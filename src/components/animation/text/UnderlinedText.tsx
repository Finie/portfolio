import Text from "src/components/output/text/Text";
import styles from "./underlined.module.css";

interface UnderlineTextProps {
  text: string;
  type?:
    | "caption"
    | "heading"
    | "sub-heading"
    | "body-regular"
    | "body-bold"
    | "large";
  wordsToHighlight: string[];
}

export default function UnderlinedText({
  text,
  type = "sub-heading",
  wordsToHighlight,
}: UnderlineTextProps) {
  // Create a regex to match any of the words to highlight
  const regex = new RegExp(`\\b(${wordsToHighlight.join("|")})\\b`, "gi");

  // Split the text into parts, keeping matches
  const parts = text.split(regex);

  return (
    <Text type={type}>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <span className={styles.fancy} key={index}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </Text>
  );
}
