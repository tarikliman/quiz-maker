import Question from "./Question";
import { Card, HStack, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { NameContext } from "../../context/ExamNameContext";
const QuestionSection = (props) => {
  const name = useContext(NameContext);
  return (
    <Card maxW="4xl" minW="4xl" minH="xsm" mt={6}>
      <Heading>{name}</Heading>
      {props.questionData.map((question) => (
        <Question
          key={question.id}
          id={question.id}
          text={question.text}
          options={question.options}
        />
      ))}
    </Card>
  );
};

export default QuestionSection;
