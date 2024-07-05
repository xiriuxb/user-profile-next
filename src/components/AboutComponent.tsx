import { User } from "@/types/user";
import styles from "@/styles/Components.module.css";
import useAnim from "@/hooks/useAnim";
import { useRef } from "react";

const AboutComponent = ({ userData }: { userData: User }) => {
  const sectRef = useRef<HTMLDivElement>(null)
  useAnim(sectRef, styles.activeLeft);
  return (
    <section ref={sectRef} className={`${styles.section} ${styles.about}`}>
      <h2>About:</h2>
      <div>{userData.about}</div>
    </section>
  );
};

export default AboutComponent;
