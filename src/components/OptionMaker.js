import {
  Button,
  Text,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { useState, forwardRef, useImperativeHandle } from "react";

const OptionMaker = forwardRef((props, ref) => {
  const [options, setOptions] = useState([
    {
      letter: "A",
      text: "",
    },
    {
      letter: "B",
      text: "",
    },
    {
      letter: "C",
      text: "",
    },
  ]);

  useImperativeHandle(
    ref,
    () => {
      return {
        getData: () => options,
      };
    },
    [options]
  );

  /*
    const fetchOption = (letterFind) => {
    let filteredOption = optionData.filter((opt) => opt.letter === letterFind);
    return filteredOption;
  }
*/
  const handleDeleteOption = (delLetter) => {
    let newOptions = options.filter((option) => option.letter !== delLetter);
    setOptions(newOptions);
  };
  function getNextChar(char) {
    return String.fromCharCode(char.charCodeAt(0) + 1);
  }

  function handleAddOption() {
    let nextLetter = getNextChar(options[options.length - 1].letter);
    setOptions((prevState) => {
      return [...prevState, { letter: nextLetter, text: "" }];
    });
  }

  const inputChangeHandler = (value, optionLetter) => {
    const updatedOption = {
      letter: optionLetter,
      text: value,
    };
    var updatedArray = options.map((option) =>
      option.letter === optionLetter ? updatedOption : option
    );
    setOptions(updatedArray);
  };

  return (
    <VStack spacing={4}>
      {options.map((option) => {
        let optLetter = option.letter;
        return (
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Text>{optLetter}</Text>
            </InputLeftElement>
            <Input
              type="text"
              onChange={(e) => inputChangeHandler(e.target.value, optLetter)}
              placeholder={`Option ${optLetter}`}
            />
            <InputRightElement>
              <Button colorScheme="blue" variant="ghost" onClick={() => {handleDeleteOption(optLetter)}}>
                <DeleteIcon />
              </Button>
            </InputRightElement>
          </InputGroup>
        );
      })}
      <Button colorScheme="blue" onClick={handleAddOption}>
        <AddIcon />
      </Button>
    </VStack>
  );
});
export default OptionMaker;
