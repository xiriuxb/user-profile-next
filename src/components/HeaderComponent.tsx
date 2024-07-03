import { User } from "@/types/user";
import styles from "@/styles/Components.module.css"

const HeaderComponent = ({userData}:{userData:User}) => {
  return (
    <header className={styles.header}>
      <img src="/user_photo.png" alt="" />
      <div>
        <h1>{`${userData.name} ${userData.lastName}`}</h1>
        <span>{userData.email}</span>
      </div>
    </header>
  );
};

export default HeaderComponent;