import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/app/pokemons'

const getPokemons = async (
  limit = 151,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then(response => response.json())

  const pokemons = data.results.map(({ name, url }) => ({
    id: url.split('/').at(-2)!,
    name
  }))

  return pokemons
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons()

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokémons <small>estático</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
