import React, { useState } from "react";
import { Item } from "@/src/Types/Item";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Select,
} from "@chakra-ui/react";

import { categories } from "@/src/Data/categories";
import { newDateAdjusted } from "@/src/helpers/dateFilters";

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push("Data inválida!");
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push("Categoria inválida!");
    }
    if (titleField === "") {
      errors.push("Título vazio!");
    }
    if (valueField <= 0) {
      errors.push("Valor inválido!");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: newDateAdjusted(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
      });
      clearFields();
    }
  };
  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };
  return (
    <>
      <Flex
        maxW={"900px"}
        w={"90%"}
        boxShadow="base"
        p="6"
        rounded="md"
        bg="white"
        justifyContent={"center"}
      >
        <Flex justifyContent={"center"} w={"90vw"}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              xl: "repeat(5, 1fr)",
              lg: "repeat(5, 1fr)",
              md: "repeat(3, 1fr)",
              sm: "repeat(2, 1fr)",
            }}
            gap={2}
          >
            <GridItem>
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                value={dateField}
                onChange={(e) => setDateField(e.target.value)}
                w={"180px"}
              />
            </GridItem>
            <GridItem ml={"5px"}>
              <FormLabel>Categoria</FormLabel>
              <Select
                value={categoryField}
                onChange={(e) => setCategoryField(e.target.value)}
                w={"200px"}
              >
                <>
                  <option></option>
                  {categoryKeys.map((key, index) => (
                    <option key={index} value={key}>
                      {categories[key].title}
                    </option>
                  ))}
                </>
              </Select>
            </GridItem>
            <GridItem ml={"5px"}>
              <FormLabel>Titulo</FormLabel>
              <Input
                type="text"
                value={titleField}
                onChange={(e) => setTitleField(e.target.value)}
                w={"200px"}
              />
            </GridItem>
            <GridItem ml={"5px"}>
              <Flex>
                <Box>
                  <FormLabel>Valor</FormLabel>
                  <Input
                    type="number"
                    value={valueField}
                    onChange={(e) => setValueField(parseFloat(e.target.value))}
                    w={"100px"}
                  />
                </Box>
                <Flex alignItems={"end"} ml="8px">
                  <Button colorScheme="teal" onClick={handleAddEvent}>
                    Adicionar
                  </Button>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </>
  );
};
