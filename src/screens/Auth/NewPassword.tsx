import { View } from "react-native";
import { useCallback, useState } from "react";
import Input from "../../assets/app-ui/components/Input";
import Button from "../../assets/app-ui/components/Button";
import { ApiResetConfirm } from "../../submodule/common/apis/api";
import { useSharedState } from "../../submodule/common/use-shared-state";
import {
  AUTH_VIEW_MODES,
  FormError,
} from "../../submodule/common/interfaces/interfaces";
import {
  k_token,
  PROFILE_TYPE_BUSINESS,
  ss_auth_view_mode,
  ss_reset_password_token,
} from "../../submodule/common/constants";
import { validate } from "../../submodule/common/common";
import Form from "../../assets/app-ui/components/Form";

export default function NewPassword() {
  const [authViewMode, setAuthViewMode] =
    useSharedState<AUTH_VIEW_MODES>(ss_auth_view_mode);

  const [resetPasswordToken, setResetPasswordToken] = useSharedState<string>(
    ss_reset_password_token
  );
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState<FormError>(null);

  const [newPasswordInputs, setNewPasswordInputs] = useState({
    password: "",
    profileType: PROFILE_TYPE_BUSINESS,
  });
  const [showErrors, setShowErrors] = useState<boolean>(false);

  const onChange = useCallback(
    (value: string, name: string) => {
      const inputVal = { ...newPasswordInputs };
      inputVal[name] = value;
      setNewPasswordInputs(inputVal);
    },
    [newPasswordInputs, setNewPasswordInputs]
  );

  const isValidForm = useCallback(() => {
    const isValid = validate.password(newPasswordInputs.password).valid;
    return isValid;
  }, [newPasswordInputs]);

  const onSubmit = useCallback(() => {
    if (!isValidForm()) {
      setShowErrors(true);
    } else {
      setLoading(true);
      newPasswordInputs[k_token] = resetPasswordToken;
      ApiResetConfirm(newPasswordInputs)
        .then((res) => {
          console.log("login res:::", res);
          setAuthViewMode("LOGIN");
        })
        .catch((err) => {
          console.log("err:::", err);
          setErrorMessage(err);
          setTimeout(() => {
            setErrorMessage(null);
          }, 3000);
        })
        .finally(() => {
          console.log("request done");
          setLoading(false);
        });
    }
  }, [isValidForm, newPasswordInputs, resetPasswordToken, setAuthViewMode]);

  const pwdValidation: any = validate.password(newPasswordInputs.password);
  return (
    <Form errorMessage={errorMessage} hideDefaultAction>
      <View>
        <Input
          label={"Password"}
          onChange={(v) => onChange(v, "password")}
          placeholder={"Enter new password"}
          password
          value={newPasswordInputs.password}
          error={{
            show: showErrors,
            valid: pwdValidation.valid,
            message: pwdValidation.message,
          }}
        />
        <Button
          title={"Reset Password"}
          size={"large"}
          onPress={() => onSubmit()}
          loading={loading}
          disabled={!isValidForm()}
        />
      </View>
    </Form>
  );
}
