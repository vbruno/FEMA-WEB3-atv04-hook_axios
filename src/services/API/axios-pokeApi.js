import axios from "axios";

export const axiosPokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
