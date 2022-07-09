import React, { useState } from 'react';

import classes from './Sidebar.module.scss'
import { useDispatch } from 'react-redux';
import { createOrder } from './../store/orerAction';

const Sidebar = () => {

    const dispatch = useDispatch()

    const [size, setSize] = useState()
    const [toppings, setToppings] = useState()
    const [type, setType] = useState()
    const [user, setUser] = useState()
    const [date, setDate] = useState()
    const [status, setStatus] = useState()
    const [price, setPrice] = useState()
    const [notValid, setNotValid] = useState()

    const handleSubmit = () => {
        const body = {
            "foodsize": Number(size),
            "extra_toppings": [Number(toppings)],
            "food_type": Number(type),
            "user": user,
            "date": date,
            "status": status,
            "price": Number(price),
            "is_favourite": false
        }
        let keys = Object.keys(body)
        let flag = true;
        for (let i = 0; i < keys.length; i++) {
            if (body[keys[i]] === undefined) flag = false;
        }
        if (flag) {
            dispatch(createOrder(body))
            setNotValid(false)
        }
        else setNotValid(true)
    }

    return (
        <div className={classes.container}>
            <h2>Create order</h2>
            <select onChange={(e) => setSize(e.target.selectedOptions[0].id)}>
                <option disabled selected>Food size</option>
                <option id="1">Large</option>
                <option id="2">small</option>
            </select>
            <select onChange={(e) => setToppings(e.target.selectedOptions[0].id)}>
                <option disabled selected>Extra toppings</option>
                <option id="1">ананас</option>
                <option id="2">пеперони</option>
                <option id="3">овощи</option>
                <option id="4">грибы</option>
                <option id="5">колбаса</option>
                <option id="6">сыр</option>
            </select>
            <select onChange={(e) => setType(e.target.selectedOptions[0].id)}>
                <option disabled selected>Food type</option>
                <option id="1">Маргарита</option>
                <option id="2">Дьябло</option>
                <option id="3">4 сыра</option>
                <option id="4">Очень вкусная</option>
                <option id="5">самая Вкусная</option>
            </select>
            <input onChange={(e) => setUser(e.target.value)} placeholder='Username' />
            <input onChange={(e) => setDate(e.target.value)} placeholder='Date' type="date" />
            <select onChange={(e) => setStatus(e.target.value)}>
                <option disabled selected>Status</option>
                <option id="1">Draft</option>
                <option id="2">Ordered</option>
                <option id="3">Processing</option>
                <option id="4">Sent</option>
                <option id="5">Complete</option>
            </select>
            <input onChange={(e) => setPrice(e.target.value)} placeholder='Price' type="number" />
            {notValid && <div style={{ color: 'red' }}>Fill all fields</div>}
            <button onClick={handleSubmit}>Send</button>
        </div>
    );
};

export default Sidebar;