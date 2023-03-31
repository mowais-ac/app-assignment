import { useCallback, useEffect } from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { img_logo } from "../../img";
import { flexbox, padding } from "../../_commons";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../../../submodule/common/routes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import i18n from "../../../../i18n/i18n";

export default function Header() {
  const insets = useSafeAreaInsets();
  const navigation: any = useNavigation();

  const hamburgerPress = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  const onLogoPress = useCallback(() => {
    navigation.navigate(routes.dashboard);
  }, [navigation]);

  useEffect(() => {
    navigation.closeDrawer();
  }, [navigation]);

  return (
    <View
      style={[
        styles.wrap,
        flexbox.justifyContent.spaceBetween,
        flexbox.alignItems.center,
        (i18n.isRtl ? flexbox.directionRowReverse : flexbox.directionRow),
        { paddingTop: insets.top },
      ]}
    >
      <TouchableOpacity onPress={onLogoPress}>
        <Image style={styles.logo} source={img_logo} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.hamburger]} onPress={hamburgerPress}>
        <View style={[styles.bar]}></View>
        <View style={[styles.bar]}></View>
        <View style={[styles.bar]}></View>
      </TouchableOpacity>
    </View>
  );
}
