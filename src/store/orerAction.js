import { api } from './../config';
import { orderSlice } from './orderSlice';
import axios from 'axios'

export const getOrders = () => (dispatch) => {
    axios.get(`${api}/sentry-debug/orders/`)
        .then((res) => dispatch(orderSlice.actions.setOrdersAndPagination(res.data)))
}
export const getPage = (url) => (dispatch) => {
    axios.get(url)
        .then((res) => dispatch(orderSlice.actions.setOrdersAndPagination(res.data)))
}

export const createOrder = (body) => (dispatch) => {
    try {
        axios.post(`${api}/sentry-debug/orders/`, body)
            .then((res) => dispatch(orderSlice.actions.addOrder(res.data)))
    } catch (e) {
        console.log(e)
    }
}
export const deleteOrder = (id) => (dispatch) => {
    axios.delete(`${api}/sentry-debug/orders/${id}/`)
        .then((res) => dispatch(orderSlice.actions.removeOrder(id)))
}

