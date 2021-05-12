import { Box, ChakraProvider, CSSReset } from "@chakra-ui/react";
import Particles from 'react-particles-js';
import particlesConfig from "../config";
import "@fontsource/share-tech-mono";


function MyApp({ Component, pageProps }) {
  return (
    
    <ChakraProvider>
      <CSSReset />
      <style global jsx>{`
    html,
    body,
    body > div:first-child,
    div#__next,
    div#__next > div {
      height: 100%;
    }
    #__next {
      height: 100%;
    }
    body {
      height: 100%;
    }
    
    
    
  `}</style>
      <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <Box h="100%" w="100%" bg="black" textColor="#00b3ff" fontFamily="Share Tech Mono">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
