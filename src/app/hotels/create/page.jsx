import { addHotel } from "../../services/actions";
import FormHotel from "../../components/Hotels/FormHotel";
import styles from "../../page.module.css";
import React from "react";

export default function CreateHotel() {
  return (
    <div className={styles.createpage}>
      <h1 className={styles.titlepage}>create hotel</h1>
      <FormHotel onHotel={addHotel} />
    </div>
  );
}
