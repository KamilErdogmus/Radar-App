export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "36.268715",
    bl_lng: "25.531566",
    tr_lat: "42.326965",
    tr_lng: "46",
    limit: "300",
  },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};

export const dOptions = {
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};
