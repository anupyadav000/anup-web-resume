import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Experience() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      paddingLeft={"10%"}
      paddingTop={"10%"}
      paddingBottom={"10%"}
      paddingRight={"10%"}
      backgroundColor={"#F2F5F7"}
    >
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        paddingTop={"5%"}
      >
        <Text fontSize={"xl"} color={"#565594"}>
          ― WORK EXPERIENCE
        </Text>
        <Box width={{ base: "100%", md: "60%" }}>
          <Box>
            <Text fontSize={"2xl"}>Software Engineer</Text>
            <Text fontSize={"xl"} paddingTop={"5"}>
              Razorpay Software Private Ltd. / July 2022 - Present
            </Text>
            <Text fontSize={"xl"} paddingTop={"10"}>
              working on automating stuffs and solving customer problems to
              increase revenue and CR ...
            </Text>
          </Box>
          <Box paddingTop={"10"}>
            <Text fontSize={"2xl"}>Software Engineer Intern</Text>
            <Text fontSize={"xl"} paddingTop={"5"}>
              Blitz (Previously Grow Simplee) / May 2022 - July 2022
            </Text>
            <Text fontSize={"xl"} paddingTop={"10"}>
              Implemented a new shipping service to increase the customer
              satisfaction and conversion{" "}
            </Text>
          </Box>
          <Box paddingTop={"10"}>
            <Text fontSize={"2xl"}>Software Engineer Intern</Text>
            <Text fontSize={"xl"} paddingTop={"5"}>
              Filo / Jan 2022 - Mar 2022
            </Text>
            <Text fontSize={"xl"} paddingTop={"10"}>
              Scraped websites and books to create content for customers to
              increase satisfaction
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        paddingTop={"10%"}
      >
        <Text fontSize={"xl"} color={"#565594"}>
          ― EDUCATION
        </Text>
        <Box width={{ base: "100%", md: "60%" }}>
          <Box>
            <Text fontSize={"2xl"}>India Institute of Delhi (IITD)</Text>
            <Text fontSize={"xl"} paddingTop={"3"}>
              Bachelor's degree, Delhi, India / 2018 - 2022
            </Text>
          </Box>
          <Box paddingTop={"10"}>
            <Text fontSize={"2xl"}>Senior Secondary School</Text>
            <Text fontSize={"xl"} paddingTop={"3"}>
              Aastha Academy Senior Secondary School, Sikar , Rajasthan / 2016 -
              2018
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;
