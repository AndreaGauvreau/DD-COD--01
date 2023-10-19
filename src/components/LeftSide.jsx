import { Button } from "@chakra-ui/button";
import { Img } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Flex, Text } from "@chakra-ui/layout";
import { colors } from "../common/constant";

const LeftSide = () => {
  return (
    <>
      <Flex flexDir={"column"} width={"50%"} gap={"20px"}>
        <Text
          lineHeight={"1"}
          align={"left"}
          fontWeight={800}
          color={"white"}
          fontSize={"5xl"}
        >
          Word of Mouth Unleashed
        </Text>
        <Text color={"#FFFFFF80"} align={"left"} fontSize={"md"}>
          Our transparent pricing makes it seasy to find a plan <br></br>That
          works within your financial contraints
        </Text>
        <Flex direction={"row"} alignItems={"center"} gap={"10px"}>
          <Input
            placeholder="Enter work email"
            size="lg"
            color={"#FFFFFF40"}
            borderRadius={"50px"}
            borderColor={"#FFFFFF40"}
          />
          <Button
            background={colors.green}
            p={"10px"}
            borderRadius={"40px"}
            width={"40%"}
            height={"100%"}
            black={colors.green}
            boxShadow={`0px 0px 20px -10px ${colors.green}`}
          >
            Start Now !
          </Button>
        </Flex>
        <Flex direction={"row"} wrap={"wrap"} gap={"20px"} opacity={0.4}>
          <Img src="/logo-c-b-600.png" height={"35px"} />
          <Img src="/logo-c-b-600.png" height={"35px"} />
          <Img src="/logo-c-b-600.png" height={"35px"} />
          <Img src="/logo-c-b-600.png" height={"35px"} />
          <Img src="/logo-c-b-600.png" height={"35px"} />
          <Img src="/logo-c-b-600.png" height={"35px"} />
        </Flex>
      </Flex>
    </>
  );
};

export default LeftSide;
