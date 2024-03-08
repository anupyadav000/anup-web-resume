import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

function Hero() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      paddingLeft={"10%"}
      paddingTop={"5%"}
      paddingRight={"10%"}
      backgroundColor={"#F2F5F7"}
    >
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Box padding={"2%"}>
          <Link href="https://chakra-ui.com">Anup Yadav</Link>
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-around"
          alignItems={"center"}
          width={{ sm: "100%", lg: "60%" }}
        >
          <Link href="https://chakra-ui.com" padding={"2%"}>
            About ME
          </Link>
          <Link href="https://chakra-ui.com" padding={"2%"}>
            EXPERIENCE
          </Link>
          <Link href="https://chakra-ui.com" padding={"2%"}>
            TESTIMONIALS
          </Link>
          <Link href="https://chakra-ui.com" padding={"2%"}>
            CONTACTS
          </Link>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        paddingTop="20"
        paddingBottom="20"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="left"
        >
          <Text as="b" fontSize="5xl">
            Hi, I am Anup Yadav, a Software Engineer
          </Text>
          <Button
            colorScheme="facebook"
            borderRadius="0"
            width={"max-content"}
            marginTop="10"
            padding="20px 40px 20px 40px"
            fontSize="xl"
          >
            Email me
          </Button>
        </Box>
        <Box
          width={"60%"}
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <Image
            borderRadius="50"
            src="https://media.licdn.com/dms/image/D4D03AQHVazDmSnplbA/profile-displayphoto-shrink_800_800/0/1686335890288?e=1695859200&v=beta&t=uRzIP_eRrnrZJGA34xj_IxisE7hX2VfdiuMPyKriDr0"
            alt="Anup Yadav"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
