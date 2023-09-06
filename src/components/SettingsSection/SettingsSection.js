import "./SettingsSection.css";
import PageHeader from "../PageHeader/PageHeader";
import { Card, HStack } from "@chakra-ui/react";
import PrintButton from '../PrintButton';
const SettingsSection = () => {
  return (
    <Card minWidth="5xl" className="settings">
      <HStack justifyContent="center" alignItems="center">
        <PageHeader />
      </HStack>
    </Card>
  );
};

export default SettingsSection;
