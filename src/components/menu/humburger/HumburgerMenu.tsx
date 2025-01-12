import GlowingText from "src/components/animation/text/GlowingText";
import { useHumburgerContext } from "../context/HumburgerContext";
import Humburger from "./Humburger";

import styles from "./humburger.module.css";

export default function HumburgerMenu() {
  const { isOpen, setIsOpen } = useHumburgerContext();

  return (
    <div className={`${styles.humburgerContainer}`}>
      <GlowingText
        data={[
          {
            id: 0,
            firstText: "PHENIUS",
            secondText: "MUTHOMI",
          },
        ]}
        noGlow
      />
      <Humburger isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
