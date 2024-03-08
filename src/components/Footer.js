import { Box, Text, Link } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      paddingLeft={"10%"}
      paddingTop={"10%"}
      paddingRight={"10%"}
      paddingBottom={"10%"}
      justifyContent={"space-between"}
      backgroundColor={"#565594"}
      color={"white"}
    >
      <Box fontSize={"5xl"} fontWeight={"bold"}>
        Brooke R.
      </Box>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        width={"40%"}
        fontSize={"xl"}
      >
        <Box display="flex" flexDirection="column">
          <Text>― SOCIALS</Text>
          <Link
            href="https://chakra-ui.com"
            isExternal
            textDecoration={"underline"}
          >
            Linkedin
          </Link>
          <Link
            href="https://chakra-ui.com"
            isExternal
            textDecoration={"underline"}
          >
            Facebook
          </Link>
          <Link
            href="https://chakra-ui.com"
            isExternal
            textDecoration={"underline"}
          >
            Twitter
          </Link>
        </Box>
        <Box display="flex" flexDirection="column">
          <Text>― CONTACTS</Text>
          <Link
            href="https://chakra-ui.com"
            isExternal
            paddingTop={"20%"}
            textDecoration={"underline"}
          >
            anupayadav20177@gmail.com
          </Link>
          <Link
            href="https://chakra-ui.com"
            isExternal
            textDecoration={"underline"}
          >
            123-123-1234
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
