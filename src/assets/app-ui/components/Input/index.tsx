import React, { useCallback, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import i18n from "../../../../i18n/i18n";
import {
  InputErrorProps,
  INPUT_TYPES,
} from "../../../../submodule/common/interfaces/interfaces";
import { img_hide_password, img_show_password } from "../../img";
import { inputStyles } from "./styles";

interface Props {
  value: string;
  label?: string;
  placeholder?: string;
  password?: boolean;
  type?: INPUT_TYPES;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "url";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoComplete?:
    | "birthdate-day"
    | "birthdate-full"
    | "birthdate-month"
    | "birthdate-year"
    | "cc-csc"
    | "cc-exp"
    | "cc-exp-day"
    | "cc-exp-month"
    | "cc-exp-year"
    | "cc-number"
    | "email"
    | "gender"
    | "name"
    | "name-family"
    | "name-given"
    | "name-middle"
    | "name-middle-initial"
    | "name-prefix"
    | "name-suffix"
    | "password"
    | "password-new"
    | "postal-address"
    | "postal-address-country"
    | "postal-address-extended"
    | "postal-address-extended-postal-code"
    | "postal-address-locality"
    | "postal-address-region"
    | "postal-code"
    | "street-address"
    | "sms-otp"
    | "tel"
    | "tel-country-code"
    | "tel-national"
    | "tel-device"
    | "username"
    | "username-new"
    | "off"
    | null;
  autoCorrect?: boolean;
  error?: InputErrorProps;
  withLabel?: boolean;
  style?: any;
  center?: boolean;
  onChange?: (e: any) => void;
}
export default function Input({
  label,
  value = "",
  placeholder,
  password,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  autoComplete,
  error,
  withLabel = false,
  style,
  center,
  onChange,
}: Props) {
  const [hidePassword, setHidePassword] = useState(true);
  const showHidePassword = useCallback(() => {
    setHidePassword(hidePassword ? false : true);
  }, [hidePassword]);
  const hightlightInputErrorStyle =
    error && error.show && !error.valid && inputStyles.errorInput;
  const centerStyle = center ? inputStyles.textCenter : null;
  return (
    <View style={inputStyles.row}>
      {withLabel && (
        <View style={inputStyles.label}>
          <Text>{label}</Text>
        </View>
      )}
      <TextInput
        style={[
          inputStyles.input,
          hightlightInputErrorStyle,
          style,
          centerStyle,
        ]}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        secureTextEntry={password && hidePassword ? password : false}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        autoComplete={autoComplete}
      />
      {password ? (
        <TouchableOpacity
          onPress={showHidePassword}
          style={inputStyles.iconShowHidePwdWrap}
        >
          <Image
            style={inputStyles.iconShowHidePwd}
            source={hidePassword ? img_show_password : img_hide_password}
          />
        </TouchableOpacity>
      ) : null}
      {error && error.show && !error.valid && (
        <Text style={inputStyles.errorTxt}>
          {error.message ?? <>{label} {i18n.t('isRequired')}</>}{" "}
        </Text>
      )}
    </View>
  );
}
