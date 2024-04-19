import React from "react";

export async function generateMetadata({ id }) {
  const post = await getData(id);
  console.log(post);
  return { title: post.title };
}

export default function Hotel({ id }) {
  return <div>Hotel {id}</div>;
}
