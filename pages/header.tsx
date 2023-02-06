"use client"
import { Box,Heading,Text } from '@chakra-ui/react'
import { createHook } from 'async_hooks'

import React from 'react'

export default function Header() {
  return (
 <Box textAlign={{base:"left",md:"left",lg:"center"}} pl="15px" bg="#6B46C1"paddingTop="200px"pb="200px"color="white">
  <Heading>
  Simple pricing for your business
  </Heading>
  
  <Text>
 
<center>
   Plans that are carefully crafted to suit your business.
</center> 
  </Text>
    
 </Box>
  )
}
