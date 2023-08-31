import React from "react";
import "./Page.css";
import QuestionStarter from "../QuestionStarter";
import {Card,CardBody, CardHeader } from "@chakra-ui/react";
import QuestionSection from "../QuestionSection/QuestionSection";
import QuestionMaker from "../QuestionMaker";
import { useState } from "react";
const Page = () => {
    const [questions,setQuestions] = useState([]);
    return(
        <Card align='center' maxW='5xl' minW= '5xl' minH = 'lg' >
            <CardHeader>
            <QuestionStarter/>  
            </CardHeader>
            <CardBody>
            <QuestionSection>
                <QuestionMaker setQuestion = {(question) => {setQuestions(question)}}/>
            </QuestionSection>
            </CardBody>
        </Card>
    );
}

export default Page;