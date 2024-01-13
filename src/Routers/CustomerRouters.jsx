import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/homePage/HomePage'
import Navbar from '../customer/components/navigation/Navbar'
import Footer from '../customer/components/footer/Footer'
import Product from '../customer/components/product/Product'
import ProductDetails from '../customer/components/productDetails/ProductDetails'
import Cart from '../customer/components/cart/Cart'
import CheckOut from '../customer/components/checkOut/CheckOut'
import Order from '../customer/orders/Order'
import OrderDetails from '../customer/orders/OrderDetails'

export default function CustomerRouters() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/login' element={<HomePage/>}/>
        <Route path='/register' element={<HomePage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}/>
        <Route path='/product/:productId' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/account/order' element={<Order/>}/>
        <Route path='/account/order/:orderId' element={<OrderDetails/>}/>

      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
