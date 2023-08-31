import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Textarea,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { AddIcon, CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import Option from "./Option";
import { useState } from "react";
const QuestionMaker = (props) => {
  const [textareaValue, setTextareaValue] = useState("");
  const [optionData, setOptionData] = useState([
    {
      letter: "A",
      text: "",
    },
    {
      letter: "B",
      text: "",
    },
    {
      letter: "C",
      text: "",
    }
  ]);

  const createQuestion = () => {
    let question = {
      number: "1",
      text: textareaValue,
      options:optionData
    };
    props.setQuestion((prevState) => {
      return [...prevState, question];
    });
  };

  const fetchOption = (letterFind) => {
    let filteredOption = optionData.filter((opt) => opt.letter === letterFind);
    return filteredOption;
  }

  function handleAddOption() {
    let nextLetter = getNextChar(optionData[optionData.length - 1].letter);
    setOptionData((prevState) => {
      return [...prevState, { letter: nextLetter, text: "" }];
    });
  }

  const handleDeleteOption = (delLetter) => {
    //not finished yet
    let newOptions = optionData.filter((option) => option.letter !== delLetter);
    setOptionData(newOptions);
  };

  const handleTextarea = (value) => {
    setTextareaValue(value);
  };

  function getNextChar(char) {
    return String.fromCharCode(char.charCodeAt(0) + 1);
  }

  return (
    <Card maxW="4xl" minW="4xl" minH="xsm">
      <CardHeader>
        <HStack mb={4} justify="space-between">
          <Text>Question Text:</Text>
          <div>
            <Button variant="ghost">
              <DeleteIcon color="cyan.900" boxSize={5} />
            </Button>
            <Button variant="ghost" onClick={createQuestion()}>
              <CheckIcon color="cyan.900" boxSize={5} />
            </Button>
          </div>
        </HStack>
        <Textarea
          onChange={(e) => handleTextarea(e.target.value)}
          placeholder=""
          height="120px"
          resize={"none"}
        />
      </CardHeader>
      <CardBody>
        <VStack spacing={4}>
          {optionData.map((option) => {
            return (
              <Option
                key={option.letter}
                addOption={(option) => setOptionData(option)}
                handleDelete={handleDeleteOption}
                fetch = {fetchOption}
              />
            );
          })}
          <Button colorScheme="blue" onClick={handleAddOption}>
            <AddIcon />
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
};
export default QuestionMaker;
