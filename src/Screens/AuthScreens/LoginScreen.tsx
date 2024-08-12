import { MaterialIcons } from "@expo/vector-icons";
import { Button, FormControl, Heading, Icon, Input, Stack } from "native-base";
import React, { useState } from "react";
import { Pressable } from "react-native";
import Colors from "../../Styles/Colors";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <FormControl isRequired w={[48, 64, 72]}>
        <Stack space={5} alignItems={"center"}>
          <Heading color={Colors.accent.teal}>Log In</Heading>

          <Input
            w={"100%"}
            placeholder="username"
            focusOutlineColor={Colors.accent.teal}
            _hover={{ borderColor: Colors.accent.teal }}
            borderColor={Colors.secondary.skyBlue}
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
            focusOutlineColor={Colors.accent.teal}
            _hover={{ borderColor: Colors.accent.teal }}
            borderColor={Colors.secondary.skyBlue}
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

          <Button
            w={"100%"}
            _text={{
              _dark: { color: Colors.accent.teal },
              _light: { color: Colors.accent.lavender}
            }}
            bgColor={Colors.accent.teal}
          >
            Log In
          </Button>
        </Stack>
      </FormControl>
    </>
  );
}
