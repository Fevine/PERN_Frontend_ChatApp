import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box } from "native-base";
import LoginScreen from "./src/Screens/AuthScreens/LoginScreen";
import AuthContainer from "./src/Screens/AuthScreens/AuthContainer";

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <AuthContainer />
    </NativeBaseProvider>
  );
}
