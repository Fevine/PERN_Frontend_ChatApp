import {
  Button,
  Center,
  FormControl,
  Heading,
  Icon,
  Input,
  Stack
} from "native-base";
import React, { useState } from "react";
import Colors from "../../Styles/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Center>
        <FormControl isRequired w={"56"}>
          <Stack space={5} alignItems={"center"}>
            <Heading color={Colors.accent.teal}>Sign In</Heading>

            <Input
              w={"100%"}
              placeholder="username"
              placeholderTextColor={Colors.accent.navyBlue}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color={Colors.accent.navyBlue}
                />
              }
            />

            <Input
              w={"100%"}
              type={showPassword ? "text" : "password"}
              placeholder="password"
              placeholderTextColor={Colors.accent.navyBlue}
              InputRightElement={
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Icon
                    as={
                      <MaterialIcons
                        name={showPassword ? "visibility" : "visibility-off"}
                      />
                    }
                    size={5}
                    mr="2"
                    color={Colors.accent.navyBlue}
                  />
                </Pressable>
              }
            />

            <Button w={"100%"} bgColor={Colors.accent.teal}>
              Log In
            </Button>
          </Stack>
        </FormControl>
      </Center>
    </>
  );
}
