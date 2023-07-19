"use client";
import { items } from "@/src/Data/items";
import { categories } from "@/src/Data/categories";
import { Category } from "@/src/Types/Category";
import { Item } from "@/src/Types/Item.1";
import { getCurrentMonth, filterListByMonth } from "@/src/helpers/dateFilters";
import { TableA } from "@/src/Components/TableArea";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { InfoArea } from "@/src/Components/InfoArea";
import { InputArea } from "@/src/Components/InputArea";
import { ColorMap } from "@/src/Components/ColorMap";

export default function Finance() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [incomes, setIncomes] = useState(0);
  const [expenses, setExpenses] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCont = 0;
    let expenseCont = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCont += filteredList[i].value;
      } else {
        incomeCont += filteredList[i].value;
      }
    }

    setIncomes(incomeCont);
    setExpenses(expenseCont);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };

  return (
    <>
      <Box>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Heading mt="10vh" color={"white"}>
            Controle financeiro
          </Heading>
        </Flex>

        <Flex justifyContent={"center"} mt="25px">
          <InfoArea
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            incomes={incomes}
            expenses={expenses}
          />
        </Flex>

        <Flex justifyContent={"center"} mt="5px">
          <InputArea onAdd={handleAddItem} />
        </Flex>
        
        <Flex justifyContent={"center"} mt={"25px"}>
          <TableA list={filteredList} />
        </Flex>
        <Flex justifyContent={"center"} mt="25px">
          <ColorMap />
        </Flex>
      </Box>
    </>
  );
}
