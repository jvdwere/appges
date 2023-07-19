import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export const ColorMap = () => {
  return (
    <>
      <Flex
        maxW={"900px"}
        h={"auto"}
        w={"90%"}
        boxShadow="base"
        p="6"
        rounded="md"
        bg="white"
        justifyContent={"center"}
      >
        <Flex
          justifyContent={"center"}
          display={{
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "flex",
            base: "box",
          }}
        >
          <Grid templateColumns={{base:'repeat(1, 1fr)',xl:'repeat(2, 1fr)',lg:'repeat(2, 1fr)',md:'repeat(2, 1fr)',sm:'repeat(2, 1fr)'}} gap={'10vw'}>
            <GridItem>
              <Heading>Receitas</Heading>
              <Flex align={"center"} justifyContent={"center"} mt={"20px"}>
                <Text fontWeight={"bold"}> Fixa </Text>
                <Box w={"15px"} h={"15px"} bg={"green.400"} ml={"10px"} />
              </Flex>
              <UnorderedList>
                <ListItem>Sálario</ListItem>
                <ListItem>Renda extra</ListItem>
              </UnorderedList>
              <Flex align={"center"} justifyContent={"center"} mt={"20px"}>
                <Text fontWeight={"bold"}> Variável </Text>
                <Box w={"15px"} h={"15px"} bg={"blue.400"} ml={"10px"} />
              </Flex>
              <UnorderedList>
                <ListItem>Bonus</ListItem>
                <ListItem>Dividendos</ListItem>
              </UnorderedList>
            </GridItem>

            <GridItem>
              <Heading>Despesas</Heading>
              <Flex align={"center"} justifyContent={"center"} mt={"20px"}>
                <Text fontWeight={"bold"}> Fixa </Text>
                <Box w={"15px"} h={"15px"} bg={"red.400"} ml={"10px"} />
              </Flex>
              <UnorderedList>
                <ListItem>Aluguel</ListItem>
                <ListItem>Financiamento</ListItem>
              </UnorderedList>
              <Flex align={"center"} justifyContent={"center"} mt={"20px"}>
                <Text textAlign={"center"} fontWeight={"bold"}> Variável </Text>
                <Box w={"15px"} h={"15px"} bg={"orange.400"} ml={"10px"} />
              </Flex>
              <UnorderedList>
                <ListItem>Assinatura</ListItem>
                <ListItem>Alimentação</ListItem>
                <ListItem>Conta</ListItem>
              </UnorderedList>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </>
  );
};
