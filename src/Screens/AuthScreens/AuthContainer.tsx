import { Box, Center } from "native-base";
import React from "react";
import Colors from "../../Styles/Colors";
import LoginScreen from "./LoginScreen";

export default function AuthContainer() {
  return (
    <Box
      flex={1}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={Colors.background.softBlue}
      safeArea
    >
      <Center
        backgroundColor={Colors.background.powderBlue}
        paddingX={10}
        paddingY={20}
        borderRadius={4}
      >
        <LoginScreen />
      </Center>
    </Box>
  );
}
