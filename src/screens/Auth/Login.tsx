import { Text, View } from "react-native";
import { useCallback, useState } from "react";
import Input from "../../assets/app-ui/components/Input";
import Link from "../../assets/app-ui/components/Link";
import Button from "../../assets/app-ui/components/Button";
import { ApiLogin } from "../../submodule/common/apis/api";
import { textAlign } from "../../assets/app-ui/_commons";
import Form from "../../assets/app-ui/components/Form";
import { useSharedState } from "../../submodule/common/use-shared-state";
import {
  AUTH_VIEW_MODES,
  FormError,
  LoginProps,
  STATUS,
} from "../../submodule/common/interfaces/interfaces";
import {
  PROFILE_TYPE_BUSINESS,
  ss_auth_view_mode,
  ss_login_form_data,
  ss_show_forget_pwd_form,
  ss_token,
  STATUS_DEFAULT,
  st_token,
} from "../../submodule/common/constants";
import { validate } from "../../submodule/common/common";
import i18n from "../../i18n/i18n";
import { saveToStorage } from "../../components/app_common";

export default function Login() {
  const [showForgetPwdForm, setShowForgetPwdForm] = useSharedState<boolean>(
    ss_show_forget_pwd_form,
    false
  );

  const [showErrors, setShowErrors] = useState<boolean>(false);
  const [authViewMode, setAuthViewMode] =
    useSharedState<AUTH_VIEW_MODES>(ss_auth_view_mode);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<FormError>(null);
  const [token, setToken] = useSharedState<string>(ss_token, null);

  const [loginFormInputs, setLoginFormInputs] = useSharedState<LoginProps>(
    ss_login_form_data,
    {
      email: "",
      password: "",
    }
  );

  const onChange = useCallback(
    (value: string, name: string) => {
      const inputVal = { ...loginFormInputs };
      inputVal[name] = value;
      setLoginFormInputs(inputVal);
    },
    [loginFormInputs, setLoginFormInputs]
  );

  const isValidForm = useCallback(() => {
    const isValid =
      validate.email(loginFormInputs.email) //&&  validate.password(loginFormInputs.password).valid;
    return isValid;
  }, [loginFormInputs]);

  const onSubmit = useCallback(() => {
    // {{user}}/web/user/login
    if (!isValidForm()) {
      setShowErrors(true);
    } else {
      setLoading(true);
      ApiLogin(loginFormInputs)
        .then((res) => {
          const token = res.token;
          // setAuthViewMode("LOGIN_OTP");
          saveToStorage(st_token, token)
              .then((storageRes) => {
                setToken(storageRes);
              })
              .catch((storageError) => {
                console.log("storageError::", storageError);
              });
        })
        .catch((err) => {
          setErrorMessage(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isValidForm, loginFormInputs, setAuthViewMode]);

  const onForgotPassword = useCallback(() => {
    setAuthViewMode("FORGET_PASSWORD");
  }, [setAuthViewMode]);

  const pwdValidation: any = validate.password(loginFormInputs.password);
  return (
    <Form errorMessage={errorMessage} hideDefaultAction>
      <View>
        <Input
          label={i18n.t('emailAddress')}
          onChange={(v) => onChange(v, "email")}
          placeholder={i18n.t('enterEmailAddress')}
          keyboardType={"email-address"}
          autoCapitalize={"none"}
          autoCorrect={false}
          value={loginFormInputs.email}
          center
          error={{
            show: showErrors,
            valid: validate.email(loginFormInputs.email),
          }}
        />
        <Input
          label={i18n.t('password')}
          onChange={(v) => onChange(v, "password")}
          placeholder={i18n.t('enterPassword')}
          password
          value={loginFormInputs.password}
          center
          error={{
            show: showErrors,
            valid: pwdValidation.valid,
            message: pwdValidation.message,
          }}
        />
        <Link
          text={i18n.t('forgetPassword')}
          onPress={() => onForgotPassword()}
          styles={{ ...textAlign.right }}
        />
        <Button
          title={i18n.t('sendOtp')}
          size={"large"}
          onPress={() => onSubmit()}
          loading={loading}
          disabled={!isValidForm()}
        />
      </View>
    </Form>
  );
}
