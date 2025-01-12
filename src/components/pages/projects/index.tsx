import styles from "./projects.module.css";

import PageTransition from "src/components/animation/framer/PageTransition";
import UnderlinedText from "src/components/animation/text/UnderlinedText";
import Text from "src/components/output/text/Text";

import IdeaIcon from "src/assets/bulb-business-develop-svgrepo-com.svg";
import ResearchIcon from "src/assets/research-2-svgrepo-com.svg";
import DesignIcon from "src/assets/design-education-painting-svgrepo-com.svg";
import DevelopIcon from "src/assets/robot-code-svgrepo-com.svg";
import DeployIcon from "src/assets/deploy-svgrepo-com.svg";
import SuccessIcon from "src/assets/achievement-business-goal-svgrepo-com.svg";

import PowerLogo from "src/assets/icons/power_logo.png";
import AlsougLogo from "src/assets/icons/alsoug_cashi.png";
import GladysLogo from "src/assets/icons/gladys_logo.png";
import TospayLogo from "src/assets/icons/tospay_logo.png";
import BantuzSinglesLogo from "src/assets/icons/bantuz_singles.png";

import WorkFlowItem, {
  WorkFlowItemProps,
} from "src/components/output/views/WorkFlowItem";

import AnimatedButton from "src/components/animation/buttons/AnimatedButton";

