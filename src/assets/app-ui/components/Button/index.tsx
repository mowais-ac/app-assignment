import {
  ActivityIndicator,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { flexbox } from "../../_commons";
import { buttonStyle } from "./styles";

const btnSizes: any = {
  mini: "mini",
  tiny: "tiny",
  small: "small",
  default: "default",
  large: "large",
  big: "big",
};

const btnColors: any = {
  primary: "primary",
  white: "white",
  bc1Light: "bc1Light",
  bc1Lighter: "bc1Lighter",
  bc1Lightest: "bc1Lightest",
};

const btnType: any = {
  touchable: "touchable",
  pressable: "pressable",
};

interface Props {
  title: string;
  basic?: boolean;
  fluid?: boolean;
  size?: "mini" | "tiny" | "small" | "default" | "large" | "big";
  color?: "primary" | "white" | "black" | "bc1Light" | "bc1Lighter" | "bc1Lightest";
  type?: "touchable" | "pressable";
  loading?: boolean;
  style?: any;
  onPress?: () => void;
  children?: JSX.Element | JSX.Element[];
  disabled?: boolean;
}
export default function Button({
  title,
  basic = false,
  fluid = false,
  size = btnSizes.default,
  color = btnColors.primary,
  type = btnType.touchable,
  loading = false,
  style,
  onPress,
  children,
  disabled = false,
}: Props) {
  const classSize =
    size === btnSizes.mini
      ? buttonStyle.mini
      : size === btnSizes.tiny
      ? buttonStyle.tiny
      : size === btnSizes.small
      ? buttonStyle.small
      : size === btnSizes.default
      ? buttonStyle.default
      : size === btnSizes.large
      ? buttonStyle.large
      : size === btnSizes.big
      ? buttonStyle.big
      : buttonStyle.default;
  const classFontSize =
    size === btnSizes.mini
      ? buttonStyle.miniFont
      : size === btnSizes.tiny
      ? buttonStyle.tinyFont
      : size === btnSizes.small
      ? buttonStyle.smallFont
      : size === btnSizes.default
      ? buttonStyle.defaultFont
      : size === btnSizes.large
      ? buttonStyle.largeFont
      : size === btnSizes.big
      ? buttonStyle.bigFont
      : buttonStyle.defaultFont;
  const classBasic = basic ? buttonStyle.basic : null;
  const classFluid = fluid ? buttonStyle.fluid : null;
  const classFluidWrap = fluid ? buttonStyle.fluidWrap : null;
  const basicClass = basic ? buttonStyle.basicFont : null;
  const btnColorsClass =
      color === btnColors.primary 
      ? buttonStyle.primary 
      : color === btnColors.white
      ? buttonStyle.whiteColor
      : color === btnColors.bc1Light
      ? buttonStyle.bc1LightColor
      : color === btnColors.bc1Lighter
      ? buttonStyle.bc1LighterColor
      : color === btnColors.bc1Lightest
      ? buttonStyle.bc1LightestColor
      : null;
  const btnColorsFontClass =
    color === btnColors.primary 
      ? buttonStyle.primaryColorFont 
      : color === btnColors.white
      ? buttonStyle.whiteColorFont
      : color === btnColors.bc1Light
      ? buttonStyle.bc1LightColorFont
      : color === btnColors.bc1Lighter
      ? buttonStyle.bc1LighterColorFont
      : color === btnColors.bc1Lightest
      ? buttonStyle.bc1LightestColorFont
      : btnColors.white;
  const Tag = type === btnType.touchable ? TouchableOpacity : Pressable;

  const Spinner = () => (
    <View
      style={[
        buttonStyle.spinnerWrap,
        flexbox.alignItems.center,
        flexbox.justifyContent.center,
        buttonStyle.primary,
      ]}
    >
      <ActivityIndicator color={"black"} />
    </View>
  );

  const disabledClass = disabled && buttonStyle.disabled;

  const buttonCommonTextStyle =
    size === btnSizes.mini
      ? buttonStyle.commonMiniText
      : buttonStyle.commonText;

  return (
    <View style={[buttonStyle.wrap, classFluidWrap, style]}>
      {loading && <Spinner />}
      <Tag
        style={[
          buttonStyle.common,
          buttonStyle.primary,
          classSize,
          classBasic,
          classFluid,
          btnColorsClass,
          disabledClass,
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            buttonCommonTextStyle,
            classFontSize,
            basicClass,
            btnColorsFontClass,
          ]}
        >
          {title}
        </Text>
        {children}
      </Tag>
    </View>
  );
}
