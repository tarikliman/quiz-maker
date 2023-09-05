import { Text, CardBody, CardHeader } from "@chakra-ui/react";
import { Fragment } from "react";
import "./QuestionSection.css";
const Question = ({id, text, options}) => {
  console.log("Question :", id, text);
  return (

    <Fragment>
        <CardHeader pt = {10}>
      <Text fontSize='md'><Text as='b'>{id})</Text> {text}</Text>
      </CardHeader>
      <CardBody pt = {0}>
         {options.map( (option) => {
          return (<Text p={1}> <Text as='b'>{option.letter}) </Text>{option.text}</Text>)
         })}
      </CardBody>
    </Fragment>
    
  );
};
export default Question;
