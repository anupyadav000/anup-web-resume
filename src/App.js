import { Box } from "@chakra-ui/react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Pixel from "./components/Pixel";
import Experience from "./components/Experience";
import Quotes from "./components/Quotes";
import Endorsement from "./components/Endorsement";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      <Hero></Hero>
      <Intro></Intro>
      <Pixel></Pixel>
      <Experience></Experience>
      <Quotes></Quotes>
      <Endorsement></Endorsement>
      <Contact></Contact>
      <Footer></Footer>
    </Box>
  );
}

export default App;
