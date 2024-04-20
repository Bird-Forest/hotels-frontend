import React from "react";
import styles from "../page.module.css";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import Hotel from "../components/Hotel";
import { getAllList } from "../services/options";

export const metadata = {
  title: "Hotels page",
  description: "list of hotels, hotel description",
};

export default async function HotelsPage() {
  const hotels = await getAllList();

  return (
    <div className={styles.hotels}>
      <ul className={styles.list}>
        {hotels.map((hotel) => {
          return (
            <li key={uuidv4()} className={styles.item}>
              <Link href={`/hotels/${hotel._id}`} className={styles.item}>
                <Hotel hotel={hotel} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
