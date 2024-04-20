// "use client";
import React from "react";

import { getHotel } from "../../services/options";
import Hotel from "@/app/components/Hotel";
// import useSWR from "swr";
// import { useParams } from "next/navigation";
// import { getHotel } from "../../services/options";
// import { useHotel } from "../../services/options";
// import { fetcher, useHotel } from "../../services/options";

// const Props = {
//   params: {
//     id: string,
//   },
// };

// async function getHotelById(id) {
//   const response = await fetch(`http://localhost:3300/api/hotels/${id}`);
//   if (!response.ok) throw new Error("Unable to fetch posts");
//   console.log(response);
//   return response.json();
// }

// export async function generateMetadata({ id }) {
//   // const post = await getData(id);
//   // console.log(post);
//   // return { title: hotel.name };
// }
// const fetcher = (url) => fetch(url).then((res) => res.json());
// export const fetcher = (url, init) => fetch(url, init).then((r) => r.json());
// export const getHotel = async (id) => {
//   console.log(id);
//   const response = await fetch(`http://localhost:3300/api/hotels/${id}`);
//   if (!response.ok) throw new Error("Unable to fetch hotel");
//   // console.log(response);
//   return response.json();
// };

// export async function getServerSideProps(context) {
//   // context.params содержит параметры маршрута, например, id для динамических страниц
//   const { id } = context.params;

//   // Здесь вы можете использовать id для запроса данных с сервера
//   const data = await fetchDataById(id);

//   // Возвращаемые данные будут переданы в компонент страницы как props
//   return { props: { data } };
// }

// const params = generateStaticParams();
// console.log("params", params);

export async function generateStaticParams() {
  const hotels = await fetch("http://localhost:3300/api/hotels").then((res) =>
    res.json()
  );

  return hotels.map((hotel) => ({
    id: hotel._id,
  }));
}

export default async function HotelById({ params, searchParams }) {
  const { id } = params;
  // const id = params.id;
  console.log("params", params);
  console.log("searchParams", searchParams);

  const hotel = await getHotel(id);
  console.log("HOTEL", hotel);

  return (
    <div>
      <Hotel hotel={hotel} />
    </div>
  );
}
