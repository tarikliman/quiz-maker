import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import "./Page.css";
import QuestionStarter from "../QuestionStarter";
import { VStack,Card,CardBody, CardHeader } from "@chakra-ui/react";
import QuestionSection from "../QuestionSection/QuestionSection";
import Question from "../QuestionSection/Question";
const Page = () => {

        const questions = [
            {
                number : 1,
                text : "lorem ipsum",
                options : {
                    a : 'dsfdsfsd',
                    b : 'sdfsdgsd',
                    c : 'sdfsdgsdg',
                    d : 'asfsdf'
                }
            },
            {
                number : 2,
                text : "lorem ipsum",
                options : {
                    a : 'dsfdsfsd',
                    b : 'sdfsdgsd',
                    c : 'sdfsdgsdg',
                    d : 'asfsdf'
                }
            },
            {
                number : 3,
                text : "lorem ipsum",
                options : {
                    a : 'dsfdsfsd',
                    b : 'sdfsdgsd',
                    c : 'sdfsdgsdg',
                    d : 'asfsdf'
                }
            },
            {
                number : 4,
                text : "lorem ipsum",
                options : {
                    a : 'dsfdsfsd',
                    b : 'sdfsdgsd',
                    c : 'sdfsdgsdg',
                    d : 'asfsdf'
                }
            }
        ];
    return(
        <Card align='center' maxW='5xl' minW= '5xl' minH = '2xl' >
            <CardHeader>
            <QuestionStarter/>  
            </CardHeader>
            <CardBody>
            <QuestionSection>
                <Question></Question>
            </QuestionSection>
            </CardBody>
        </Card>
    );
}

export default Page;