import { Box } from "@chakra-ui/layout";

const BlurObject = ({ top = "0px", left = "0px", w = "50px", h = "50px" }) => {
  return (
    <Box
      zIndex={2}
      background={"#ffffff10"}
      height={h}
      width={w}
      position={"absolute"}
      top={top}
      left={left}
      borderRadius={"50%"}
      border={"1px solid #ffffff70"}
      backdropFilter={"blur(10px)"}
    />
  );
};

export default BlurObject;
