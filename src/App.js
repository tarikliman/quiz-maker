import {ChakraProvider, VStack } from "@chakra-ui/react";
import Page from "./components/Page/Page";
import SettingsSection from "./components/SettingsSection/SettingsSection";
import FullScreenSection from "./components/FullScreenSection";


function App() {
  return (
    <ChakraProvider color='#F7FAFC'>
      <FullScreenSection bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'>
      <main>
          <VStack mx={20}>
          <SettingsSection/>
          <Page />
          </VStack>
        </main>
      </FullScreenSection>
       
    </ChakraProvider>
  );
}

export default App;
