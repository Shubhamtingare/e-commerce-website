import React from "react";
import AddressCard from "../components/addressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function OrderDetails() {
  return (
    <div className=" px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7"> delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid className="space-y-5" container>
        {
            [1,1,1,1,1].map((item)=><Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w=[5rem] h-[5rem] object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                  alt=""
                />
                <div>
                  <p className="font-semibold">Lorem, ipsum dolor.</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color:Pink</span> <span>Size:M</span>
                  </p>
                  <p>Seller: Linaria</p>
                  <p>₹2110</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{color:deepPurple[500]}}>
                  {/* <StarIcon sx={{fontSize:"0.5rem"}} className="px-2 text-sm"/> */}
                  <StarBorderIcon sx={{fontSize:"2.5rem"}} className="px-2 text-5xl"/>
                  <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>)
        }
      </Grid>
    </div>
  );
}
