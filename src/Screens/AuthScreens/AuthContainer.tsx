import { Box, Center } from "native-base";
import React, { useState } from "react";
import Colors from "../../Styles/Colors";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

export default function AuthContainer() {
  const [inLogin, setInLogin] = useState(true);

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
        {inLogin ? (
          <LoginScreen setInLogin={setInLogin} />
        ) : (
          <RegisterScreen setInLogin={setInLogin} />
        )}
      </Center>
    </Box>
  );
}
