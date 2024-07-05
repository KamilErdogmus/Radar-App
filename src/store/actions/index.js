import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "./../../constants/index";

const getFlights = createAsyncThunk("flights/getFlights", async () => {
  const response = await axios.request(options);
  //*dizi içerisindeki işimize yarayan verileri alıp yeni diziye çevirdik
  const formatted = response.data.aircraft.map((item) => ({
    id: item[0],
    code: item[1],
    lat: item[2],
    long: item[3],
  }));
  //*Aksiyonun payloadını return ettik
  return formatted;
});
export default getFlights;
