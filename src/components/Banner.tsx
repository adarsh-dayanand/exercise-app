import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { COLORS } from '../constants/colors';

import BannerImage from '../assets/images/banner.png';

const Banner = () => {
  return (
    <Box 
      sx={{
        mt: {lg: "212px", xs: "70px"},
        ml: {sm: "50px"}
      }}
      position="relative"
      p="20px"
    >
      <Typography color={COLORS.LIGHT_RED} fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" }}}
        mb="23px" mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Checkout most effective exerices
      </Typography>

      <Button variant="contained" color="error" href='#exercises' sx={{backgroundColor: COLORS.LIGHT_RED, padding: "10px"}}>Explore Exercises</Button>

      <Typography 
        fontWeight={600} 
        color={COLORS.LIGHT_RED}
        fontSize="200px"
        sx={{
          opacity: 0.1,
          display: {lg: 'block', xs: 'none'}
        }}
      >
        Exercises
      </Typography>
      <img src={BannerImage} alt="banner" className='hero-banner-img'/>
    </Box>
  )
}

export default Banner