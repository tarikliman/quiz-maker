import { Button, Input, InputGroup, InputLeftElement,InputRightElement,Text } from '@chakra-ui/react';
import {  DeleteIcon } from "@chakra-ui/icons";
import { useState } from 'react';
const Option = (props) => {

    const handleOption = (value) => {
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
    return(
    <InputGroup>
    <InputLeftElement pointerEvents='none'>
      <Text>{props.key}</Text>
    </InputLeftElement>
    <Input type='text' onChange={(e) =>handleOption(e.target.value)} placeholder={`Option ${props.key}`} />
    <InputRightElement >
      <Button colorScheme='blue' variant='ghost'>
      <DeleteIcon onClick={() => props.handleDelete(props.key)}/>
      </Button>
    </InputRightElement>
  </InputGroup>
    );
}

export default Option;