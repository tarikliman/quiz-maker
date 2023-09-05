import React, { Fragment } from "react";
import "./Page.css";
import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import QuestionSection from "../QuestionSection/QuestionSection";
import QuestionMaker from "../QuestionMaker";
import { useState } from "react";
const Page = (props) => {
  const [questions, setQuestions] = useState([]);
  console.log("Page :", questions);

  return (
    <Fragment>
      <Card align="center" maxW="5xl" minW="5xl" minH="lg">
        <CardBody>
          <QuestionMaker
            numOfQuestions={questions.length + 1}
            addQuestion={(question) => setQuestions(question)}
          />
        </CardBody>
      </Card>
      <Card align="center" maxW="5xl" minW="5xl" minH="lg">
        <CardHeader>

        </CardHeader>
        <CardBody>
          <QuestionSection questionData={questions} />
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default Page;
