import { Image, Text, View } from "react-native";
import { img_logo_with_txt } from "../../assets/app-ui/img";
import AuthMain from "../../components/AuthMain";
import { authStyle } from "../../assets/app-ui/components/auth-main";
import { flexbox, margin, textAlign } from "../../assets/app-ui/_commons";
import Label from "../../assets/app-ui/components/Label";
import Button from "../../assets/app-ui/components/Button";
import Divider from "../../assets/app-ui/components/Divider";
import { useCallback, useEffect, useState } from "react";
import CustomModal from "../../assets/app-ui/components/CustomModal";
import Login from "./Login";
import {
  AUTH_VIEW_MODES,
  STATUS,
} from "../../submodule/common/interfaces/interfaces";
import { useSharedState } from "../../submodule/common/use-shared-state";
import {
  AUTH_MODE,
  ss_auth_view_mode,
  ss_show_forget_pwd_form,
  STATUS_DEFAULT,
  STATUS_SUCCESS,
} from "../../submodule/common/constants";
import OTP from "./OTP";
import ForgetPassword from "./ForgetPassword";
import NewPassword from "./NewPassword";
import i18n from "../../i18n/i18n";

export default function Auth() {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [loginStatus, setLoginStatus] = useSharedState<STATUS>(STATUS_DEFAULT);
  const [showForgetPwdForm, setShowForgetPwdForm] = useSharedState<boolean>(
    ss_show_forget_pwd_form,
    false
  );


  const [authViewMode, setAuthViewMode] = useSharedState<AUTH_VIEW_MODES>(
    ss_auth_view_mode,
    "LOGIN"
  );

  const onPress = useCallback(() => {
    setShowLoginModal(true);
  }, []);

  const onCloseLogin = () => {
    setShowForgetPwdForm(false);
    setShowLoginModal(false);
  };

  const onSwipeMoveComplete = useCallback(() => {
    setShowLoginModal(false);
  }, []);

  const onBackToLogin = useCallback(() => {
    setAuthViewMode("LOGIN");
  }, [setAuthViewMode]);
  useEffect(() => {
    console.log(213123);
    setAuthViewMode("LOGIN");
  }, [setAuthViewMode]);

  const modalHeader =
    authViewMode === AUTH_MODE.LOGIN
      ? {
          title: i18n.t('signInTo'),
          description: "",
        }
      : authViewMode === AUTH_MODE.LOGIN_OTP
      ? {
          title: i18n.t('enterOtp'),
          description: "",
        }
      : authViewMode === AUTH_MODE.FORGET_PASSWORD
      ? {
          title: i18n.t('resetYourPassword'),
          description: "",
        }
      : authViewMode === AUTH_MODE.RESET_PASSWORD_OTP
      ? {
        title: i18n.t('enterOtp'),
          description: "",
        }
      : authViewMode === AUTH_MODE.ENTER_NEW_PASSWORD
      ? {
          title: i18n.t('enterNewPassword'),
          description: "",
        }
      : null;
// console.log('Localization:::', Localization)
  return (
    <AuthMain>
      <View
        style={[
          authStyle.contentArea,
          authStyle.contentInner,
          flexbox.alignItems.center,
        ]}
      >
        <Image
          source={img_logo_with_txt}
          style={authStyle.logo}
          resizeMode={"contain"}
        />
        <View style={margin.top5}>
          <Label title={i18n.t("assignmentFor")} color={"lighter"} />
        </View>
        
        <Divider center />
        <View>
          <Text style={[authStyle.txt, textAlign.center]}>
            {i18n.t('welcome')}
          </Text>
        </View>
        <Button
          title={i18n.t('getStarted')}
          fluid
          size={"large"}
          type={"touchable"}
          style={[authStyle.getStarted]}
          onPress={() => onPress()}
        />
        <CustomModal
          visible={showLoginModal}
          onClose={onCloseLogin}
          header={modalHeader}
          onSwipeMoveComplete={onSwipeMoveComplete}
        >
          <View>
            {authViewMode === AUTH_MODE.LOGIN ? (
              <Login />
            ) : authViewMode === AUTH_MODE.LOGIN_OTP ||
              authViewMode === AUTH_MODE.RESET_PASSWORD_OTP ? (
              <OTP onBackToLogin={onBackToLogin} />
            ) : authViewMode === AUTH_MODE.FORGET_PASSWORD ? (
              <ForgetPassword onBackToLogin={onBackToLogin} />
            ) : authViewMode === AUTH_MODE.ENTER_NEW_PASSWORD ? (
              <NewPassword />
            ) : null}
          </View>
        </CustomModal>
      </View>
    </AuthMain>
  );
}
