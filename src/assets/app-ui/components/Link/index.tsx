import { Text, TouchableOpacity } from "react-native";
import { linkStyle } from "./styles";

interface Props {
  text: string;
  onPress: () => void;
  children?: JSX.Element | JSX.Element[];
  styles?: any;
}
export default function Link({ text, onPress, styles, children }: Props) {
  const onPressHandle = () => {
    onPress();
  };
  return (
    <TouchableOpacity onPress={() => onPressHandle()}>
      <Text style={[linkStyle.text, styles]}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
}
