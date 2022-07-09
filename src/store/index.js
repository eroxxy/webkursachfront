import { combineReducers, configureStore } from "@reduxjs/toolkit";
import orderSlice from './orderSlice';

const rootReducer = combineReducers({
    order: orderSlice
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}
