import { useState} from "react";
import { Text } from '@chakra-ui/react';
import { NameContext } from "../../context/ExamNameContext";
import './PageHeader.css';
const PageHeader = () => {
    const [examName, setExamName] = useState("Exam Name");
    const [isClicked, setIsClicked] = useState('false');
    


    let newExamName = examName;
    const handleHeading = (newInput) => {
        newExamName = newInput;
    }
    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            setIsClicked('false');
            setExamName(newExamName);
        } 
    }
    return(
        <NameContext.Provider value = {examName}>
         <div align = 'center' className="page-header">
            <Text color='#065666' display = 'inline' onKeyDown={handleKeyDown} onClick= {() => setIsClicked('true')} contentEditable= {isClicked} onInput = {(e) => handleHeading(e.currentTarget.textContent)} fontSize='xl' >{examName}</Text>
        </div>
        </NameContext.Provider>
      
           );
}

export default PageHeader;