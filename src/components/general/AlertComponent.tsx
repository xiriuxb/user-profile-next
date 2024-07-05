"use client";
import styles from "@/styles/MyAlert.module.css";
import { useEffect, useRef, useState } from "react";

interface AlertProps {
  message: string;
  type: "danger" | "success" | "info";
  animationMs?: number;
  automaticHide?: boolean
}

const AlertComponent = ({
  message = "",
  type,
  animationMs = 2000,
  automaticHide = false
}: AlertProps) => {
  const [hidding, setHidding] = useState(false);
  const [alMessage, setAlMessage] = useState("");

  useEffect(() => {
    setAlMessage(message);
    setHidding(false);
    if(automaticHide){
      setTimeout(()=>{
        hideNotification()
      },animationMs)
    }
  }, [message]);

  const hideNotification = () => {
    setHidding(true);
    setTimeout(() => {
      setAlMessage("");
    }, (animationMs / 2));
  };

  return (
    <>
      {alMessage && (
        <div
          onClick={hideNotification}
          role="alert"
          style={{ animationDuration: `${animationMs / 2}ms` }}
          className={`${styles.myAlert} ${styles[type]} ${
            hidding ? styles.myAlertOut : styles.myAlertIn
          }`}
        >
          <div>
            <span>{alMessage}</span>
            <button>x</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AlertComponent;
