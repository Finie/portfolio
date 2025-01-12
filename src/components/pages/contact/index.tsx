import PageTransition from "src/components/animation/framer/PageTransition";
import styles from "./contact.module.css";
import Text from "src/components/output/text/Text";

export default function Contact() {
  return (
    <PageTransition>
      <div className={`${styles.contactContainer}`}>
        <Text type={"heading"}>Get In Touch Page</Text>
      </div>
    </PageTransition>
  );
}
