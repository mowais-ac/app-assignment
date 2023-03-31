import { View } from "react-native";
import { useCallback, useState } from "react";
import Input from "../../assets/app-ui/components/Input";
import Button from "../../assets/app-ui/components/Button";
import { ApiResetPassword } from "../../submodule/common/apis/api";
import { useSharedState } from "../../submodule/common/use-shared-state";
import {
  AUTH_VIEW_MODES,
  FormError,
  LoginProps,
} from "../../submodule/common/interfaces/interfaces";
import {
  ss_auth_view_mode,
  ss_login_form_data,
} from "../../submodule/common/constants";
import Divider from "../../assets/app-ui/components/Divider";
import { validate } from "../../submodule/common/common";
import Form from "../../assets/app-ui/components/Form";
import i18n from "../../i18n/i18n";

interface FormProps {
  email?: string;
  profileType: number;
}
interface Props {
  onBackToLogin: () => void;
}
export default function ForgetPassword({ onBackToLogin }: Props) {
  const [loginFormInputs, setLoginFormInputs] =
    useSharedState<LoginProps>(ss_login_form_data);

  const [authViewMode, setAuthViewMode] =
    useSharedState<AUTH_VIEW_MODES>(ss_auth_view_mode);
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<FormError>(null);

  const onChange = useCallback(
    (value: string, name: string) => {
      const inputVal = { ...loginFormInputs };
      inputVal[name] = value;
      setLoginFormInputs(inputVal);
    },
    [loginFormInputs, setLoginFormInputs]
  );

  const validForm = useCallback(() => {
    const isValid = validate.email(loginFormInputs.email);
    return isValid;
  }, [loginFormInputs]);

  const onSubmitForgetPassword = useCallback(() => {
    // {{user}}/web/user/login
    if (!validForm()) {
      setShowErrors(true);
    } else {
      setLoading(true);
      ApiResetPassword(loginFormInputs)
        .then((res) => {
          setAuthViewMode("RESET_PASSWORD_OTP");
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
  }, [validForm, loginFormInputs, setAuthViewMode]);

  return (
    <Form errorMessage={errorMessage} hideDefaultAction>
      <View>
        <Input
          onChange={(v) => onChange(v, "email")}
          placeholder={i18n.t('enterEmailAddress')}
          keyboardType={"email-address"}
          autoCapitalize={"none"}
          value={loginFormInputs.email}
          label={i18n.t("emailAddress")}
          center
          error={{
            show: showErrors,
            valid: validate.email(loginFormInputs.email),
          }}
        />
        <Button
          title={i18n.t('resetPassword')}
          size={"large"}
          onPress={() => onSubmitForgetPassword()}
          loading={loading}
          disabled={!validForm()}
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
