"use client";

import React from "react";

export default function ErrorPage({ error }) {
  return <div> Oooops!!! {error.message}</div>;
}
