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
    bg = "black"
  >
    <Box gridColumn="1/13" gridRow="1/3" >
      <ProjectsPage></ProjectsPage>
    </Box>
    <Box gridColumn="4/10" gridRow="10/12">
      <Navbar></Navbar>
    </Box>
    </Grid>
    </Box>
)
  }
export default Projects;