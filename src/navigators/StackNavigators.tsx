import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import Transactions from "../screens/Transactions";
import { routes } from "../submodule/common/routes";

const Stack = createStackNavigator();

export const DashboardStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.dashboard} component={Dashboard} />
    </Stack.Navigator>
  );
};
export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.profile} component={Profile} />
    </Stack.Navigator>
  );
};
export const TransactionsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.transactions} component={Transactions} />
    </Stack.Navigator>
  );
};
export const NotificationsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.notifications} component={Notifications} />
    </Stack.Navigator>
  );
};