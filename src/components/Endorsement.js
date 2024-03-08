import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

function Endorsement() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      paddingLeft={"10%"}
      paddingTop={"10%"}
      paddingBottom={"10%"}
      backgroundColor={"#F2F5F7"}
      paddingRight={"10%"}
    >
      <Text fontSize={"5xl"} fontWeight={"extrabold"} paddingBottom={"5%"}>
        What they say:
      </Text>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
      >
        <Box>
          <Image
            src="https://media.licdn.com/dms/image/C4E03AQGiyAsGQRTGkw/profile-displayphoto-shrink_400_400/0/1622737121697?e=1698278400&v=beta&t=VuKTxUirupwUowG-Cu8aJA-3qe6iCsUzjz6JysYUWH8"
            alt="friend1"
            borderRadius={"10%"}
          ></Image>
        </Box>
        <Box width={{ base: "100%", md: "60%" }}>
          <Text color={"#565594"} fontSize={"xl"}>
            {" "}
            ― Saurabh Raj
          </Text>
          <Text paddingTop={"5%"} fontSize={"xl"}>
            We've worked on many projects together with Anup at IITD, and he's a
            true asset to any team. He's a team player, but think on her feet
            and never settles for a no. Her ambition and passion for what he
            does is uncanny, and it's been a pleasure to see him progress and
            grow more confident in her professional role over time. I thoroughly
            recommend her for any leadership or project management roles.{" "}
          </Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        paddingTop={"10%"}
      >
        <Box>
          <Image
            src="https://media.licdn.com/dms/image/D5603AQGpaub_7GEQ9w/profile-displayphoto-shrink_400_400/0/1669360679644?e=1698278400&v=beta&t=ag-zzlnyhixjz-i0hSGtnSJVGH9OHfL3ubY48Pedv2M"
            alt="friend2"
            borderRadius={"10%"}
          ></Image>
        </Box>
        <Box width={{ base: "100%", md: "60%" }}>
          <Text color={"#565594"} fontSize={"xl"}>
            ― Himanshu Gaud{" "}
          </Text>
          <Text paddingTop={"5%"} fontSize={"xl"}>
            {" "}
            Anup was my friend at IITD and taught me everything I know about
            project management. As an friend, he never treated me differently
            from other team members – instead, he whole-heartedly embraced my
            ideas and input. He helped me to think about the bigger picture and
            implement strategy into my everyday work, but also showed me how to
            bring people together and unite them for a single goal.{" "}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Endorsement;
