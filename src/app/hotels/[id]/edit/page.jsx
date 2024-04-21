import { getHotel, updateHotel } from "../../../services/actions";
import FormHotel from "../../../components/FormHotel";
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
  const hotel = await getHotel(id);
  return (
    <div>
      <h1>Create new hotel</h1>
      <FormHotel hotel={hotel} onHotel={updateHotel} />
    </div>
  );
}
