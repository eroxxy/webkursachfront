import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillDelete, AiOutlineSortAscending, AiOutlineSortDescending, AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

import classes from './Order.module.scss'
import { orderSlice } from './../store/orderSlice';
import { deleteOrder } from '../store/orerAction';

import { getPage } from '../store/orerAction';

const Order = () => {

    const dispatch = useDispatch()

    const orders = useSelector(state => state.order.orders)
    const pagination = useSelector(state => state.order.pagination)

    const [sort, setSort] = useState()
    const [sorted, setSorted] = useState([])

    useEffect(() => {
        if (orders.length) setSorted(orders)
    }, [orders])

    useEffect(() => {
        let temp = [...orders]
        if (sort) {
            temp.sort((a, b) => a.user.localeCompare(b.user))
            setSorted(temp)
        }
        else if (sort !== undefined) {
            temp.sort((a, b) => b.user.localeCompare(a.user))
            setSorted(temp)
        }
    }, [sort])

    const changeSort = () => {
        if (sort) setSort(false)
        else setSort(true)
    }

    const handleDelete = (id) => {
        dispatch(deleteOrder(id))
    }

    return (
        <div className={classes.container}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>Sort by username: <button onClick={changeSort}>{sort ? <AiOutlineSortAscending /> : <AiOutlineSortDescending />}</button></div>
                <div>
                    <button onClick={() => dispatch(getPage(pagination.previous))} disabled={pagination.previous === null ? true : false}><AiOutlineArrowLeft /></button>
                    <button onClick={() => dispatch(getPage(pagination.next))} disabled={pagination.next === null ? true : false}><AiOutlineArrowRight /></button>
                </div>
            </div>
            <div className={classes.main}>
                {sorted.map(x =>
                    <div key={x.id} className={classes.order}>
                        <div>
                            <span>Size: {x.foodsize}</span>
                            {x.extra_toppings.length ? <span>Toppings: {x.extra_toppings.join(',')}</span> : <></>}
                            <span>Type: {x.food_type}</span>
                            <span>Username: {x.user}</span>
                            <span>Date: {x.date}</span>
                            <span>Status: {x.status}</span>
                            <span>Price: {x.price}</span>
                        </div>
                        <button onClick={() => handleDelete(x.id)} className={classes.delete}>
                            <AiFillDelete />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Order;