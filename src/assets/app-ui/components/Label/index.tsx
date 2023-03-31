import { Text, View } from "react-native";
import { labelStyle } from "./styles";

const lblColors: any = {
  lighter: "lighter",
  white: "white",
  black: "black",
};

interface Props {
  title: string;
  basic?: boolean;
  fluid?: boolean;
  color?: "lighter" | "white" | "black";
  children?: JSX.Element | JSX.Element[];
}
export default function Label({
  title,
  basic = false,
  fluid = false,
  color,
  children,
}: Props) {
  const classBasic = basic ? labelStyle.basic : null;
  const classFluid = fluid ? labelStyle.fluid : null;
  const basicClass = basic ? labelStyle.basicFont : null;
  const lblColorsClass =
    color === lblColors.lighter
      ? labelStyle.lighterColor
      : color === lblColors.white
      ? labelStyle.whiteColor
      : color === lblColors.black
      ? labelStyle.blackColor
      : null;
  const lblColorsFontClass =
    color === lblColors.lighter
      ? labelStyle.lighterColorFont
      : color === lblColors.white
      ? labelStyle.whiteColorFont
      : color === lblColors.black
      ? labelStyle.blackColorFont
      : null;
  return (
    <View style={[labelStyle.wrap]}>
      <View
        style={[
          labelStyle.common,
          labelStyle.primary,
          classBasic,
          classFluid,
          lblColorsClass,
        ]}
      >
        <Text style={[labelStyle.commonText, basicClass, lblColorsFontClass]}>
          {title}
        </Text>
        {children}
      </View>
    </View>
  );
}
