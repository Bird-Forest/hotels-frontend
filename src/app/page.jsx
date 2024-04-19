import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Home page",
  description: "description of the site's activities",
};

export default function Home() {
  return <div className={styles.home}>Wellcom</div>;
}
