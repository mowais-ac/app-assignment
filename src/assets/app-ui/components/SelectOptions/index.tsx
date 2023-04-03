import React, { useCallback, useEffect, useState } from "react";
import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import {
  FormFieldProps,
  InputErrorProps,
  SelectProps,
} from "../../../../submodule/common/interfaces/interfaces";
import { selectStyles } from "./styles";
import CustomModal from "../CustomModal";
import DateTimePicker from "@react-native-community/datetimepicker";
import { formatDate } from "../../../../submodule/common/common";
import Button from "../Button";
import { flexbox } from "../../_commons";
import { icon_arrow_down } from "../../img";
import { styles } from "../main";
import i18n from "../../../../i18n/i18n";
interface Props {
  withLabel?: boolean;
  placeholder?: string;
  label?: string;
  options?: SelectProps[];
  error?: InputErrorProps;
  selected?: string | number | boolean | SelectProps;
  onSelect?: (selected: SelectProps) => void;
}
export default function SelectOptions({
  withLabel,
  placeholder,
  label,
  options = [],
  error,
  onSelect,
  selected,
}: Props) {
  const [showOptions, setShowOptions] = useState(false);
  const showOptionsModal = useCallback(() => {
    setShowOptions(true);
  }, []);

  const hideOptions = useCallback(() => {
    setShowOptions(false);
  }, []);

  const onOptionPress = useCallback(
    (option: SelectProps) => {
      setShowOptions(false);
      onSelect(option);
    },
    [onSelect]
  );

  const selectedOption: SelectProps = options.find((i) => i.value === selected);
  const hightlightInputErrorStyle =
    error && error.show && !error.valid && selectStyles.errorInput;
  return (
    <View style={selectStyles.row}>
      {withLabel && (
        <View style={[selectStyles.label, (i18n.isRtl && flexbox.alignItems.end)]}>
          <Text>{label}</Text>
        </View>
      )}
      <TouchableOpacity
        onPress={() => showOptionsModal()}
        style={[selectStyles.input, hightlightInputErrorStyle]}
      >
        <Text>{selectedOption?.label ?? i18n.t("pleaseSelect")}</Text>
        <Image source={icon_arrow_down} style={[selectStyles.arrowDown]} />
      </TouchableOpacity>
      <CustomModal
        visible={showOptions}
        onClose={hideOptions}
        header={{ title: `${label}` }}
      >
        <View style={selectStyles.optionsList}>
          {options.map((option: SelectProps, i: number) => {
            const isSelected = selectedOption?.value === option.value;
            return (
              <TouchableOpacity
                key={i}
                onPress={() => onOptionPress(option)}
                style={[
                  selectStyles.option,
                  isSelected && selectStyles.selectedOption,
                  flexbox.directionRow,
                  flexbox.alignItems.center,
                  flexbox.justifyContent.spaceBetween,
                ]}
              >
                <Text>{option.label}</Text>
                <Button
                  title={isSelected ? i18n.t("selected") : i18n.t("select")}
                  size={"mini"}
                  color={"bc1Lightest"}
                  onPress={() => onOptionPress(option)}
                ></Button>
              </TouchableOpacity>
            );
          })}
        </View>
      </CustomModal>
    </View>
  );
}
