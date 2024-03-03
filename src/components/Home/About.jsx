import {Container, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Container id='About'>
      <Typography  className='first-title' marginLeft={20} component='h6' sx={{textAlign:'start'}} variant='h6'>About</Typography>
      <Typography className='second-title' marginTop={3} component='h4' sx={{textAlign:'start'}} variant='h4'>Welcome to Golden Delight</Typography>
      <Typography component='p'>The business of feeding people is the most amazing business in the world and we love to do so. If you wish to experience best food then Golden Delight restaurant is the ultimate choice for you. We provide a variety of Non Veg Dishes and creativity is always on our menu. Get ready to rejuvenate your taste-buds. </Typography>
    </Container>
  )
}

export default About