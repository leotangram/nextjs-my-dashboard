import { PokemonGrid } from '@/pokemons'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'Pókemons favoritos'
}

export default async function FavoritesPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokémons favoritos <small className="text-blue-500">Global State</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  )
}
