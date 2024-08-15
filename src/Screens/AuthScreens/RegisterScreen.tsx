import { Button, FormControl, Heading, Stack } from "native-base";
import React, { useState } from "react";
import Colors from "../../Styles/Colors";
import UsernameInput from "../../../components/AuthComponents/RegisterComponents/UsernameInput";
import PasswordInput from "../../../components/AuthComponents/RegisterComponents/PasswordInput";
import EmailInput from "../../../components/AuthComponents/RegisterComponents/EmailInput";
import ConfirmPasswordInput from "../../../components/AuthComponents/RegisterComponents/ConfirmPasswordInput";

export default function RegisterScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: ""
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
            Create Account
          </Heading>

          {/* Inputs Here! */}

          <UsernameInput
            defaultValue={values.username}
            values={values}
            setValues={setValues}
          />

          <EmailInput
            defaultValue={values.email}
            values={values}
            setValues={setValues}
          />

          <PasswordInput
            values={values}
            setValues={setValues}
            defaultValue={values.password}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            placeHolder="Password"
          />

          <ConfirmPasswordInput
            values={values}
            setValues={setValues}
            defaultValue={values.confirmPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            placeHolder="Confirm Password"
          />

          {/* Inputs Here! */}

          <Button
            w={"100%"}
            _text={{
              _dark: { color: Colors.accent.teal },
              _light: { color: Colors.accent.lavender }
            }}
            bgColor={Colors.accent.teal}
            onPress={() => console.log(values)}
          >
            Register
          </Button>
        </Stack>
      </FormControl>
    </>
  );
}
