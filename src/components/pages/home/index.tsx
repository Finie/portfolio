import PageTransition from "src/components/animation/framer/PageTransition";
import styles from "./home.module.css";
import Text from "src/components/output/text/Text";
import GlowingText from "src/components/animation/text/GlowingText";
import IntroSlidingText from "src/components/animation/text/IntroSlidingText";

import AnimatedDeveloper from "src/assets/animated_developer.svg";
import AnimatedButton from "src/components/animation/buttons/AnimatedButton";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <PageTransition>
      <div className={`${styles.homeContainer}`}>
        <div className={styles.leftDiv}>
          <div className={styles.intoSliding}>
            <GlowingText
              data={[
                {
                  id: 0,
                  firstText: "TECH",
                  secondText: "EXPLORER",
                },
                {
                  id: 1,
                  firstText: "&CREATIVE ",
                  secondText: " DESIGN.",
                },
              ]}
              coloredText
            />
            <IntroSlidingText
              data={[
                {
                  id: 0,
                  color: "var(--accent-color)",
                  text: "I'M PHENIUS MUTHOMI",
                },
                {
                  id: 1,
                  color: "var(--primary)",
                  text: "A SOFTWARE DEVELOPER",
                },
                {
                  id: 2,
                  color: "var(--text-secondary)",
                  text: "& SOFTWARE ARCHITECT",
                },
              ]}
              stillText={"Hello World 👋🏽 "}
            />
          </div>

          <div className={styles.descriptionContainer}>
            <Text type={"body-regular"}>
              <Text type={"body-bold"}>Summary</Text>
              I'm Phenius Muthomi, a passionate
              <strong> Software Developer </strong>and
              <strong> Visionary Architect </strong> dedicated to crafting
              innovative, scalable, and user-centric solutions. With a keen eye
              for <strong>design and perfomance</strong>. I help companies and
              founders transform complex ideas into powerful and seamless
              digital experiences .
              <strong>
                Let's build the future, one line of code at a time!
              </strong>
            </Text>
          </div>

          <div className={styles.animatedButtonContainer}>
            <Link to={"/about"}>
              <AnimatedButton title={"Learn more!"} />
            </Link>
          </div>
        </div>

        <div className={styles.rightDiv}>
          <div className={styles.animationContainer}>
            <AnimatedDeveloper />
          </div>
          <div className={styles.challageBlock}>
            <Text type={"body-regular"}>
              <Text type={"body-bold"}>Challange your limits</Text>
              The only limits that exist are the ones you place on yourself –
              challenge them, for growth happens when you step beyond what you
              thought was possible.
            </Text>
          </div>

          <div className={styles.animatedButtonContainerRight}>
            <Link to={"/about"}>
              <AnimatedButton title={"Learn more!"} />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
