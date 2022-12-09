import React from 'react'
import {Box, Stack, Typography, Button} from "@mui/material"

import Banner from "../assets/images/banner.png"

function HerroBanner() {
  return (
    <Box sx={{
        mt: {lg: "100px", xs: "70px"},
        ml: {sm: "50px"}
    }} position="relative" p="20px"> 
        <Typography color="#ff2625" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700} sx={{
            fontSize: {lg: '44px', xs: "40px"}
        }}>
            Sweat, Smile <br /> And Repeat 
        </Typography>
        <Typography fontSize="24px" lineHeight="35px" mb="10px" sx={{maxWidth: "350px"}}>
            Chechout the most effective exercises 
        </Typography>
        <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor: "#ff2625"}}>Explore Exercises</Button>
        <Typography fontWeight="600" color="error" fontSize="200px" sx={{opacity: 0.2, display: {lg: "block", xs: "none"}}}>
            Exercise
        </Typography>
        <img src={Banner} alt="banner" className='hero-banner-img' />
    </Box>
  )
}

export default HerroBanner