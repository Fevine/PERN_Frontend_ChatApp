import { Button, FormControl, Heading, Link, Stack } from "native-base";
import React, { useState } from "react";
import PasswordInput from "../../../components/AuthComponents/LoginComponents/PasswordInput";
import UsernameInput from "../../../components/AuthComponents/LoginComponents/UsernameInput";
import Colors from "../../Styles/Colors";
import { Pressable, Text } from "react-native";

type Props = {
  setInLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginScreen({ setInLogin }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  return (
    <>
      <FormControl isRequired w={[48, 64, 72]}>
        <Stack space={5} alignItems={"center"}>
          <Heading
            paddingBottom={5}
            _dark={{ color: Colors.accent.lavender }}
            _light={{ color: Colors.accent.electricBlue }}
          >
            Log In
          </Heading>

          <UsernameInput
            defaultValue={values.username}
            values={values}
            setValues={setValues}
          />

          <PasswordInput
            values={values}
            setValues={setValues}
            defaultValue={values.password}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          <Button
            w={"100%"}
            _text={{
              _dark: { color: Colors.accent.teal },
              _light: { color: Colors.accent.lavender }
            }}
            bgColor={Colors.accent.teal}
            onPress={() => console.log(values)}
          >
            Log In
          </Button>
          <Pressable onPress={() => setInLogin(false)}>
            <Text>Don't have an account yet?</Text>
          </Pressable>
        </Stack>
      </FormControl>
    </>
  );
}
