import { View } from "react-native";
import { dividerStyle } from "./styles";

interface Props {
  center?: boolean;
  style?: any;
  stack?: "left" | "right";
}
export default function Divider({ center, style, stack }: Props) {
  const centerStyle = center ? dividerStyle.center : null;
  const centerInnerStyle = center ? dividerStyle.centerInner : null;

  const stackLeftStyle = stack === "left" ? dividerStyle.stackLeft : null;
  const stackLeftInnerStyle =
    stack === "left" ? dividerStyle.stackInnerLeftStyle : null;
  return (
    <View style={[style, dividerStyle.wrap, centerStyle, stackLeftStyle]}>
      <View
        style={[
          dividerStyle.common,
          dividerStyle.primary,
          centerInnerStyle,
          stackLeftInnerStyle,
        ]}
      ></View>
    </View>
  );
}
