import { Button } from "@chakra-ui/button";
import { Img } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";

const Menu = () => {
  return (
    <Flex
      maxWidth={"800px"}
      borderRadius={"50px"}
      width={"100%"}
      p={"10px"}
      direction={"row"}
      justifyContent={"space-between"}
      background={"#ffffff20"}
      border={"1px solid #ffffff20"}
    >
      <Img src="/logo-c-b-600.png" height={"35px"} paddingLeft={5} />
      <Flex
        direction={"row"}
        height={"100%"}
        alignItems={"center"}
        gap={"10px"}
      >
        <Button
          background={"transparent"}
          color={"white"}
          borderRadius={"50px"}
          _hover={{ background: "black" }}
        >
          Product
        </Button>
        <Button
          background={"transparent"}
          color={"white"}
          borderRadius={"50px"}
          _hover={{ background: "black" }}
        >
          Pricing
        </Button>
        <Button
          background={"transparent"}
          color={"white"}
          borderRadius={"50px"}
          _hover={{ background: "black" }}
        >
          About
        </Button>
      </Flex>
      <Button
        background={"#A6FB89"}
        height={"100%"}
        width={"150px"}
        borderRadius={"100px"}
      >
        Contact us
      </Button>
    </Flex>
  );
};

export default Menu;
