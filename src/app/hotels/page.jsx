import React from "react";
import styles from "../page.module.css";
import HotelsList from "../components/HotelsList";
import Link from "next/link";
import Hotel from "../components/Hotel";
import Image from "next/image";

export const metadata = {
  title: "Hotels page",
  description: "list of hotels, hotel description",
};

async function getAllList() {
  const response = await fetch("http://localhost:3300/api/hotels");
  if (!response.ok) throw new Error("Unable to fetch posts");
  return response.json();
}

export default async function HotelsPage() {
  const hotels = await getAllList();
  // console.log(hotels);
  return (
    <div className={styles.hotels}>
      <ul className={styles.list}>
        {hotels.map((hotel) => {
          return (
            <li key={hotel._id} className={styles.item}>
              <Link href={`/hotels/${hotel._id}`} className={styles.card}>
                <div className={styles.image}>
                  <Image
                    src={hotel.imgUrl}
                    alt="foto of hotel"
                    // width={300}
                    // height={200}
                    fill
                    // sizes="(min-width: 320px) 280px"
                    style={{
                      borderRadius: "16px",
                      width: "100%",
                      // height: "auto",
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
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
