import React from "react";
import { getHotel, removeHotel } from "../../services/actions";
import Hotel from "@/app/components/Hotel";
import Link from "next/link";

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
    <div>
      <Hotel hotel={hotel} onHotel={removeHotel.bind(null, id)} />
      <Link href={`/blog/${id}/edit`}>edit</Link>
      <div>
        <input type="submit" value="save" />
      </div>
    </div>
  );
}
