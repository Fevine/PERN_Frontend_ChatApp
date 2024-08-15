import { MaterialIcons } from "@expo/vector-icons";
import { Icon, Input } from "native-base";
import React from "react";
import Colors from "../../../src/Styles/Colors";

type Props = {
  isInvalid?: boolean;
  defaultValue: string;
  setValues: React.Dispatch<
    React.SetStateAction<{
      username: string;
      email?: string;
      password: string;
      confirmPassword?: string;
      phoneNumber?: string;
    }>
  >;
  values: {
    username: string;
    email?: string;
    password: string;
    confirmPassword?: string;
    phoneNumber?: string;
  };
};

export default function UsernameInput(props: Props) {
  return (
    <Input
      onChangeText={(text) =>
        props.setValues({ ...props.values, username: text })
      }
      defaultValue={props.defaultValue}
      isInvalid={props.isInvalid}
      placeholder="username"
      w={"100%"}
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
  );
}
