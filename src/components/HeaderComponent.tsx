"use client";
import { useEffect, useState } from "react";
import { User } from "@/types/user";
import styles from "@/styles/Header.module.css";
import ThemeButtonComponent from "./general/ThemeButtonComponent";

const MAX_SCROLL = 80;

const HeaderComponent = ({ userData }: { userData: User }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > MAX_SCROLL) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled && styles.scrolled}`}>
      <img src="/user_photo.png" alt="" />
      <div>
        <h1>{`${userData.name} ${userData.lastName}`}</h1>
        <span>{userData.email}</span>
        <ThemeButtonComponent />
      </div>
    </header>
  );
};

export default HeaderComponent;
