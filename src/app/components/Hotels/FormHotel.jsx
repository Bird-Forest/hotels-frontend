// "use client";
import React from "react";
import styles from "./FormHotel.module.css";
// import styles from "../page.module.css";

export default function FormHotel({ onHotel, hotel }) {
  console.log("FORM Server component");

  return (
    <form className={styles.formhotel} action={onHotel}>
      <input
        type="text"
        placeholder="imgUrl"
        required
        name="imgUrl"
        defaultValue={!hotel ? null : hotel.imgUrl}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="name"
        required
        name="name"
        defaultValue={!hotel ? null : hotel.name}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="country"
        required
        name="country"
        defaultValue={!hotel ? null : hotel.country}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="city"
        required
        name="city"
        defaultValue={!hotel ? null : hotel.city}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="adress"
        required
        name="adress"
        defaultValue={!hotel ? null : hotel.adress}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="tel"
        required
        name="tel"
        defaultValue={!hotel ? null : hotel.tel}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="website"
        required
        name="website"
        defaultValue={!hotel ? null : hotel.website}
        className={styles.input}
      />
      {/* <input type="hidden" name="id" value={hotel.id} /> */}
      <div className={styles.submit}>
        <input type="submit" value="save" className={styles.save} />
      </div>
    </form>
  );
}
