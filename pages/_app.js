import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Particles from 'react-particles-js';
import particlesConfig from "../config"


function MyApp({ Component, pageProps }) {
  return (
    
    <ChakraProvider>
      <CSSReset />
      <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
