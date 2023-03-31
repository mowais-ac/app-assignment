import { Text, View } from "react-native";
import Divider from "../assets/app-ui/components/Divider";
import { styles } from "../assets/app-ui/components/main";
import { fontWeight, heading } from "../assets/app-ui/_commons";
import { SubHeaderProps } from "../submodule/common/interfaces/interfaces";

interface Props {
  children: JSX.Element;
  subheader?: SubHeaderProps;
}
export default function Main({ children, subheader }: Props) {
  return (
    <View style={styles.wrapper}>
      {subheader && (
        <View style={styles.subheader}>
          <Text style={[styles.title, heading.one, fontWeight.bold]}>
            {subheader.title}
          </Text>
          {subheader.description && (
            <Text style={[styles.description]}>{subheader.description}</Text>
          )}
          <Divider stack={"left"} />
          {subheader.actions && (
            <View style={[styles.actions]}>{subheader.actions}</View>
          )}
        </View>
      )}
      {children}
    </View>
  );
}
