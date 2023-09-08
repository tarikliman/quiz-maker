import { useState, useContext } from "react";
import { Text } from "@chakra-ui/react";
import { NameContext } from "../../context/ExamNameContext";
import "./PageHeader.css";
const PageHeader = () => {
  const [isClicked, setIsClicked] = useState("false");
  const { name, setName } = useContext(NameContext);

  let newExamName = name;
  const handleHeading = (newInput) => {
    newExamName = newInput;
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsClicked("false");
      setName(newExamName);
    }
  };
  let show =  isClicked === "true" ? {opacity: "1", marginLeft: "10px" } : {opacity: "0",marginLeft: "10px"};
  console.log(show);
    return (
    <div align="center" className="page-header">
      <Text
        color="#065666"
        display="inline"
        onKeyDown={handleKeyDown}
        onClick={() => setIsClicked("true")}
        contentEditable={isClicked}
        onInput={(e) => handleHeading(e.currentTarget.textContent)}
        fontSize="xl"
      >
        {name}
      </Text>
        {}

      <span style={show}>[Press Enter]</span>
    </div>
  );
};

export default PageHeader;
