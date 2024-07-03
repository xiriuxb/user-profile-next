import styles from "@/styles/Components.module.css"
export const ContactComponent = () => {
  return (
    <>
      <section className={`${styles.section} ${styles.contact}`}>
        <h2>Contact:</h2>
        <div>
          <form action="post">
            <label htmlFor="user_name" className={styles.formGroup}>
              Name:
              <input
                type="text"
                id="user_name"
                maxLength={35}
                className={styles.input}
                placeholder="Name"
              />
            </label>
            <label htmlFor="user_email" className={styles.formGroup}>
              Email:
              <input
                type="email"
                id="user_email"
                placeholder="Email"
                maxLength={35}
                className={styles.input}
              />
            </label>
            <label htmlFor="user_message" className={styles.formGroup}>
              Message:
              <textarea
                name="user_message"
                id="user_message"
                rows={5}
              ></textarea>
            </label>

            <input
              className={styles.sendButton}
              type="button"
              title="Send"
              value="Send"
            />
          </form>
        </div>
      </section>
    </>
  );
};
