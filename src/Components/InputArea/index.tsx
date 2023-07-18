import React, { useState } from "react";
import { Item } from "@/src/Types/Item";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
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
      <Box w={"900px"} boxShadow="base" p="6" rounded="md" bg="white">
        <Flex justifyContent={"center"}>
          <Box>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              value={dateField}
              onChange={(e) => setDateField(e.target.value)}
              w={"180px"}
            />
          </Box>
          <Box ml={"5px"}>
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
          </Box>
          <Box ml={"5px"}>
            <FormLabel>Titulo</FormLabel>
            <Input
              type="text"
              value={titleField}
              onChange={(e) => setTitleField(e.target.value)}
              w={"200px"}
            />
          </Box>
          <Box ml={"5px"}>
            <FormLabel>Valor</FormLabel>
            <Input
              type="number"
              value={valueField}
              onChange={(e) => setValueField(parseFloat(e.target.value))}
              w={"100px"}
            />
          </Box>
          <Flex align={"end"} ml={"5px"}>
            <Button colorScheme="teal" onClick={handleAddEvent}>
              Adicionar
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
