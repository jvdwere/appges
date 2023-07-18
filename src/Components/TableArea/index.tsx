import {
  TableContainer,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Table,
} from "@chakra-ui/react";
import React from "react";
import { Item } from "@/src/Types/Item.1";
import { TableItem } from "../TableItem";

type Props = {
  list: Item[];
};
export const TableA = ({ list }: Props) => {
  return (
    <>
      <TableContainer
        w={"900px"}
        boxShadow="base"
        p="6"
        rounded="md"
        bg="white"
      >
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Receitas/Despesas</TableCaption>
          <Thead>
            <Tr>
              <Th w={"100px"}>Data</Th>
              <Th w={"130px"}>Categoria</Th>
              <Th>Titulo</Th>
              <Th w={"150px"}>
                Valor
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {list?.map((item, index) => (
              <TableItem key={index} item={item}/>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
