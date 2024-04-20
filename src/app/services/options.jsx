// import useSWR from "swr";

export async function getAllList() {
  const response = await fetch("http://localhost:3300/api/hotels");
  if (!response.ok) throw new Error("Unable to fetch list of hotels");
  return response.json();
}

export async function generateStaticParams() {
  const hotels = await fetch("http://localhost:3300/api/hotels").then((res) =>
    res.json()
  );

  return hotels.map((hotel) => ({
    id: hotel._id,
  }));
}

export const getHotel = async (id) => {
  console.log(id);
  const response = await fetch(`http://localhost:3300/api/hotels/${id}`);
  if (!response.ok) throw new Error("Unable to fetch hotel");
  console.log(response);
  return response.json();
};

// const getHotelById = (id) =>
//   fetch(`http://localhost:3300/api/hotels/${id}`).then((res) => res.json());
// console.log(res);

// const url = `http://localhost:3300/api/hotels/${id}`;

// export const fetcher = (url) => fetch(url).then((r) => r.json());

// export function useHotel(id) {
//   const { data, error, isLoading } = useSWR(
//     `http://localhost:3300/api/hotels/${id}`,
//     fetcher
//   );
//   console.log(data);
//   return {
//     hotel: data,
//     isLoading,
//     isError: error,
//   };
// }
