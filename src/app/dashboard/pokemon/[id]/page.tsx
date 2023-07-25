import { Pokemon } from '@/pokemons'
import { FC } from 'react'
interface PokemonPageProps {
  params: { id: string }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache' // TODO: cambiar esto en un futuro
  }).then(response => response.json())
  console.log('Se cargó: ', pokemon.name)

  return pokemon
}

export default async function PokemonPage({ params }: PokemonPageProps) {
  const pokemon = await getPokemon(params.id)

  return (
    <div>
      <h1>Pokémon {params.id}</h1>
      <div>{JSON.stringify(pokemon)}</div>
    </div>
  )
}
