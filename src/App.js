import { ChakraProvider, VStack } from "@chakra-ui/react";
import Page from "./components/Page/Page";
import SettingsSection from "./components/SettingsSection/SettingsSection";
import FullScreenSection from "./components/FullScreenSection";
import Header from "./components/Header";
import { NameContext } from "./context/ExamNameContext";
import { useState } from "react";
function App() {
  const [name,setName] = useState('Exam Name');

  const examName = {
    name,
    setName
  }
  return (
    <ChakraProvider color="#F7FAFC">
      <FullScreenSection bgGradient="linear(to-r, gray.300, yellow.400, pink.200)">
        <Header />
        <main>
          <VStack mx={20} my = {20}>
          <NameContext.Provider value = {examName}>
          <SettingsSection />
            <Page/>
          </NameContext.Provider>
          </VStack>
        </main>
      </FullScreenSection>
    </ChakraProvider>
  );
}

export default App;
