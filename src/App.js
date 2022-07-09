import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import Header from './header/Header';
import Order from './order/Order';
import { getOrders } from './store/orerAction';
import Sidebar from './sidebar/Sidebar';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrders())
  }, [])

  return (
    <div className="App">
      <Header />
      <div style={{display: 'flex', gap: '30px'}}>
        <Sidebar />
        <Routes>
          <Route path="/orders" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
