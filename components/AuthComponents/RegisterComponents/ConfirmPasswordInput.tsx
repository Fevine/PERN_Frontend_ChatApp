import { MaterialIcons } from "@expo/vector-icons";
import { Icon, Input } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import Colors from "../../../src/Styles/Colors";

type Props = {
  placeHolder: string;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  isInvalid?: boolean;
  defaultValue: string;
  setValues: React.Dispatch<
    React.SetStateAction<{
      username: string;
      email: string;
      password: string;
      confirmPassword: string;
      phoneNumber: string;
    }>
  >;
  values: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
  };
};

const ConfirmPasswordInput = (props: Props) => {
  return (
    <Input
      onChangeText={(text) =>
        props.setValues({ ...props.values, confirmPassword: text })
      }
      defaultValue={props.defaultValue}
      isInvalid={props.isInvalid}
      w={"100%"}
      type={props.showPassword ? "text" : "password"}
      placeholder={props.placeHolder}
      focusOutlineColor={Colors.accent.teal}
      _hover={{ borderColor: Colors.accent.teal }}
      borderColor={Colors.secondary.skyBlue}
      placeholderTextColor={Colors.accent.navyBlue}
      InputRightElement={
        <Pressable onPress={() => props.setShowPassword(!props.showPassword)}>
          <Icon
            as={
              <MaterialIcons
                name={props.showPassword ? "visibility" : "visibility-off"}
              />
            }
            size={5}
            mr="2"
            color={Colors.accent.navyBlue}
          />
        </Pressable>
      }
      InputLeftElement={
        <Icon
          as={<MaterialIcons name="security" />}
          size={5}
          ml="2"
          color={Colors.accent.navyBlue}
        />
      }
    />
  );
};

export default ConfirmPasswordInput;
