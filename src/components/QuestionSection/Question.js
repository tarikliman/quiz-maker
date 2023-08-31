import { Button, Card, CardBody, CardHeader } from '@chakra-ui/react';
import { CheckIcon, DeleteIcon, WarningIcon } from '@chakra-ui/icons'
import './QuestionSection.css';
const Question = (props) => {
    return(
        <Card  maxW='4xl' minW= '4xl' minH = 'xsm'>
 <CardHeader>
    
        {props.number}.{props.text} 
 </CardHeader>
 <CardBody>
    <div>
        {props.Options}
    </div>
    <div align= 'right'>
    <Button variant='ghost'><DeleteIcon color = 'cyan.900' boxSize={5} /></Button>
    <Button variant='ghost'><CheckIcon color = 'cyan.900' boxSize={5} /></Button>
    </div>
   
 </CardBody>
        </Card>
    );
}
export default Question;