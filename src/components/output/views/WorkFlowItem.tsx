import Text from "src/components/output/text/Text";

import styles from "src/components/pages/projects/projects.module.css";
import { ReactNode } from "react";

export interface WorkFlowItemProps {
  id: number;
  icon: ReactNode;
  description: string;
}

export default function WorkFlowItem({
  id,
  icon,
  description,
}: WorkFlowItemProps) {
  return (
    <div className={styles.stepsIconContainer} key={id}>
      {icon}
      <div className={styles.descriptionHolder}>
        <Text type={"body-bold"}>{description}</Text>
      </div>
    </div>
  );
}