export default function Projects() {
  const workFlowData: WorkFlowItemProps[] = [
    {
      id: 0, // @ts-ignore
      icon: <IdeaIcon className={styles.icon} />,
      description: "Idea",
    },
    {
      id: 1, // @ts-ignore
      icon: <ResearchIcon className={styles.icon} />,
      description: "Research",
    },
    {
      id: 2, // @ts-ignore
      icon: <DesignIcon className={styles.icon} />,
      description: "Design",
    },
    {
      id: 3, // @ts-ignore
      icon: <DevelopIcon className={styles.icon} />,
      description: "Develop",
    },
    {
      id: 4, // @ts-ignore
      icon: <DeployIcon className={styles.icon} />,
      description: "Deploy",
    },
    {
      id: 5, // @ts-ignore
      icon: <SuccessIcon className={styles.icon} />,
      description: "Success",
    },
  ];

  const CompanyData: {
    id: number;
    icon: string;
    companyName: string;
    link: string;
  }[] = [
    {
      id: 0,
      icon: PowerLogo,
      companyName: "Power Financial Welness",
      link: "https://yourpower.io/",
    },
    {
      id: 1,
      icon: AlsougLogo,
      companyName: "Alsoug | Cashi",
      link: "https://getcashi.com/",
    },
    {
      id: 2,
      icon: BantuzSinglesLogo,
      companyName: "Bantuz Singles",
      link: "https://bantuzsingles.com/",
    },
    {
      id: 3,
      icon: GladysLogo,
      companyName: "Gladys Technologies",
      link: "https://www.joingladys.com/",
    },
    {
      id: 4,
      icon: TospayLogo,
      companyName: "Tospay LTD",
      link: "https://www.tospay.net/",
    },
  ];

  const latestProjects: {
    id: number;
    icon: string;
    projectName: string;
    downloads: string;
    link: string;
  }[] = [
    {
      id: 0,
      icon: AlsougLogo,
      projectName: "Alsoug | Cashi",
      downloads: "1,000,000+ Downloads",
      link: "https://play.google.com/store/search?q=my%20Cashi&c=apps",
    },

    {
      id: 1,
      icon: PowerLogo,
      projectName: "Power Android",
      downloads: "10,000+ Downloads",
      link: "https://play.google.com/store/search?q=power+financial+wellness&c=apps",
    },

    {
      id: 2,
      icon: TospayLogo,
      projectName: "Third Party Dashboards",
      downloads: "5,000+ Users",
      link: "https://www.tospay.net/#products-section",
    },

    {
      id: 3,
      icon: PowerLogo,
      projectName: "Power iOS",
      downloads: "1,000+ Downloads",
      link: "https://apps.apple.com/ke/app/power-financial-wellness/id6471488866",
    },

    {
      id: 4,
      icon: BantuzSinglesLogo,
      projectName: "Bantuz Singles Android",
      downloads: "1,000+ Downloads",
      link: "https://play.google.com/store/search?q=bantuz+singles&c=apps",
    },
    {
      id: 5,
      icon: BantuzSinglesLogo,
      projectName: "Bantuz Singles iOS",
      downloads: "500+ Downloads",
      link: "https://apps.apple.com/ke/app/bantuz-singles/id6448677117",
    },
    {
      id: 6,
      icon: GladysLogo,
      projectName: "Gladys Dashboard",
      downloads: "500+ Users",
      link: "https://business.joingladys.com/",
    },
  ];

  return (
    <PageTransition>
      <div className={`${styles.projectContainer}`}>
        <div>
          <UnderlinedText
            text={"I Design and Build Digital Products!"}
            wordsToHighlight={["Digital", "Products"]}
            type={"heading"}
          />

          <Text type={"body-regular"}>
            Let’s bring your brand to life and turn your big ideas into digital
            products that truly connect with your audience. I’m here to
            collaborate with you, designing and building solutions that reflect
            your vision, elevate your product, and drive meaningful impact—all
            with a welcoming, user-first approach. The result? A digital
            experience your audience will love and remember.
          </Text>
        </div>

        <div className={styles.stepsContainer}>
          {workFlowData.map((item) => {
            return (
              <WorkFlowItem
                id={item.id}
                icon={item.icon}
                description={item.description}
              />
            );
          })}
        </div>

        <div className={styles.overallBottom}>
          <div className={styles.bottomContainer}>
            <div className={styles.bottomContainerColumn}>
              <div>
                <Text type={"heading"}>I Build Delightful </Text>
                <Text type={"heading"}>Digital Expiriences</Text>
              </div>
              <div className={styles.bottomContainerLeftDescription}>
                <Text type={"body-regular"}>
                  We bring designs to life with responsive, accessible, and
                  visually captivating interfaces. By focusing on user
                  experience and performance, we craft front-end solutions that
                  engage users and ensure seamless interaction across all
                  devices.
                </Text>

                <Text type={"body-regular"}>
                  We build robust, scalable, and secure backend systems to power
                  seamless digital experiences. From managing complex data to
                  integrating APIs, we ensure that every solution is optimized
                  for reliability, efficiency, and growth.
                </Text>
              </div>
            </div>
            <div className={styles.bottomContainerColumnTwo}>
              <div className={styles.companyHeader}>
                <Text type={"heading"}>Companies I've Worked With</Text>
              </div>

              <div className={styles.companyContainer}>
                {CompanyData.map((company) => {
                  return (
                    <div
                      className={styles.companyItemContainer}
                      key={company.id}
                    >
                      <div className={styles.companyLogoContainer}>
                        <img
                          className={styles.companyLogo}
                          src={company.icon}
                        />
                      </div>
                      <div className={styles.comanyNameContainer}>
                        <a
                          href={company.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Text type={"body-bold"}>{company.companyName}</Text>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.projectsContainer}>
            <div>
              <Text type={"heading"}>My Digital Playground</Text>
            </div>

            <div className={styles.companyContainer}>
              {latestProjects.map((project) => {
                return (
                  <div className={styles.companyItemContainer} key={project.id}>
                    <div className={styles.companyLogoContainer}>
                      <img className={styles.companyLogo} src={project.icon} />
                    </div>
                    <div className={styles.comanyNameContainer}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Text type={"body-regular"}>{project.downloads}</Text>
                      </a>
                      <Text type={"body-bold"}>{project.projectName}</Text>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.hiremeContainer}>
            <AnimatedButton title={"Hire Me!"} />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
