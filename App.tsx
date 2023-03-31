import React, { createRef, useCallback, useEffect, useState } from 'react'
import "react-native-gesture-handler";
import { ScrollView, Text, View } from "react-native";
import "react-native-get-random-values";
// Component Imports
import Auth from "./src/screens/Auth";
import * as SplashScreen from "expo-splash-screen";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// Navigator Imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { authRoute } from "./src/submodule/common/routes";
import {
  font_inter_light,
  font_inter_medium,
  font_inter_regular,
  font_inter_semiBold,
} from "./src/assets/app-ui/fonts";

import * as Font from "expo-font";
import { getStorageValue } from "./src/components/app_common";
import {
  ss_is_signed_in,
  ss_token,
  st_token,
} from "./src/submodule/common/constants";
import { useSharedState } from "./src/submodule/common/use-shared-state";
import DrawerNavigator from "./src/navigators/DrawerNavigator";

const useFonts = async () =>
  await Font.loadAsync({
    "Inter-Light": font_inter_light,
    "Inter-Medium": font_inter_medium,
    "Inter-Regular": font_inter_regular,
    "Inter-SemiBold": font_inter_semiBold,
  });

// const Drawer = createDrawerNavigator();
const AuthStack = createNativeStackNavigator();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const navigationRef: any = createRef();
const nav = () => navigationRef.current;

function App(): any {
  const [isSignedIn, setIsSignedIn] = useSharedState(ss_is_signed_in, false);
  const [appIsReady, setAppIsReady] = useState(false);
  const [token, setToken] = useSharedState<string>(ss_token, null);

  const LoadFonts = async () => {
    await useFonts();
  };
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await LoadFonts();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    getStorageValue(st_token)
      .then((tok) => {
        setToken(tok);
      })
      .catch((err) => {
        console.log("err getStorageValue::", err);
      });
  }, [setIsSignedIn, setToken, token]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useEffect(() => {
    setIsSignedIn(!!token);
  }, [isSignedIn, setIsSignedIn, token]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <NavigationContainer ref={navigationRef}>
          {isSignedIn ? (
            <DrawerNavigator nav={nav} />
          ) : (
            <AuthStack.Navigator screenOptions={{ headerShown: false }}>
              <AuthStack.Screen name={authRoute.auth} component={Auth} />
            </AuthStack.Navigator>
          )}
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}

export default App;
