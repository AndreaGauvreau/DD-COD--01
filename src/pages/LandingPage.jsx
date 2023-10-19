import { Box, Flex } from "@chakra-ui/layout";
import LeftSide from "../components/LeftSide";
import Menu from "../components/Menu";
import RightSide from "../components/RightSide";

const LandingPage = () => {
  return (
    <>
      <Flex
        background={"#131413"}
        w={"100%"}
        h={"100vh"}
        direction={"column"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={"100px"}
        padding={10}
        position={"relative"}
      >
        <Box
          background={"#A6FB89"}
          height={"200px"}
          width={"100px"}
          position={"absolute"}
          top={"20px"}
          left={"30%"}
          filter={"blur(100px)"}
        />
        <Box
          background={"#A6FB89"}
          height={"200px"}
          width={"100px"}
          position={"absolute"}
          bottom={"20px"}
          right={"30%"}
          filter={"blur(100px)"}
        />
        <Menu />
        <Flex direction={"row"} maxWidth={"1000px"} w={"100%"}>
          <LeftSide />
          <RightSide />
        </Flex>
      </Flex>
    </>
  );
};

export default LandingPage;
