import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { formatCurrentMonth } from "@/src/helpers/dateFilters";
import { ResumeItem } from "../ResumeItem";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  incomes: number;
  expenses: number;
};

export const InfoArea = ({
  currentMonth,
  onMonthChange,
  incomes,
  expenses,
}: Props) => {
  const handlePrevMonth = () => {
    let [yaer, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(yaer), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [yaer, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(yaer), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <>
      <Box w={"900px"} boxShadow="base" p="6" rounded="md" bg="white">
        <Flex alignItems={"center"}>
          <Flex w={"30%"}>
            <Box
              cursor={"pointer"}
              fontSize={"25px"}
              textAlign={"center"}
              onClick={handlePrevMonth}
            >
              <BiSolidLeftArrow />
            </Box>

            <Text textAlign={"center"} w={"150px"}>
              {formatCurrentMonth(currentMonth)}
            </Text>

            <Box
              cursor={"pointer"}
              fontSize={"25px"}
              textAlign={"center"}
              onClick={handleNextMonth}
            >
              <BiSolidRightArrow />
            </Box>
          </Flex>

          <Flex w={"70%"} justifyContent={"center"}>
            <ResumeItem title={"Receitas"} value={incomes} />
            <ResumeItem title={"Despesas"} value={expenses} />
            <ResumeItem
              title={"Balanço"}
              color={incomes - expenses < 0 ? "red" : "green"}
              value={incomes - expenses}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
