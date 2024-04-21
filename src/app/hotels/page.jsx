import React from "react";
import styles from "../page.module.css";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import Hotel from "../components/Hotel";
import { getAllList } from "../services/actions";
import { revalidatePath } from "next/cache";

export const metadata = {
  title: "Hotels page",
  description: "list of hotels, hotel description",
};

revalidatePath("/hotels", "page");

export default async function HotelsPage() {
  const hotels = await getAllList();

  return (
    <div className={styles.hotels}>
      <Link href="/hotels/create" className={styles.create}>
        Add new hotel
      </Link>
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
