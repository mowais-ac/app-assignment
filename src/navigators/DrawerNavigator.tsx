import React, { useCallback } from "react";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigators";
import {
  icon_dashboard,
  icon_profile,
  icon_requests,
  icon_dashboard_active,
  icon_profile_active,
  icon_requests_active,
} from "../assets/app-ui/img";
import { styles } from "./style";
import { Image, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { deleteFromStorage } from "../components/app_common";
import { ss_token, st_token } from "../submodule/common/constants";
import { useSharedState } from "../submodule/common/use-shared-state";
import i18n from "../i18n/i18n";
const Drawer = createDrawerNavigator();

export const screens = {
  HomeTab: "HomeTab",
  HomeStack: "HomeStack",
  Home: "Home",
  Dashboard: "Dashboard",
  DashboardStack: "DashboardStack",
  Profile: "Profile",
  ProfileStack: "ProfileStack",
  Transactions: "Transactions",
  TransactionsStack: "TransactionsStack",
  Notifications: "Notifications",
  NotificationsStack: "NotificationsStack",
};
export const routes = [
  {
    name: screens.Dashboard,
    focusedRoute: screens.Dashboard,
    title: i18n.t("dashboard"),
    showInTab: true,
    showInDrawer: true,
    icon: (focused) => (
      <Image source={focused ? icon_dashboard_active : icon_dashboard} />
    ),
  },
  {
    name: screens.Profile,
    focusedRoute: screens.Profile,
    title: i18n.t("profile"),
    showInTab: true,
    showInDrawer: true,
    icon: (focused) => (
      <Image source={focused ? icon_profile_active : icon_profile} />
    ),
  },
  {
    name: screens.Transactions,
    focusedRoute: screens.Transactions,
    title: i18n.t("transactions"),
    showInTab: true,
    showInDrawer: true,
    icon: (focused) => (
      <Image source={focused ? icon_requests_active : icon_requests} />
    ),
  },
];
const CustomDrawerContent = (props: any) => {
  const navigation: any = useNavigation();
  const currentRouteName = navigation.getCurrentRoute()?.name;
  const [token, setToken] = useSharedState<string>(ss_token, null);

  console.log("1", props);
  const onLogout = useCallback(() => {
    console.log("2", props);
    // return;
    Alert.alert("Confirm", "Are you sure want to logout?", [
      {
        text: i18n.t('confirm'),
        onPress: () => {
          deleteFromStorage(st_token)
            .then((tok: any) => {
              console.log("onLogout token::", token);
              setToken(tok);
            })
            .catch((err) => {
              console.log("onLogout err:::", err);
            });
        },
      },
      {
        text: i18n.t('cancel'),
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);
  }, [props, setToken, token]);

  return (
    <>
      <DrawerContentScrollView {...props}>
        {routes
          .filter((route) => route.showInDrawer)
          .map((route) => {
            const focusedRoute = routes.find(
              (r) => r.name === currentRouteName
            );
            const focused = focusedRoute
              ? route.name === focusedRoute?.focusedRoute
              : route.name === screens.HomeStack;
            return (
              <DrawerItem
                key={route.name}
                label={() => (
                  <Text
                    style={
                      focused
                        ? styles.drawer.drawerLabelFocused
                        : styles.drawer.drawerLabel
                    }
                  >
                    {route.title}
                  </Text>
                )}
                onPress={() => props.navigation.navigate(route.name)}
                style={[
                  styles.drawer.drawerItem,
                  focused ? styles.drawer.drawerItemFocused : null,
                ]}
              />
            );
          })}

        <TouchableOpacity style={[styles.drawer.logout]} onPress={onLogout}>
          <Text style={styles.drawer.logoutTxt}>{i18n.t('logout')}</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </>
  );
};

const DrawerNavigator = (props: any) => {
  const { nav } = props;
  const drawerPosition = i18n.isRtl ? styles.drawer.positionRtl : styles.drawer.position;
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        overlayColor: styles.drawer.overlayColor,
        drawerPosition: drawerPosition,
        drawerStyle: styles.drawer.wrap,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} nav={nav} />}
    >
      <Drawer.Screen
        name={"HomeTab"}
        component={BottomTabNavigator}
        options={{
          title: "Home",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
