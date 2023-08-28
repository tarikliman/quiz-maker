import {AddIcon} from '@chakra-ui/icons';
import {Button} from "@chakra-ui/react";
const QuestionStarter = (props) => {

    const handleAddQuestion = () => {
        
    }
    return(
        <Button onClick= {handleAddQuestion} colorScheme='blue' variant='ghost'><AddIcon boxSize={4} /></Button>
    );
}
export default QuestionStarter;