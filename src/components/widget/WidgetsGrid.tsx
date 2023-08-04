'use client'

import { useAppSelector } from '@/store'
import { SimpleWidget } from './SimpleWidget'
import { IoCafeOutline } from 'react-icons/io5'

export const WidgetsGrid = () => {
  const count = useAppSelector(state => state.counter.count)

  return (
    <div className="flex flex-wrap p-2 gap-2 items-center justify-center">
      <SimpleWidget
        label="Contador"
        title={count}
        subTitlte="Carrito de compras"
        icon={<IoCafeOutline size={50} className="text-blue-500" />}
        href="/dashboard/counter"
      />
    </div>
  )
}
