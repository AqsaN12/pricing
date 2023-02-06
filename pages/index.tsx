"use client"
import { ChakraProvider } from '@chakra-ui/react'
import Header from './header'
import PricingUI from './pricingUI'
import Features from './feature'
export default function Home () {
  return (
    
    <ChakraProvider>
      <Header/>
      <PricingUI/>
      <Features/>
      
      
    </ChakraProvider>

    

  )}
