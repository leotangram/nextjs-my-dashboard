'use client'

import { FC, PropsWithChildren, useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '.'
import { setFavoritePokemons } from './pokemons/pokemonsSlice'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem('favorite-pokemons') ?? '{}'
    )

    store.dispatch(setFavoritePokemons(favorites))
  }, [])

  return <Provider store={store}>{children}</Provider>
}
