import React, { Fragment } from "react";
import "./Page.css";
import { Card, CardBody, CardHeader, Button,  } from "@chakra-ui/react";
import QuestionSection from "../QuestionSection/QuestionSection";
import QuestionMaker from "../QuestionMaker";
import { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import { DownloadIcon } from "@chakra-ui/icons";
const Page = (props) => {
  const [questions, setQuestions] = useState([]);
  const componentRef = useRef();
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
      <Card maxW="5xl" minW="5xl" minH="sm">
        <CardHeader className='exam-ready-header'>
          <div>
            <ReactToPrint
              trigger={() => (
                <Button variant="solid" colorScheme="blue">
                  <DownloadIcon />
                </Button>
              )}
              content={() => componentRef.current}
            />
          </div>
        </CardHeader>
        <CardBody style={{borderTop: "1px solid #A9A9A9"}}>
          <QuestionSection questionData={questions}   ref={componentRef} />
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default Page;
