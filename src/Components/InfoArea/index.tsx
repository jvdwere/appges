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
          alignItems={"center"}
          display={{
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "flex",
            base: "box",
          }}
          w={"90vw"}
        >
          <Flex
            maxW={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            marginBottom={"10px"}
          >
            <Flex
              cursor={"pointer"}
              fontSize={"25px"}
              onClick={handlePrevMonth}
            >
              <BiSolidLeftArrow />
            </Flex>

            <Text textAlign={"center"} fontWeight={"bold"} w={"150px"}>
              {formatCurrentMonth(currentMonth)}
            </Text>

            <Flex
              cursor={"pointer"}
              fontSize={"25px"}
              onClick={handleNextMonth}
            >
              <BiSolidRightArrow />
            </Flex>
          </Flex>

          <Flex w={"70%"}>
            <ResumeItem title={"Receitas"} value={incomes} />
            <ResumeItem title={"Despesas"} value={expenses} />
            <ResumeItem
              title={"Balanço"}
              color={incomes - expenses < 0 ? "red" : "green"}
              value={incomes - expenses}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
