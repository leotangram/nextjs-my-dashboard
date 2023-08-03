import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 5
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addOne(state) {
      state.count++
    },
    substractOne(state) {
      state.count--
    },
    resetCount(state, action: PayloadAction<number>) {
      if (action.payload < 0) action.payload = 0

      state.count = action.payload
    }
  }
})

export const { addOne, substractOne, resetCount } = counterSlice.actions

export default counterSlice.reducer
