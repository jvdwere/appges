import { Item } from "@/src/Types/Item";
import { formatDate } from "@/src/helpers/dateFilters";
import { categories } from "@/src/Data/categories";
import { Tr, Td, Box } from "@chakra-ui/react";

type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  return (
    <>
      <Tr>
        <Td>{formatDate(item.date)}</Td>
        <Td>
          <Box
            display={"inline-block"}
            p={"5px 10px"}
            borderRadius={"5px"}
            bg={categories[item.category].color}
          >
            {categories[item.category].title}
          </Box>
        </Td>
        <Td>{item.title}</Td>
        <Td>
          <Box
            display={"inline-block"}
            p={"5px 10px"}
            borderRadius={"5px"}
            color={categories[item.category].expense ? "red" : "green"}
          >
            R$ {item.value.toFixed(2).toString().replace(".", ",")}
          </Box>
        </Td>
      </Tr>
    </>
  );
};
