import Text from "../text/Text";
import styles from "src/components/pages/about/about.module.css";
import { ReactNode } from "react";

export interface EngineeringComponentProps {
  data: {
    id: number;
    title: string;
    illustrator: ReactNode;
    listItems: {
      id: number;
      text: string;
    }[];
  };
}

export default function EngineeringComponent({
  data,
}: EngineeringComponentProps) {
  const { title, illustrator, listItems } = data;
  return (
    <div className={styles.firstItems}>
      <Text type={"sub-heading"}>{title}</Text>
      <div className={styles.innercontentContainer}>
        <div>
          <ul>
            {listItems.map((listItem) => {
              return (
                <li>
                  <Text
                    className={styles.listComponent}
                    type={"body-regular"}
                    key={listItem.id}
                  >
                    {listItem.text}
                  </Text>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.illustrationContainer}>{illustrator}</div>
      </div>
    </div>
  );
}
