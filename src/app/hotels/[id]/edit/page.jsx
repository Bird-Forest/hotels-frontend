import { getHotel, updateHotel } from "../../../services/actions";
import FormHotel from "../../../components/Hotels/FormHotel";
import styles from "../../../page.module.css";
import React from "react";

export async function generateStaticParams() {
  const hotels = await fetch("http://localhost:3300/api/hotels").then((res) =>
    res.json()
  );

  return hotels.map((hotel) => ({
    id: hotel._id,
  }));
}

export default async function EditHotel({ params }) {
  const { id } = params;
  console.log("EditHotel", id);
  const hotel = await getHotel(id);
  return (
    <div className={styles.editpage}>
      <h1 className={styles.titlepage}>edit hotel</h1>
      <FormHotel hotel={hotel} onHotel={updateHotel} />
    </div>
  );
}
