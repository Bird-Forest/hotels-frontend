"use client";
import React from "react";
import { RevolvingDot } from "react-loader-spinner";

export default function LoadingHotels() {
  return (
    <RevolvingDot
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(2px)",
        backgroundColor: "rgba(189, 189, 189, 0.5)",
      }}
      wrapperClass=""
    />
  );
}
