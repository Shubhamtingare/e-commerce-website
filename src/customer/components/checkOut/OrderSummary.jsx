import React, { useEffect } from 'react'
import AddressCard from '../addressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../state/order/action'
import { useLocation } from 'react-router-dom'

export default function OrderSummary() {
  const dispatch = useDispatch()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const orderId = searchParams.get("order_id")
  const {order} = useSelector(store=>store)

  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[orderId])

  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard address={order.order?.shippingAddress}/>
      </div>
      <div>
      <div className="lg:grid grid-cols-3 relative">
        <div className="col-span-2">
          {order.order?.orderItems.map((item)=><CartItem item={item} />)}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4 pt-3">Price details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10 p-3">
                <div className="flex justify-between pt-3 text-black">
                    <span>Price</span>
                    <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 ">
                    <span>Discount</span>
                    <span className="text-green-600">-₹{order.order?.discount}</span>
                </div>
                <div className="flex justify-between pt-3 ">
                    <span>Delivery Charges</span>
                    <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3  font-bold">
                    <span>Total Amount</span>
                    <span className="text-green-600">₹{order.order?.totalDiscountedPrice}</span>
                </div>

            </div>
            <Button
            className="w-full"
                  variant="contained"
                  sx={{
                    px: "2.5rem",
                    py: ".7rem",
                    bgcolor: "#9155fd",
                    mt: "1rem",
                  }}
                >
                  Check Out
                </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
