import Question from "./Question";
import { Card, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { NameContext } from "../../context/ExamNameContext";
const QuestionSection = (props) => {
  const {name} = useContext(NameContext);
  return (
    <div maxW="4xl" minW="4xl" mt={6}>
      <Heading textTransform='uppercase' align = 'center' size ='md' >{name}</Heading>
      {props.questionData.map((question) => (
        <Question
          key={question.id}
          id={question.id}
          text={question.text}
          options={question.options}
        />
      ))}
    </div>
  );
};

export default QuestionSection;
