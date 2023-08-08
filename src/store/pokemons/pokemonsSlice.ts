import { createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemon'

interface PokemonsState {
  [key: string]: SimplePokemon
}

const initialState: PokemonsState = {
  '1': { id: '1', name: 'bulbasaur' }
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {}
})

export const {} = pokemonsSlice.actions

export default pokemonsSlice.reducer
