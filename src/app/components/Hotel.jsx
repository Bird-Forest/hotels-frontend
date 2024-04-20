import React from "react";
import Image from "next/image";
import styles from "../page.module.css";

export default function Hotel({ hotel }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={hotel.imgUrl}
          alt="foto of hotel"
          fill
          style={{
            borderRadius: "16px",
            width: "100%",
          }}
          priority
        />
      </div>
      <h3 className={styles.name}>hotel {hotel.name}</h3>
      <div className={styles.country}>
        <h4>{hotel.country}</h4>
        <h4>{hotel.city}</h4>
      </div>
      <div className={styles.adress}>
        <h4>{hotel.adress}</h4>
        <h4>{hotel.tel}</h4>
      </div>
      <p className={styles.web}>{hotel.website}</p>
    </div>
  );
}
