'use client'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  addOne,
  initCounterState,
  resetCount,
  substractOne
} from '@/store/counter/counterSlice'
import { FC, useEffect } from 'react'

interface CartCounterProps {
  value?: number
}

export const CartCounter: FC<CartCounterProps> = ({ value = 0 }) => {
  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initCounterState(value))
  }, [dispatch, value])

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex gap-2">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
          onClick={() => dispatch(substractOne())}
        >
          -1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
      </div>
    </>
  )
}
