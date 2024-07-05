import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import userData from "../../public/user.json";
import { ContactComponent } from "@/components/ContactComponent";
import HeaderComponent from "@/components/HeaderComponent";
import AboutComponent from "@/components/AboutComponent";
import InterestsComponent from "@/components/InterestsComponent";
import AlertComponent from "@/components/general/AlertComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>User Profile</title>
        <meta name="description" content="User profile " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent userData={userData} />
      <main className={`${styles.main} ${inter.className}`}>
        <AboutComponent userData={userData} />
        <InterestsComponent userData={userData}/>
        <ContactComponent />
      </main>
    </>
  );
}
