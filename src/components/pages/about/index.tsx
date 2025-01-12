import PageTransition from "src/components/animation/framer/PageTransition";
import styles from "./about.module.css";
import Text from "src/components/output/text/Text";
import TextReveal from "src/components/animation/text/TextReveal";
import Java from "src/components/animation/svg/Java";
import ReactIcon from "src/components/animation/svg/ReactIcon";
import NextJsIcon from "src/components/animation/svg/NextJsIcon";
import SwiftIcon from "src/components/animation/svg/SwiftIcon";
import SpringIcon from "src/components/animation/svg/SpringIcon";
import NodeJsIcon from "src/components/animation/svg/NodeJsIcon";
import KotlinIcon from "src/components/animation/svg/KotlinIcon";
import { ReactNode } from "react";
import AnimatedServer from "src/assets/animatedServer.svg";
import WebIllustrator from "src/assets/webguy_svg.svg";
import MobilePayments from "src/assets/mobile_payment.svg";
import SoftwareTester from "src/assets/software_tester.svg";

import PowerLogo from "src/assets/icons/power_logo.png";
import AlsougLogo from "src/assets/icons/alsoug_cashi.png";
import GladysLogo from "src/assets/icons/gladys_logo.png";
import TospayLogo from "src/assets/icons/tospay_logo.png";
import BantuzSinglesLogo from "src/assets/icons/bantuz_singles.png";
import EngineeringComponent from "src/components/output/views/EngineeringComponent";

interface IconListProps {
  id: number;
  icon: ReactNode;
  name: string;
}

const IconList: IconListProps[] = [
  {
    id: 0,
    icon: <Java />,
    name: "Java",
  },
  {
    id: 1,
    icon: <KotlinIcon />,
    name: "Kotlin",
  },
  {
    id: 2,
    icon: <ReactIcon />,
    name: "React / React-Native",
  },
  {
    id: 3,
    icon: <NextJsIcon />,
    name: "Next JS",
  },
  {
    id: 4,
    icon: <SwiftIcon />,
    name: "Swift / Swift UI",
  },
  {
    id: 5,
    icon: <SpringIcon />,
    name: "Spring Boot",
  },
  {
    id: 6,
    icon: <NodeJsIcon />,
    name: "Node Js",
  },
];

const engineeringData = [
  {
    id: 0,
    title: "Mobile Applications",
    illustrator: <MobilePayments />,
    listItems: [
      {
        id: 0,
        text: "Android ( Kotlin / Java) | iOS ( Swift / SwiftUI) | React-Native ( JavaScript / Typescript)",
      },
      {
        id: 1,
        text: "(MVVM | MVC) Architecture | Datastore | RoomDB | SQLite",
      },
      {
        id: 2,
        text: "REST and  GraphQL API integrations",
      },
      {
        id: 3,
        text: "Third-party tools/lib and services integrations",
      },
      {
        id: 4,
        text: "Scalable, high-performance mobile applications.",
      },
      {
        id: 5,
        text: "Internal mobile tools/library implementations",
      },
      {
        id: 6,
        text: "Google Analytics or custom event trackers.",
      },
      {
        id: 7,
        text: "Performance tracking",
      },
      {
        id: 8,
        text: "Integration and Unit testing ",
      },
    ],
  },
  {
    id: 1,
    title: "Web Applications",
    illustrator: <WebIllustrator />,
    listItems: [
      {
        id: 0,
        text: "React | Next JS | Tailwind | Bootstrap | CSS | Styled Components | Emotion",
      },
      {
        id: 1,
        text: "React-Context | Redux | Sqlite",
      },
      {
        id: 2,
        text: "REST and GraphQL API integration",
      },
      {
        id: 3,
        text: "Third-party tools/services  and API integrations",
      },
      {
        id: 4,
        text: "Creative, responsive, and intuitive user interfaces.",
      },
      {
        id: 5,
        text: "Static generation (SSG) and metadata optimization.",
      },
      {
        id: 6,
        text: "Google Analytics or custom event trackers.",
      },
      {
        id: 7,
        text: "Performance tracking",
      },
      {
        id: 8,
        text: "Integration and Unit testing ",
      },
    ],
  },
  {
    id: 0,
    title: "Server-Side Systems",
    illustrator: <AnimatedServer />,
    listItems: [
      {
        id: 0,
        text: "Spring boot | Java | Kotlin | Typescript (Node Js)",
      },
      {
        id: 1,
        text: "SQL and NoSQL Databases",
      },
      {
        id: 2,
        text: "REST and  GraphQL API Development",
      },
      {
        id: 3,
        text: "Third-party tools and services integrations",
      },
      {
        id: 4,
        text: "Scalable, high-performance backend systems.",
      },
      {
        id: 5,
        text: "Database queries optimization and caching",
      },
      {
        id: 6,
        text: "Implementation of authentication and encryption algorithms",
      },
      {
        id: 7,
        text: "External gateway implementation",
      },
      {
        id: 8,
        text: "Integration and Unit testing ",
      },
    ],
  },
  {
    id: 0,
    title: "Cloud Platforms",
    illustrator: <SoftwareTester />,
    listItems: [
      {
        id: 0,
        text: "AWS (Amazon Web Services): EC2, S3, RDS, Lambda",
      },
      {
        id: 1,
        text: "Google Cloud Platform (GCP): Compute Engine, Cloud Storage, and Cloud Run",
      },
      {
        id: 2,
        text: "Microsoft Azure: Azure App Services, and Azure DevOps.",
      },
      {
        id: 3,
        text: "Containerization and Orchestration: Docker, Kubernetes",
      },
      {
        id: 4,
        text: "(CI/CD): Jenkins, GitHub Actions, CircleCI, GitLab CI",
      },
    ],
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
    downloads: "5000+ Users",
    link: "https://business.joingladys.com/",
  },
];

export default function About() {
  return (
    <PageTransition>
      <div className={`${styles.aboutContainer}`}>
        <div className={styles.projectsContainer}>
          <Text type={"heading"}>Projects </Text>

          <div className={styles.companyContainer}>
            {latestProjects.map((project) => {
              return (
                <div
                  className={styles.companyItemContainer}
                  key={project.id}
                  onClick={() => {
                    window.open(project.link, "_blank");
                  }}
                >
                  <div className={styles.companyLogoContainer}>
                    <img className={styles.companyLogo} src={project.icon} />
                  </div>
                  <div className={styles.comanyNameContainer}>
                    <Text type={"body-bold"}>{project.downloads}</Text>
                    <Text type={"body-regular"}>{project.projectName}</Text>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.descriptionContainer}>
          {engineeringData.map((engineeringItem) => {
            return <EngineeringComponent data={engineeringItem} />;
          })}
        </div>

        <div className={styles.techStackContainer}>
          <TextReveal firstText={"Technology Infrastructure"} secondText={""} />
          <div className={styles.iconContainer}>
            {IconList.map((listItem) => {
              return (
                <div key={listItem.id} className={styles.iconItem}>
                  <div className={styles.iconHolder}>{listItem.icon}</div>
                  <div className={styles.textHolder}>
                    <Text
                      className={styles.textComponent}
                      type={"body-regular"}
                    >
                      {listItem.name}
                    </Text>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
