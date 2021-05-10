import Head from "next/head";
import { Box, Grid } from "@chakra-ui/layout";
import Navbar from "./Navbar";
import { useState } from "react";
import Home from "../pages";


const Layout = ({ children, title = "Allen Roberts" }) => {
    
    
    return (
      <Box height="100%">
        <Head>
          <title>{title}</title>
  
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <style global jsx>{`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div {
            height: 100%;
          }
        `}</style>
        <Grid
          h="100%"
          w="100%"
          gridTemplateColumns="repeat(12, 1fr)"
          gridTemplateRows="repeat(12, 1fr)"
        >

          <Box gridColumn="1/13" gridRow="1/2">
            <Navbar
            
            ></Navbar>
          </Box>
          <Box gridColumn="2/13" gridRow="2/13">
            <Home></Home>
          </Box>
          <Box gridColumn="1/13" gridRow="1/13">
            {children}
          </Box>
        </Grid>
      </Box>
    );
        }
  
  export default Layout;