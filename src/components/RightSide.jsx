import { Img } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import BlurObject from "./BlurObject";

const RightSide = () => {
  return (
    <>
      <Flex w={"50%"} justify={"center"} position={"relative"}>
        <Img src="/buste-antique.png" height={"300px"} zIndex={1} />
        <Box
          background={"#A6FB89"}
          height={"260px"}
          width={"260px"}
          borderRadius={"50%"}
          position={"absolute"}
          top={"35%"}
          left={"50%"}
          transform={"translate(-50%,-50%)"}
        />
        <BlurObject h={"100px"} w={"100px"} top={"50px"} left={"10%"} />
        <BlurObject h={"50px"} w={"50px"} top={"40px"} left={"70%"} />
        <BlurObject h={"50px"} w={"50px"} top={"50%"} left={"60%"} />
      </Flex>
    </>
  );
};

export default RightSide;
