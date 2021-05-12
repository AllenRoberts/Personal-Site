import ProjectsPage from "../components/ProjectsPage";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { Box, Grid } from "@chakra-ui/layout";
const Projects = ({ children, title = "Allen Roberts" }) => {
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
    
  >
    <Box gridColumn="1/13" gridRow="1/8"  overflowY="auto" zIndex="10">
      <ProjectsPage></ProjectsPage>
    </Box>
    <Box gridColumn="1/13" gridRow="11/13">
      <Navbar></Navbar>
    </Box>
    </Grid>
    </Box>
)
  }
export default Projects;