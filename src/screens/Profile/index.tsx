import { useCallback, useState } from "react";
import { RefreshControl, ScrollView, Text } from "react-native";
import Attach from "../../assets/app-ui/components/Attach";
import DateTime from "../../assets/app-ui/components/DateTime";
import Form from "../../assets/app-ui/components/Form";
import Input from "../../assets/app-ui/components/Input";
import SelectOptions from "../../assets/app-ui/components/SelectOptions";
import Main from "../../components/Main";
import i18n from "../../i18n/i18n";
import { validate } from "../../submodule/common/common";
import {
  FIELD_ATTACH,
  FIELD_DATE,
  FIELD_EMAIL,
  FIELD_INPUT,
  FIELD_NUMBER,
  FIELD_PHONE,
  FIELD_SELECT,
  ss_profile_form_inputs,
} from "../../submodule/common/constants";
import {
  ENUM_GENDER,
  ENUM_INPUT_TYPE,
  FileProps,
  FormFieldProps,
  ProfileFormProps,
  SelectProps,
} from "../../submodule/common/interfaces/interfaces";
import { useSharedState } from "../../submodule/common/use-shared-state";
import { ProfileController } from "../../submodule/controllers/ProfileController";

export default function Profile() {
  const [profileFormInputs, setProfileFormInputs] =
    useSharedState<ProfileFormProps>(ss_profile_form_inputs, {
      email_address: "",
      phone_number: null,
      website_url: "",
      registration_number: "",
      date: new Date(),
      attach_document_1: null,
      attach_document_2: null,
      gender: ENUM_GENDER.MALE,
    });
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const onRefresh = useCallback(() => {
    console.log(1231312);
  }, []);

  const onChange = useCallback(
    (value: string, name: string) => {
      const inputVal = { ...profileFormInputs };
      inputVal[name] = value;
      setProfileFormInputs(inputVal);
    },
    [profileFormInputs, setProfileFormInputs]
  );

  const [loading, setLoading] = useState(false);

  const onSelect = useCallback(
    (selected: SelectProps, name: string) => {
      const inputVal = { ...profileFormInputs };
      inputVal[name] = selected.value;
      setProfileFormInputs(inputVal);
    },
    [profileFormInputs, setProfileFormInputs]
  );

  const onSelectFile = useCallback(
    (file: FileProps, name: string) => {
      const inputVal = { ...profileFormInputs };
      inputVal[name] = file;
      setProfileFormInputs(inputVal);
    },
    [profileFormInputs, setProfileFormInputs]
  );

  const isValidForm = useCallback(() => {
    const profile = new ProfileController();
    return profile.validate(profileFormInputs);
  }, [profileFormInputs]);

  const onSubmit = useCallback(() => {
    
    console.log("isValidForm():::", isValidForm());
    
    if (!isValidForm()) {
      setShowErrors(true);
    } else {
      setLoading(true);
      // ApiLogin(loginFormInputs)
      //   .then((res) => {
      //     console.log("login res:::", res);
      //     setAuthViewMode("LOGIN_OTP");
      //   })
      //   .catch((err) => {
      //     setErrorMessage(err);
      //   })
      //   .finally(() => {
      //     console.log("request done");
      //     setLoading(false);
      //   });
    }
  }, [isValidForm]);

  return (
    <Main subheader={{ title: "My Profile", description: "" }}>
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
        <Form
          withLabel
          buttonLabel={"Save Profile"}
          onSubmit={() => onSubmit()}
        >
          <Input
            label={i18n.t("emailAddress")}
            withLabel
            onChange={(v) => onChange(v, "email_address")}
            placeholder={i18n.t("emailAddress")}
            value={profileFormInputs.email_address}
            error={{
              show: showErrors,
              valid: validate.email(profileFormInputs.email_address),
            }}
          />
          <Input
            label={"Phone Number"}
            withLabel
            onChange={(v) => onChange(v, "phone_number")}
            placeholder={"phone number"}
            value={profileFormInputs.phone_number?.toString()}
            type={ENUM_INPUT_TYPE.PHONE}
            error={{
              show: showErrors,
              valid: validate.phone(profileFormInputs.phone_number),
            }}
          />
          <SelectOptions
            label={"Gender"}
            withLabel
            onSelect={(selected) => onSelect(selected, "gender")}
            options={[
              {
                label: "Male",
                value: ENUM_GENDER.MALE,
              },
              {
                label: "Female",
                value: ENUM_GENDER.FEMALE,
              },
            ]}
            placeholder={"Gender"}
            selected={profileFormInputs.gender}
            error={{
              show: showErrors,
              valid: !validate.empty(profileFormInputs.gender),
            }}
          />
          <Input
            label={"Website URL"}
            withLabel
            onChange={(v) => onChange(v, "website_url")}
            placeholder={"website url"}
            value={profileFormInputs.website_url}
            error={{
              show: showErrors,
              valid: !validate.url(profileFormInputs.website_url),
            }}
            keyboardType={"url"}
            autoCapitalize="none"
          />
          
          <DateTime
            label={"Expiry Date"}
            withLabel
            onSelect={(selected) =>
              onSelect(selected, "date")
            }
            value={profileFormInputs.date}
            error={{
              show: showErrors,
              valid: false,
            }}
          />
          <Attach
            label={"Document 1"}
            onSelect={(v) => onSelectFile(v, "attach_document_1")}
            file={profileFormInputs.attach_document_1}
            error={{
              show: showErrors,
              valid: false,
            }}
          />
          <Attach
            label={"Document 2"}
            onSelect={(v) => onSelectFile(v, "attach_document_2")}
            file={profileFormInputs.attach_document_2}
            error={{
              show: showErrors,
              valid: false,
            }}
          />
        </Form>
      </ScrollView>
    </Main>
  );
}
