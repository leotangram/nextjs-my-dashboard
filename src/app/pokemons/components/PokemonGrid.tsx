import Image from 'next/image'
import { FC } from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import { PokemonCard } from './PokemonCard'

interface PokemonGridProps {
  pokemons: SimplePokemon[]
}

export const PokemonGrid: FC<PokemonGridProps> = ({ pokemons }) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  )
}
