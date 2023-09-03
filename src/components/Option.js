import { Button, Input, InputGroup, InputLeftElement,InputRightElement,Text } from '@chakra-ui/react';
import {  DeleteIcon } from "@chakra-ui/icons";
import { useState } from 'react';
const Option = (props) => {

   /* const handleOption = (value) => {
      props.addOption(
        (prevState) => {
          return [
            ...prevState,
            {
              letter : props.key,
              text : value
            }
          ]
          }
      )
    }
    onChange={(e) =>handleOption(e.target.value)}
    */
    return(
    <InputGroup>
    <InputLeftElement pointerEvents='none'>
      <Text>{props.letter}</Text>
    </InputLeftElement>
    <Input type='text'  placeholder={`Option ${props.letter}`} />
    <InputRightElement >
      <Button colorScheme='blue' variant='ghost'>
      <DeleteIcon onClick={() => props.handleDelete(props.letter)}/>
      </Button>
    </InputRightElement>
  </InputGroup>
    );
}

export default Option;