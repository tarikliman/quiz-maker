import { Button} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
const PrintButton = () => {
    
    const componentRef = useRef();
    return( <div>
        <ReactToPrint
              trigger={() =>  <Button variant='solid' colorScheme="blue">
              <DownloadIcon />
            </Button>}
               content={() => componentRef.current}
            />
            
        </div>);
}

export default PrintButton;