import { useCallback } from "react";
import { RefreshControl, ScrollView, Text, View } from "react-native";
import { heading, padding } from "../../assets/app-ui/_commons";
import Main from "../../components/Main";

export default function Transactions() {
  const onRefresh = useCallback(() => {
    console.log("Should refresh now");
  }, []);
  return (
    <Main subheader={{ title: "Transactions", description: "" }}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => onRefresh()}
            tintColor="#EBEBEB"
            title="Loading..."
            colors={["#ff0000", "#00ff00", "#0000ff"]}
            progressBackgroundColor="#EBEBEB"
          />
        }
      >
        <View style={padding.horizontalFifteen}>
          <Text style={heading.four}>Coming Soon</Text>
        </View>
      </ScrollView>
    </Main>
  );
}
