import FrontPage from "../components/FrontPage";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { Box, Grid } from "@chakra-ui/layout";
import ResumePage from "../components/Resume";
const Resume = ({ children, title = "Allen Roberts" }) => {
  return(
  <Box height="100%">
  <Head>
    <title>{title}</title>

    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
  <Grid
    h="100%"
    w="100%"
    gridTemplateColumns="repeat(12, 1fr)"
    gridTemplateRows="repeat(12, 1fr)"
    bg = "black"
    overflowX="hidden"
  >
    <Box h= "75%" gridColumn="1/13" gridRow="1/10" overflowY="auto" >
      <ResumePage></ResumePage>
    </Box>
    <Box gridColumn="1/13" gridRow="10/13" >
      <Navbar></Navbar>
    </Box>
    </Grid>
    </Box>
)
  }
export default Resume;