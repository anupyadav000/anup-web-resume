import { Box, Button, Image, Input, Text, Textarea } from "@chakra-ui/react";
import React from "react";

function Contact() {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      paddingLeft={"10%"}
      paddingTop={"10%"}
      paddingRight={"10%"}
      paddingBottom={"10%"}
      justifyContent={"space-between"}
    >
      <Box width={{ base: "100%", md: "40%" }}>
        <Text fontSize={{ base: "3xl", md: "7xl" }} fontWeight={"medium"}>
          Let's talk
        </Text>
        <Text marginTop={"5%"}>Name</Text>
        <Input
          type="text"
          placeholder="Your name"
          borderRadius={"0"}
          backgroundColor={"#F1F1F1"}
        ></Input>
        <Text marginTop={"5%"}>Your email*</Text>
        <Input
          type="text"
          placeholder="Your email address"
          borderRadius={"0"}
          backgroundColor={"#F1F1F1"}
        ></Input>
        <Text marginTop={"5%"}>Message</Text>
        <Textarea
          placeholder="Enter your message"
          borderRadius={"0"}
          backgroundColor={"#F1F1F1"}
        ></Textarea>
        <Button
          colorScheme="facebook"
          borderRadius={"0"}
          padding={"30px 40px 30px 40px"}
          fontSize={"xl"}
          marginTop={"10%"}
        >
          Submit
        </Button>
      </Box>
      <Box>
        <Image
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=688,fit=crop/brookeoq9pa/Mask-YD00QglgElSQ0EKB.png"
          alt="friends"
          borderRadius={"10%"}
        ></Image>
      </Box>
    </Box>
  );
}

export default Contact;
