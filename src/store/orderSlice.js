import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    orders: [],
    pagination: {}
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrdersAndPagination(state, action) {
            state.orders = action.payload.results
            state.pagination = action.payload
        },
        addOrder(state, action){
            state.orders.push(action.payload)
        },
        removeOrder(state, action){
            state.orders = state.orders.filter(x => x.id !== action.payload)
        }
    }
})

export default orderSlice.reducer