'use client'
import { FC, useState } from 'react'

interface CartCounterProps {
  value?: number
}

export const CartCounter: FC<CartCounterProps> = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value)

  const updateCounter = (updater: number) =>
    setCounter(counter => counter + updater)

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex gap-2">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
          onClick={() => updateCounter(-1)}
        >
          -1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
          onClick={() => updateCounter(+1)}
        >
          +1
        </button>
      </div>
    </>
  )
}
