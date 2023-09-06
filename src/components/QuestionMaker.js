import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Textarea,
  Text,
  HStack,
} from "@chakra-ui/react";

import { CheckIcon} from "@chakra-ui/icons";
import { useState, useRef } from "react";
import OptionMaker from "./OptionMaker";

const QuestionMaker = (props) => {
  const [textareaValue, setTextareaValue] = useState("");
  const actionRef = useRef();

  const handleTextarea = (value) => {
    setTextareaValue(value);
  };
  const finishMaker = () => {
    const optionData = actionRef.current.getData();
    const number = props.numOfQuestions;

    const question = {
      id: number,
      text: textareaValue,
      options: optionData,
    };
    props.addQuestion((prevState) => [...prevState, question]);
    console.log("Question Maker :", question);
  };
 return (
    <Card maxW="4xl" minW="4xl" minH="xsm" mt={5}>
      <CardHeader>
        <HStack mb={4} justify="space-between">
          <Text fontSize='lg' as='b'>Question Text:</Text>
          <div>
            <Button variant="ghost" onClick={() => finishMaker()}>
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
        <OptionMaker ref={actionRef} />
      </CardBody>
    </Card>
  );
};
export default QuestionMaker;
