import { useEffect } from "react";
import { Container } from "./styles";

import { axiosPokeApi } from "../../services/API/axios-pokeApi";
import { useAxios } from "../../hooks/useAxios";

export function Home() {
  const [pokemonList, loading, error] = useAxios({
    axiosInstance: axiosPokeApi,
    method: "get",
    url: "pokemon",
  });

  useEffect(() => {
    console.log(pokemonList.results);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  return (
    <Container>
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList.results.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </Container>
  );
}
