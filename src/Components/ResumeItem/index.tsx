import { Box, Flex, Heading, Text } from "@chakra-ui/react";

type Props = {
  title: string;
  value: number;
  color?: string;
};

export const ResumeItem = ({ title, value, color }: Props) => {


  return (
    <>
      <Box ml="25px" flex={"1"}>
        <Text
          textAlign={"center"}
          fontWeight={"bold"}
          color={"#888"}
          marginBottom={"5px"}
        >
          {title}
        </Text>
        <Text color={color ?? "black"} textAlign={"center"} fontWeight={"bold"}>
          R$ {value.toFixed(2).toString().replace(".", ",")}
        </Text>
      </Box>
    </>
  );
};
