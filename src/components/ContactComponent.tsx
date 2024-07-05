"use client";
import { FormEvent, useState } from "react";
import { useMyForm } from "@/hooks/useMyForm";
import LoadingComponent from "./general/LoadingComponent";
import AlertComponent from "./general/AlertComponent";
import styles from "@/styles/Components.module.css";
import fakeFetch from "@/helpers/fetchHelper";

const EMAIL_REGEX = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const contactInitialValue = {
  user_name: "",
  user_email: "",
  user_message: "",
};

const formValidations = {
  user_email: [
    (value: string) => EMAIL_REGEX.test(value),
    "Invalid email format",
  ],
  user_name: [(value: string) => value.length >= 2, "Invalid name."],
  user_message: [(value: string) => value.length > 2, "Empty message."],
};

export const ContactComponent = () => {
  const { formState, onInputChange, validForm, errors } = useMyForm(
    contactInitialValue,
    formValidations
  );
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSumbitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setAlertMessage("");
    try {
      await fakeFetch();
      setSuccess(true);
      setAlertMessage("Message sent");
    } catch (e) {
      setSuccess(false);
      setAlertMessage("An error ocurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className={`${styles.section} ${styles.contact}`}>
        <h2>Contact:</h2>
        <div>
          <form action="post" onSubmit={(e) => handleSumbitForm(e)}>
            <label htmlFor="user_name" className={styles.formGroup}>
              Name:
              <input
                required
                type="text"
                id="user_name"
                name="user_name"
                maxLength={35}
                className={styles.input}
                placeholder="Name"
                value={formState.user_name}
                onChange={onInputChange}
              />
              <InputErrorComponent error={errors["user_name"]} />
            </label>
            <label htmlFor="user_email" className={styles.formGroup}>
              Email:
              <input
                required
                type="email"
                id="user_email"
                name="user_email"
                placeholder="Email"
                maxLength={35}
                className={styles.input}
                value={formState.user_email}
                onChange={onInputChange}
              />
              <InputErrorComponent error={errors["user_email"]} />
            </label>
            <label htmlFor="user_message" className={styles.formGroup}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                Message:
                <span>{formState.user_message.length} / 512</span>
              </div>
              <textarea
                required
                name="user_message"
                id="user_message"
                rows={10}
                value={formState.user_message}
                onChange={onInputChange}
                maxLength={512}
              ></textarea>
              <InputErrorComponent error={errors["user_message"]} />
            </label>

            <button
              type="submit"
              className={styles.sendButton}
              title="Send"
              value="Send"
              disabled={loading || !validForm}
              style={{
                cursor: `${loading || !validForm ? "not-allowed" : "unset"}`,
              }}
            >
              {loading ? <LoadingComponent /> : "Send"}
            </button>
          </form>
          <AlertComponent
            message={alertMessage}
            type={success ? "success" : "danger"}
          />
        </div>
      </section>
    </>
  );
};

const InputErrorComponent = ({ error }: { error?: string }) => {
  return (
    <span className={`${styles.inputError} ${!error && styles.hidden}`}>
      {error}
    </span>
  );
};
