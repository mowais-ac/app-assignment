import { View } from "react-native";
import { useCallback, useState } from "react";
import Input from "../../assets/app-ui/components/Input";
import Button from "../../assets/app-ui/components/Button";
import {
  ApiAuth,
  ApiResetPasswordOTPValidate,
} from "../../submodule/common/apis/api";
import { useSharedState } from "../../submodule/common/use-shared-state";
import {
  AUTH_VIEW_MODES,
  FormError,
  STATUS,
} from "../../submodule/common/interfaces/interfaces";
import {
  AUTH_MODE,
  PROFILE_TYPE_BUSINESS,
  ss_auth_view_mode,
  ss_login_form_data,
  ss_reset_password_token,
  ss_token,
  STATUS_DEFAULT,
  st_token,
} from "../../submodule/common/constants";
import Divider from "../../assets/app-ui/components/Divider";
import { saveToStorage } from "../../components/app_common";
import { validate } from "../../submodule/common/common";
import Form from "../../assets/app-ui/components/Form";
import i18n from "../../i18n/i18n";

interface OTPProps {
  otp?: string;
  profileType: number;
}
interface Props {
  onBackToLogin: () => void;
}
export default function OTP({ onBackToLogin }: Props) {
  const [loginFormInputs] = useSharedState(ss_login_form_data);

  const [otpFormInputs, setOtpFormInputs] = useState<OTPProps>({
    otp: null,
    profileType: PROFILE_TYPE_BUSINESS,
  });
  const [token, setToken] = useSharedState<string>(ss_token, null);
  const [authViewMode, setAuthViewMode] =
    useSharedState<AUTH_VIEW_MODES>(ss_auth_view_mode);

  const [resetPasswordToken, setResetPasswordToken] = useSharedState<string>(
    ss_reset_password_token,
    null
  );
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<FormError>(null);
  const [loading, setLoading] = useState(false);

  const isValidForm = useCallback(() => {
    const isValid = validate.otp(otpFormInputs.otp);
    return isValid;
  }, [otpFormInputs]);

  const onChange = useCallback(
    (value: string, name: string) => {
      const inputVal = { ...otpFormInputs };
      inputVal[name] = value;
      setOtpFormInputs(inputVal);
    },
    [otpFormInputs]
  );

  const onSubmit = useCallback(() => {
    if (!isValidForm()) {
      setShowErrors(true);
    } else {
      setLoading(true);
      const isTovalidateOTP = authViewMode === AUTH_MODE.RESET_PASSWORD_OTP;
      otpFormInputs["email"] = loginFormInputs.email;
      const api = isTovalidateOTP ? ApiResetPasswordOTPValidate : ApiAuth;
      api(otpFormInputs)
        .then((res) => {
          const token = res.token;
          if (!isTovalidateOTP) {
            saveToStorage(st_token, token)
              .then((storageRes) => {
                setToken(storageRes);
              })
              .catch((storageError) => {
                console.log("storageError::", storageError);
              });
          } else {
            console.log("enter new password");
            setResetPasswordToken(token);
            setAuthViewMode("ENTER_NEW_PASSWORD");
          }
        })
        .catch((err) => {
          console.log("err::", err);
          setErrorMessage(err);
        })
        .finally(() => {
          console.log("request done");
          setLoading(false);
        });
    }
  }, [
    authViewMode,
    isValidForm,
    loginFormInputs,
    otpFormInputs,
    setAuthViewMode,
    setResetPasswordToken,
    setToken,
  ]);

  return (
    <Form errorMessage={errorMessage} hideDefaultAction>
      <View>
        <Input
          onChange={(v) => onChange(v, "otp")}
          placeholder={"Enter OTP"}
          keyboardType={"email-address"}
          autoCapitalize={"none"}
          value={otpFormInputs.otp}
          label={"OTP"}
          center
          error={{
            show: showErrors,
            valid: validate.otp(otpFormInputs.otp),
          }}
        />
        <Button
          title={i18n.t('confirm')}
          size={"large"}
          onPress={() => onSubmit()}
          disabled={!isValidForm()}
          loading={loading}
        />
        <Divider center />
        <View style={[{ alignItems: "center" }]}>
          <Button
            title={i18n.t("goBack")}
            size={"small"}
            color={"bc1Light"}
            onPress={() => onBackToLogin()}
            style={{ width: 140 }}
          />
        </View>
      </View>
    </Form>
  );
}
