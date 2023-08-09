'use client'

import { useAppSelector } from '@/store'
import { PokemonGrid } from './PokemonGrid'
import { NoFavoritePokemons } from './NoFavoritePokemons'

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(state =>
    Object.values(state.pokemons.favorites)
  )

  return favoritePokemons.length ? (
    <PokemonGrid pokemons={favoritePokemons} />
  ) : (
    <NoFavoritePokemons />
  )
}
