import axios from "axios";

export const fetchCountries = async () => {
  const res = await axios.get("https://api.first.org/data/v1/countries");
  return Object.values(res.data.data);
};
