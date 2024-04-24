import React from "react";
import { getHotel, removeHotel } from "../../services/actions";
import Hotel from "../../components/Hotels/Hotel";
import Link from "next/link";
import styles from "../../page.module.css";

export async function generateStaticParams() {
  const hotels = await fetch("http://localhost:3300/api/hotels").then((res) =>
    res.json()
  );

  return hotels.map((hotel) => ({
    id: hotel._id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = params;
  const hotel = await getHotel(id);
  return { title: hotel.name };
}

export default async function HotelById({ params }) {
  const { id } = params;
  const hotel = await getHotel(id);

  return (
    <div className={styles.idpage}>
      <Hotel hotel={hotel} />
      <div className={styles.wrapbtn}>
        <Link href={`/hotels/${id}/edit`} className={styles.btnid}>
          edit
        </Link>
        <p className={styles.textor}>or</p>
        <form action={removeHotel.bind(null, id)} className={styles.btnid}>
          <input type="submit" value="delete" className={styles.btnid} />
        </form>
      </div>
    </div>
  );
}
