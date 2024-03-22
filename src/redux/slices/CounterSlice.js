import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})

// Action creators are generated for each case reducer function
export const {increment, decrement} = CounterSlice.actions;

// counterslice ko export kr diya
export default CounterSlice.reducer;