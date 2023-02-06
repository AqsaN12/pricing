import { Box,Flex,HStack,Icon,Text} from '@chakra-ui/react'
import icon1 from './icon1'
import icon2 from './icon2'
import icon3 from './icon3'

import React from 'react'


export default function features() {
  return (
    <Box maxW = {"800px"} m={"auto"} mt="15px"px="50px">
         <Flex direction={{base:"column",lg:"row"}}>
            
            <HStack mb="20px">
                <Icon as = {icon1} />
                <Text>30 days money back Guarantee</Text>

            </HStack>


            <HStack mb="20px">
                <Icon as = {icon2} />
                <Text>No setup fees100% hassle-free</Text>

            </HStack>

            <HStack mb="20px">
                <Icon as = {icon3} />
                <Text>No monthly subscriptionPay once and for all</Text>

            </HStack>
            


            
    
         </Flex>
    </Box>
    
  )
}



