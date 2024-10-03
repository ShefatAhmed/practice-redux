import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
    count: number
}
const initialState: CounterState = { count: 0 }

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count = state.count + 1
        },
        decrement: (state) => {
            state.count = state.count - 1
        },
        incrementByValue: (state, actions) => {
            state.count = state.count + actions.payload.value
        }
    }
})

export const { increment, decrement, incrementByValue } = counterSlice.actions

export default counterSlice.reducer