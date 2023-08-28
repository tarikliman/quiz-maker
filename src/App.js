import {ChakraProvider, HStack } from "@chakra-ui/react";
import Page from "./components/Page/Page";
import SettingsSection from "./components/SettingsSection/SettingsSection";



function App() {
  return (
    <ChakraProvider color='#F7FAFC'>
        <main>
          <HStack mx={20}>
          <Page/>
          <SettingsSection/>
          </HStack>
        </main>
    </ChakraProvider>
  );
}

export default App;
