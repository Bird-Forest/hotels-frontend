"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function getAllList() {
  const response = await fetch("http://localhost:3300/api/hotels");
  if (!response.ok) throw new Error("Unable to fetch list of hotels");
  return response.json();
}

export const getHotel = async (id) => {
  const response = await fetch(`http://localhost:3300/api/hotels/${id}`);
  if (!response.ok) throw new Error("Unable to fetch hotel");
  return response.json();
};

export async function addHotel(formData) {
  // "use server";
  const { imgUrl, name, country, city, adress, tel, website } =
    Object.fromEntries(formData);
  const response = await fetch("http://localhost:3300/api/hotels", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imgUrl, name, country, city, adress, tel, website }),
  });
  const hotel = await response.json();
  // console.log(hotel);
  redirect("/hotels");
  // redirect(`/hotels/${hotel._id}`);
}

export async function updateHotel(formData) {
  // "use server";
  const { imgUrl, name, country, city, adress, tel, website, id } =
    Object.fromEntries(formData);
  const response = await fetch(`http://localhost:3300/api/hotels/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imgUrl, name, country, city, adress, tel, website }),
  });
  const hotel = await response.json();
  console.log(hotel);

  revalidatePath(`/hotels/${hotel.id}`);
  revalidatePath("/hotels", "page");
  redirect("/hotels");
}

export async function removeHotel(id) {
  // "use server";
  await fetch(`http://localhost:3300/api/hotels/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // revalidatePath("/blog");
  redirect("/hotels");
}
