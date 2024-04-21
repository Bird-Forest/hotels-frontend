// "use client";
import React from "react";
import styles from "../page.module.css";

export default function FormHotel({ onHotel, hotel }) {
  console.log("I am Server component");

  return (
    <form className={styles.hotelform} action={onHotel}>
      <input
        type="text"
        placeholder="imgUrl"
        required
        name="imgUrl"
        defaultValue={!hotel ? null : hotel.imgUrl}
      />
      <input
        type="text"
        placeholder="name"
        required
        name="name"
        defaultValue={!hotel ? null : hotel.name}
      />
      <input
        type="text"
        placeholder="country"
        required
        name="country"
        defaultValue={!hotel ? null : hotel.country}
      />
      <input
        type="text"
        placeholder="city"
        required
        name="city"
        defaultValue={!hotel ? null : hotel.city}
      />
      <input
        type="text"
        placeholder="adress"
        required
        name="adress"
        defaultValue={!hotel ? null : hotel.adress}
      />
      <input
        type="text"
        placeholder="tel"
        required
        name="tel"
        defaultValue={!hotel ? null : hotel.tel}
      />
      <input
        type="text"
        placeholder="website"
        required
        name="website"
        defaultValue={!hotel ? null : hotel.website}
      />

      <div>
        <input type="submit" value="save" />
      </div>
    </form>
  );
}
