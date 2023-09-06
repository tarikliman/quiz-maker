import "./SettingsSection.css";
import PageHeader from "../PageHeader/PageHeader";
import { Card, Button, HStack } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
const SettingsSection = () => {
  return (
    <Card minWidth="5xl" className="settings">
      <HStack  justifyContent="center"
          alignItems="center">
        <PageHeader />
        <Button variant='solid' colorScheme="blue">
          <DownloadIcon />
        </Button>
      </HStack>
    </Card>
  );
};

export default SettingsSection;
