import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Intro() {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      paddingLeft={"10%"}
      paddingTop={"10%"}
      paddingBottom={"10%"}
      paddingRight={"10%"}
    >
      <Box
        width={{ base: "100%", md: "50%" }}
        fontSize={{ base: "md", md: "2xl" }}
      >
        <Text>― MY BACKGROUND</Text>
        <Text paddingTop={"5%"}>
          {" "}
          I’ve gone through a number of phases in my career, and each of them
          has informed my current work ethos and philosophy. I have excelled in
          a number of software development projects in diverse technologies, and
          believe that my number one asset is my ability to defeat to any
          challenge that is thrown my way.
        </Text>
      </Box>
      <Box
        paddingRight="40"
        fontSize={{ base: "md", md: "2xl" }}
        paddingTop={"50px"}
      >
        <Text>― SKILLS</Text>
        <Text paddingTop={"5%"}>Leadership</Text>
        <Text>Communication</Text>
        <Text>Critical thinking</Text>
        <Text>Software Development</Text>
        <Text>Project management</Text>
      </Box>
    </Box>
  );
}

export default Intro;
