"use client"
import icon from './icon'
import { Box,Flex,Text,Heading ,Button,HStack,Icon} from '@chakra-ui/react'

import React from 'react'

export default function pricingUI() {
  return (
    <Box mx={{base:"20px",lg:"auto"}} maxW={"950px"} m={"auto"}mt={"-150"} bg="white"borderRadius={"16px"} overflow="hidden">
                      
        <Flex direction={{base:"column",md:"column",lg:"row",}}>

            <Box bg={"#cbb8cc"}p="40px"textAlign={"center"}>
    
    <Text fontSize={"24px"}fontWeight={"bold"}>Premium PRO</Text>
    <Heading fontSize={"60px"}>$329</Heading>
    <Text>billed just once</Text>
    
    <Button mt={"15px"} w={"282px"} color={"#F7FAFC"}bg={"#805AD5"}>Get Started</Button>
            </Box>

            <Box mt={"50px"}ml={"25px"}pr="15px">
      <Text mb={"10px"}>
        Access these features when you get this pricing package for your business.
        </Text>
        <HStack mb={"15px"}>
        <Icon as={icon}/>
            <Text >International calling and messaging API</Text>
           
        </HStack>
        
        <HStack mb={"15px"}>
        <Icon as={icon}/>
            <Text >Additional phone numbers</Text>
           
        </HStack>
        
        <HStack mb={"15px"}>
        <Icon as={icon}/>
            <Text >Automated messages via Zapier</Text>
           
        </HStack>
    
        <HStack mb={"15px"}>
        <Icon as={icon}/>
            <Text >24/7 support and consulting</Text>
           
        </HStack>
        
        
        
        


            </Box>

        </Flex>
    </Box>
  )
}
