import {AddIcon} from '@chakra-ui/icons';
import {Button} from "@chakra-ui/react";
const QuestionStarter = (props) => {

    const handleAddQuestion = () => {
        
    }
    return(
        <Button onClick= {handleAddQuestion}variant='ghost'><AddIcon color = 'cyan.900' boxSize={4} /></Button>
    );
}
export default QuestionStarter;