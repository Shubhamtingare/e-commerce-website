import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <Grid className="bg-black text-white text-center mt-10" container sx={{bgcolor:'black' , color:'white' , py:3}}>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'> Company </Typography>
            <Button className='pb-5 w-full' variant='h6' >About</Button>
            <Button className='pb-5 w-full' variant='h6' >Blog</Button>
            <Button className='pb-5 w-full' variant='h6' >Press</Button>
            <Button className='pb-5 w-full' variant='h6' >Jobs</Button>
            <Button className='pb-5 w-full' variant='h6' >Partners</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'> Solutions </Typography>
            <Button className='pb-5 w-full' variant='h6' >Marketting</Button>
            <Button className='pb-5 w-full' variant='h6' >Analytics</Button>
            <Button className='pb-5 w-full' variant='h6' >Commerce</Button>
            <Button className='pb-5 w-full' variant='h6' >Insights</Button>
            <Button className='pb-5 w-full' variant='h6' >Support</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'> Documentation </Typography>
            <Button className='pb-5 w-full' variant='h6' >Guides</Button>
            <Button className='pb-5 w-full' variant='h6' >API Status</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'> Legal </Typography>
            <Button className='pb-5 w-full' variant='h6' >Claim</Button>
            <Button className='pb-5 w-full' variant='h6' >Privacy</Button>
            <Button className='pb-5 w-full' variant='h6' >Terms</Button>
        </Grid>
        <Grid className='pt-20 pb-10' item xs={12}>
            <Typography className='py-2' variant='body2' component='p' align='center'>
                &copy; 2023 My Company. All rights reserved.
            </Typography>
            <Typography variant='body2' component='p' align='center'>
               Made with ❤️ by Shubham Tingare.
            </Typography>
            

        </Grid>
      </Grid>
    </div>
  )
}
