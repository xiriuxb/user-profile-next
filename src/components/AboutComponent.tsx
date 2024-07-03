import { User } from "@/types/user";
import styles from "@/styles/Components.module.css";

const AboutComponent = ({ userData }: { userData: User }) => {
  return (
    <section className={`${styles.section} ${styles.about}`}>
      <h2>About:</h2>
      <div>{userData.about}</div>
    </section>
  );
};

export default AboutComponent;
