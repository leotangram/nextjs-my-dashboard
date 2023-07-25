import { FC } from 'react'
interface PokemonPageProps {
  params: { id: string }
}

export default function PokemonPage({ params }: PokemonPageProps) {
  return (
    <div>
      <h1>Pokémon {params.id}</h1>
    </div>
  )
}
