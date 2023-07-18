import {
  Box,
  Divider,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export const ColorMap = () => {
  return (
    <>
      <Box
        w={"900px"}
        boxShadow="base"
        p="6"
        rounded="md"
        bg="white"
        justifyContent={"center"}
      >
        <Flex justifyContent={"center"}>
          <Flex>
            <Box>
              <Heading>Receitas</Heading>
              <Flex align={"center"}justifyContent={"center"} mt={'20px'}>
                <Text> Fixa </Text>
                <Box w={"15px"} h={"15px"} bg={"green.400"} ml={"10px"} />
              </Flex>
              <UnorderedList>
                <ListItem>Sálario</ListItem>
                <ListItem>Renda extra</ListItem>
              </UnorderedList>
              <Flex align={"center"}justifyContent={"center"} mt={'20px'}>
                <Text> Variável </Text>
                <Box w={"15px"} h={"15px"} bg={"blue.400"} ml={"10px"} />
              </Flex>
              <UnorderedList>
                <ListItem>Bonus</ListItem>
                <ListItem>Dividendos</ListItem>
              </UnorderedList>
            </Box>

            <Divider orientation="vertical" m={"0px  100px"} />

            <Box>
              <Heading>Despesas</Heading>
              <Flex align={"center"} justifyContent={"center"} mt={'20px'}>
                <Text> Fixa </Text>
                <Box w={"15px"} h={"15px"} bg={"red.400"} ml={"10px"} />
              </Flex>
              <UnorderedList>
                <ListItem>Aluguel</ListItem>
                <ListItem>Financiamento</ListItem>
              </UnorderedList>
              <Flex align={"center"} justifyContent={"center"} mt={'20px'}>
                <Text textAlign={"center"}> Variável </Text>
                <Box w={"15px"} h={"15px"} bg={"orange.400"} ml={"10px"} />
              </Flex>
              <UnorderedList>
                <ListItem>Assinatura</ListItem>
                <ListItem>Alimentação</ListItem>
                <ListItem>Conta</ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
