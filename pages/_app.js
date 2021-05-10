import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
import Particles from 'react-particles-js';
import particlesConfig from "../config"


const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}
const theme = extendTheme({ colors })
function MyApp({ Component, pageProps }) {
  return (
    
    <ChakraProvider theme={theme}>
       <div style={{ position: 'absolute'}}>
        {/* @ts-ignore */}
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>

      <Component {...pageProps} />
      
    </ChakraProvider>
  );
}

export default MyApp;
