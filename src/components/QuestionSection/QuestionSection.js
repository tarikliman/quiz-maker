import Question from "./Question";
import { Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { NameContext } from "../../context/ExamNameContext";
import React from "react";
const QuestionSection = React.forwardRef((props,ref) => {
  const {name} = useContext(NameContext);
  return (
    <div ref={ref} maxW="4xl" minW="4xl" style ={{marginTop : '16px'}} >
      <Heading textTransform='uppercase' align = 'center' size ='md' >{name}</Heading>
      <div style ={{paddingLeft : '32px'}}>
      {props.questionData.map((question) => (
        <Question
          key={question.id}
          id={question.id}
          text={question.text}
          options={question.options}
        />
      ))}
      </div>
     
    </div>
  );
});

export default QuestionSection;
