"use client";
import React from "react";
import Image from "next/image";
import styles from "../../page.module.css";
import useSWR from "swr";
import { usePathname } from "next/navigation";
import getHotelById from "../services/options";

// const Props = {
//   params: {
//     id: string,
//   },
// };

// async function getHotelById(href) {
//   console.log(href);
//   const response = await fetch(`http://localhost:3300/api/hotels/${id}`);
//   if (!response.ok) throw new Error("Unable to fetch posts");
//   return response.json();
// }

export async function generateMetadata() {
  // const post = await getData(id);
  // console.log(post);
  // return { title: hotel.name };
}

export default function HotelCreate() {
  const pathname = usePathname();
  console.log(pathname);
  const { data: hotel, isLoading } = useSWR("hotels", getHotelById(id));
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
