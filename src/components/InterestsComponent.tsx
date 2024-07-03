import { User } from "@/types/user";
import styles from "@/styles/Components.module.css";

const InterestsComponent = ({ userData }: { userData: User }) => {
  return (
    <section className={`${styles.section} ${styles.about}`}>
      <h2>Interests:</h2>
      <div>
        <ul>
          {userData.interests.map((int) => {
            return (
              <li>
                <h4>{int.name}</h4>
                <p>{int.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default InterestsComponent;
