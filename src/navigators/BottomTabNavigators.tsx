import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Home from "../screens/Home";
// import About from "../screens/About";
// import Contact from "../screens/Contact";
import { routes } from "../submodule/common/routes";
import { Image } from "react-native";
import {
  icon_complaints,
  icon_complaints_active,
  icon_dashboard,
  icon_dashboard_active,
  icon_notifications,
  icon_notifications_active,
  icon_profile,
  icon_profile_active,
  icon_requests,
  icon_requests_active,
} from "../assets/app-ui/img";
import { styles } from "./style";
import Header from "../assets/app-ui/components/header";
import {
  DashboardStackNavigator,
  NotificationsStackNavigator,
  ProfileStackNavigator,
  TransactionsStackNavigator,
} from "./StackNavigators";

const BottomTabStack = createBottomTabNavigator();
// const screenOptionStyle = {};

const option = (icon: any, iconActive: any) => {
  return {
    tabBarIcon: ({ focused }) => (
      <Image
        source={focused ? iconActive : icon}
        style={styles.bottomTab.icon}
      />
    ),
    tabBarLabelStyle: styles.bottomTab.labelStyle,
    tabBarInactiveTintColor: styles.bottomTab.inActiveLabelColor,
    tabBarActiveTintColor: styles.bottomTab.activeLabelColor,
  };
};

const BottomTabNavigator = () => {
  return (
    <BottomTabStack.Navigator screenOptions={{ header: () => <Header /> }}>
      <BottomTabStack.Screen
        name={routes.dashboard}
        component={DashboardStackNavigator}
        options={option(icon_dashboard, icon_dashboard_active)}
      />
      <BottomTabStack.Screen
        name={routes.transactions}
        component={TransactionsStackNavigator}
        options={option(icon_requests, icon_requests_active)}
      />
      <BottomTabStack.Screen
        name={routes.profile}
        component={ProfileStackNavigator}
        options={option(icon_profile, icon_profile_active)}
      />
      <BottomTabStack.Screen
        name={routes.notifications}
        component={NotificationsStackNavigator}
        options={option(icon_notifications, icon_notifications_active)}
      />
    </BottomTabStack.Navigator>
  );
};

export default BottomTabNavigator;
