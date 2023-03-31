import {
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Main from "../../components/Main";
import { styles } from "./styles";
import Heading from "../../assets/app-ui/components/Heading";
import Paragraph from "../../assets/app-ui/components/Paragraph";
import { basecolor1 } from "../../assets/app-ui/_variables";
import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../../submodule/common/routes";
import i18n from "../../i18n/i18n";
import { padding, textAlign } from "../../assets/app-ui/_commons";

type RequestProps = {
  title: string;
  quantity: number;
};
const transactions: RequestProps[] = [
  
];

export default function Dashboard() {
  const navigation: any = useNavigation();

  const ActionBox = (reqProps: any) => {
    const req: RequestProps = reqProps.request;
    return (
      <View style={[styles.reqBoxWwrap]}>
        <TouchableOpacity style={[styles.reqBox]}>
          <Text style={[styles.quantity]}>{req.quantity}</Text>
          <Text style={[styles.title]}>{req.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const onRefresh = useCallback(() => {
    console.log("onRefresh:::");
  }, []);

  const onActionRequiredPress = () => {
    navigation.navigate(routes.profile);
  }

  return (
    <Main>
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
        <View style={[styles.section, styles.actionRequiredWrap]}>
          <TouchableOpacity style={[styles.actionRequiredBox]} onPress={onActionRequiredPress}>
            <Heading title={i18n.t('actionRequired')} type={"h5"} />
            <Paragraph
              title={i18n.t('actionRequiredDesc')}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.section]}>
          <Heading title={i18n.t("last5Transactions")} type={"h1"} />
          {transactions?.length ? (
            <View style={[styles.reqLists]}>
              {transactions.map((req: RequestProps, i) => {
                return <ActionBox key={i} request={req} />;
              })}
            </View>
          ) : (
            <View>
              <Text style={[padding.verticalFifteen, (i18n.isRtl && textAlign.right)]}>{i18n.t("noTransactionFound")}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </Main>
  );
}
