import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Quotes(props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      paddingLeft={"10%"}
      paddingTop={"10%"}
      paddingBottom={"10%"}
      paddingRight={"10%"}
      backgroundColor={"#47467A"}
    >
      <Text
        fontSize={{ base: "xl", md: "3xl" }}
        fontWeight={"extrabold"}
        color={"white"}
        width={{ base: "100%", md: "60%" }}
      >
        “Whenever I am in a difficult situation where there seems to be no way
        out, I think about solar system, stars , galaxies and universe. I
        analyze how big this all is and compare it with the situation i am
        facing and this seems nothing to me,”
      </Text>
      <Text fontSize={"xl"} color={"white"} paddingTop={"2%"}>
        - Idowu Koyenikan
      </Text>
    </Box>
  );
}

export default Quotes;
