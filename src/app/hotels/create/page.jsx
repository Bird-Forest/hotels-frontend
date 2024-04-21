import { addHotel } from "../../services/actions";
import FormHotel from "../../components/FormHotel";
import React from "react";

export default function CreateHotel() {
  return (
    <div>
      <h1>Create new hotel</h1>
      <FormHotel onHotel={addHotel} />
    </div>
  );
}
