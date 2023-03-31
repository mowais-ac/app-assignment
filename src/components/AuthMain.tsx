import { View } from "react-native";
import { flexbox } from "../assets/app-ui/_commons";
import { authMain } from "../assets/app-ui/components/auth-main";
export default function AuthMain(props: any) {
  return (
    <View
      style={[
        authMain.wrapper,
        flexbox.alignItems.center,
        flexbox.justifyContent.center,
      ]}
    >
      {props.children}
    </View>
  );
}
