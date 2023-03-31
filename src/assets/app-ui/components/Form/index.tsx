import { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import {
  FIELD_ATTACH,
  FIELD_CHECKBOX,
  FIELD_DATE,
  FIELD_DATETIME,
  FIELD_EMAIL,
  FIELD_INPUT,
  FIELD_NUMBER,
  FIELD_PHONE,
  FIELD_RADIO,
  FIELD_SEARCH,
  FIELD_SELECT,
  FIELD_TEXTAREA,
  FIELD_TIME,
} from "../../../../submodule/common/constants";
import {
  FormError,
  FormFieldProps,
  SelectProps,
} from "../../../../submodule/common/interfaces/interfaces";
import Input from "../Input";
import Attach from "../Attach";
import { formStyles } from "./styles";
interface Props {
  fields?: FormFieldProps[];
  actions?: any;
  style?: any;
  children?: JSX.Element | JSX.Element[];
  withLabel?: boolean;
  errorMessage?: FormError;
  buttonLabel?: string;
  hideDefaultAction?: boolean;
  onSubmit?: () => void;
}
import Button from "../Button";
import DateTime from "../DateTime";
import SelectOptions from "../SelectOptions";
import { formatDate, validate } from "../../../../submodule/common/common";

export default function Form({
  style,
  children,
  actions,
  fields,
  withLabel,
  errorMessage,
  buttonLabel,
  hideDefaultAction,
  onSubmit,
}: Props) {
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [formFields, setFormFields] = useState<FormFieldProps[]>(fields);
  // const [errorMessage, setErrorMessage] = useState<FormError>(null);

  const onChange = useCallback(
    (v: string, name: string, idx: number) => {
      const formFieldsArr: FormFieldProps[] = [...formFields];
      formFieldsArr[idx].value = v;
      setFormFields(formFieldsArr);
    },
    [formFields]
  );

  const onOptionSelect = useCallback(
    (selectedOption: SelectProps, field: FormFieldProps, idx: number) => {
      const formFieldsArr: FormFieldProps[] = [...formFields];
      formFieldsArr[idx].selectedOption = selectedOption;
      setFormFields(formFieldsArr);
    },
    [formFields]
  );

  const onDateTimeSelect = useCallback(
    (date: Date, field: FormFieldProps, idx: number) => {
      const formFieldsArr: FormFieldProps[] = [...formFields];
      const formattedDate = formatDate(date);
      formFieldsArr[idx].date = formattedDate.date;
      formFieldsArr[idx].value = formattedDate.show;
      setFormFields(formFieldsArr);
    },
    [formFields]
  );

  const isValidForm = useCallback(() => {
    let isValid = false;
    if (fields && fields.length) {
      const requiredFields =
        fields && fields.length && fields.filter((i) => i.required);
      const hasEmpty = requiredFields?.filter((i) => !i.value);
      if (!hasEmpty && !hasEmpty.length) {
        requiredFields.map((field) => {
          if (field.type == FIELD_EMAIL) {
            validate.email(field.value);
          } else if (field.type === FIELD_SELECT) {
            isValid = !field.selectedOption;
          } else {
            isValid = validate.empty(field.value);
          }
          return isValid;
        });
      }
    } else {
      isValid = true;
    }
    // const isValid =
    //   validate.email(loginFormInputs.email) &&
    //   validate.password(loginFormInputs.password).valid;
    // return isValid;
    return isValid;
  }, [fields]);

  const onSubmitPress = useCallback(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <View style={[formStyles.wrap]}>
      {errorMessage && (
        <View style={formStyles.errorMessageWrap}>
          <Text style={formStyles.errorMessage}>{errorMessage.message}</Text>
        </View>
      )}
      {formFields?.length &&
        formFields.map((field: FormFieldProps, i: number) => {
          // is valid
          let isValid = true;
          if (field.required) {
            if (field.type === FIELD_EMAIL) {
              isValid = validate.email(field.value);
            } else if (field.type === FIELD_SELECT) {
              isValid = !!field.selectedOption;
            } else {
              isValid = !validate.empty(field.value);
            }
          }

          // If depency valid
          const dependancy = field.dependancy;
          let isDependencySelected: any = false;
          const depField = formFields.find((i) => i.name === dependancy);
          if (depField?.type === FIELD_SELECT) {
            isDependencySelected = depField?.selectedOption?.value;
          }

          if (!dependancy || (dependancy && isDependencySelected)) {
            return (
              <View key={i} style={formStyles.fieldGroup}>
                {field.type === FIELD_INPUT ? (
                  <Input
                    onChange={(value) => onChange(value, field.name, i)}
                    placeholder={field.placeholder}
                    value={field.value}
                    label={field.label}
                    withLabel={withLabel}
                    error={{
                      show: showErrors,
                      valid: isValid,
                    }}
                  />
                ) : field.type === FIELD_EMAIL ? (
                  <Input
                    onChange={(value) => onChange(value, field.name, i)}
                    placeholder={field.placeholder}
                    value={field.value}
                    label={field.label}
                    withLabel={withLabel}
                    keyboardType={"email-address"}
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoComplete={"email"}
                    error={{
                      show: showErrors,
                      valid: isValid,
                    }}
                  />
                ) : field.type === FIELD_TEXTAREA ? (
                  <Input
                    onChange={(value) => onChange(value, field.name, i)}
                    placeholder={field.placeholder}
                    value={field.value}
                    label={field.label}
                    withLabel={withLabel}
                    error={{
                      show: showErrors,
                      valid: isValid,
                    }}
                  />
                ) : field.type === FIELD_DATE ? (
                  <DateTime
                    value={new Date(field.value)}
                    label={field.label}
                    withLabel={withLabel}
                    error={{
                      show: showErrors,
                      valid: isValid,
                    }}
                    onSelect={(date) => onDateTimeSelect(date, field, i)}
                  />
                ) : field.type === FIELD_TIME ? (
                  <DateTime
                    value={new Date(field.value)}
                    label={field.label}
                    withLabel={withLabel}
                    error={{
                      show: showErrors,
                      valid: isValid,
                    }}
                  />
                ) : field.type === FIELD_DATETIME ? (
                  <DateTime
                    value={new Date(field.value)}
                    label={field.label}
                    withLabel={withLabel}
                    error={{
                      show: showErrors,
                      valid: isValid,
                    }}
                  />
                ) : field.type === FIELD_SEARCH ? (
                  <Input
                    onChange={(value) => onChange(value, field.name, i)}
                    placeholder={field.placeholder}
                    value={field.value}
                    label={field.label}
                    withLabel={withLabel}
                    error={{
                      show: showErrors,
                      valid: isValid,
                    }}
                  />
                ) : field.type === FIELD_PHONE ? (
                  <Input
                    onChange={(value) => onChange(value, field.name, i)}
                    placeholder={field.placeholder}
                    value={field.value}
                    label={field.label}
                    withLabel={withLabel}
                    keyboardType={"phone-pad"}
                    error={{
                      show: showErrors,
                      valid: isValid,
                    }}
                  />
                ) : field.type === FIELD_NUMBER ? (
                  <Input
                    onChange={(value) => onChange(value, field.name, i)}
                    placeholder={field.placeholder}
                    value={field.value}
                    label={field.label}
                    withLabel={withLabel}
                    error={{
                      show: showErrors,
                      valid: isValid,
                    }}
                  />
                ) : field.type === FIELD_SELECT ? (
                  <SelectOptions
                    onSelect={(opt) => onOptionSelect(opt, field, i)}
                    placeholder={field.placeholder}
                    label={field.label}
                    withLabel={withLabel}
                    error={{
                      show: showErrors,
                      valid: isValid,
                    }}
                    options={field.options}
                    selected={field.selectedOption}
                  />
                ) : field.type === FIELD_ATTACH ? (
                  <Attach
                    onSelect={(value) => onChange(value, field.name, i)}
                    value={field.value}
                    label={field.label}
                    error={{
                      show: showErrors,
                      valid: isValid,
                    }}
                  />
                ) : null}
              </View>
            );
          }
        })}
      {children}
      {!hideDefaultAction && (
        <Button
          title={buttonLabel ?? "Save"}
          size={"large"}
          onPress={() => onSubmitPress()}
          loading={loading}
          disabled={!isValidForm()}
        />
      )}
      {actions}
    </View>
  );
}
