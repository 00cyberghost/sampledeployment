import React from 'react'
import {Stack, Card,CardContent,Typography } from '@mui/material'
import { CustomStackFullWidth } from "../../styled-components/CustomStyles.style";
import CustomImageContainer from "../CustomImageContainer";


import group1 from "./assets/gr.jpg"
import group2 from "./assets/realtime.jpg"
import group3 from "./assets/orderdelivered.jpg"

const HowItWorks = () => {
    return(   
        <CustomStackFullWidth pt="30px" pb="60px" sx={{background: "linear-gradient(112.54deg, rgba(255, 255, 255, 0.2) 0%, rgba(153, 245, 202, 0.2) 33.19%, rgba(3, 157, 85, 0.2) 66.37%, rgba(255, 255, 255, 0.2) 99.56%)"}}>
          <Stack direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={0.5}
          flexWrap="wrap">
            <Typography variant='h3'>Here is How it Works:</Typography>
          </Stack>

          <Stack direction="row" mt="1.5rem" flexWrap="wrap" alignItems="center" justifyContent="center" spacing={2.5}>
            <Card sx={{background:"transparent", boxShadow: "none"}}>
                <CardContent  sx={{paddingBottom: "15px", textAlign: "center"}}>
                    <Typography variant='h6' sx={{fontSize: "20px !important"}}>Select Your Family Groceries</Typography>
                    <Typography color="#9CA7B0" fontWeight="500" variant='caption'>From 30000+ items at local stores in Jamacia</Typography>
                </CardContent>
                <CustomImageContainer
                src={group1.src}
                alt={"Group 1"}
                height="200px"
                objectfit="contain"
              />
            </Card>
            <Card sx={{background:"transparent",boxShadow: "none"}}>
                <CardContent  sx={{paddingBottom: "15px", textAlign: "center"}}>
                    <Typography variant='h6' sx={{fontSize: "20px !important"}}>Sit Back and Relax</Typography>
                    <Typography color="#9CA7B0" fontWeight="500"  variant='caption'>A personal shopper in shops for your loved ones</Typography>
                </CardContent>
                <CustomImageContainer
                src={group2.src}
                alt={"Group 1"}
                height="200px"
                objectfit="contain"
              />
            </Card>
            <Card sx={{background:"transparent",boxShadow: "none"}}>
                <CardContent  sx={{paddingBottom: "15px", textAlign: "center"}}>
                    <Typography variant='h6' sx={{fontSize: "20px !important"}}>They Get Same-Day Delivery</Typography>
                    <Typography color="#9CA7B0" fontWeight="500" variant='caption'>We deliver to your loved ones home</Typography>
                </CardContent>
                <CustomImageContainer
                src={group3.src}
                alt={"Group 1"}
                height="200px"
                objectfit="contain"
              />
            </Card>
          </Stack>
        </CustomStackFullWidth> 
    );
}

export default HowItWorks;