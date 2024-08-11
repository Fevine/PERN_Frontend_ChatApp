import { Box } from "native-base";
import React from "react";
import LoginScreen from "./LoginScreen";
import colors from "../../Styles/Colors";

export default function AuthContainer() {
  return (
    <Box
      flex={1}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={colors.background.softBlue}
    >
      <LoginScreen />
    </Box>
  );
}
