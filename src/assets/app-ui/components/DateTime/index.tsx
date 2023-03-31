import React, { useCallback, useState } from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import {
  FormFieldProps,
  InputErrorProps,
} from "../../../../submodule/common/interfaces/interfaces";
import { dateTimeStyles } from "./styles";
import CustomModal from "../CustomModal";
import DateTimePicker from "@react-native-community/datetimepicker";
import { formatDate } from "../../../../submodule/common/common";
interface Props {
  value: Date;
  withLabel?: boolean;
  label?: string;
  error?: InputErrorProps;
  onSelect?: (e: any) => void;
}
export default function DateTime({
  value,
  withLabel,
  label,
  onSelect,
  error,
}: Props) {
  const [showCalendar, setShowCalendar] = useState(false);
  const showCalendarModal = useCallback(() => {
    setShowCalendar(true);
  }, []);

  const date = !value ? new Date() : value;
  const formattedDate = formatDate(date);
  console.log("formattedDate:::", formattedDate);
  const hideCalendar = useCallback(() => {
    setShowCalendar(false);
  }, []);

  const onDateTimeSelect = useCallback(
    (date, selectedValue: Date) => {
      onSelect(selectedValue);
    },
    [onSelect]
  );

  const hightlightInputErrorStyle =
    error && error.show && !error.valid && dateTimeStyles.errorInput;
  return (
    <View style={dateTimeStyles.row}>
      {withLabel && (
        <View style={dateTimeStyles.label}>
          <Text>{label}</Text>
        </View>
      )}
      <TouchableOpacity
        onPress={() => showCalendarModal()}
        style={[dateTimeStyles.input, hightlightInputErrorStyle]}
      >
        <Text>{formattedDate.show}</Text>
      </TouchableOpacity>
      <CustomModal
        visible={showCalendar}
        onClose={hideCalendar}
        header={{ title: "Choose Date" }}
      >
        <View style={dateTimeStyles.calendar}>
          <DateTimePicker
            onChange={onDateTimeSelect}
            value={formattedDate.date ?? new Date()}
            mode={"date"}
            display="spinner"
            minimumDate={new Date()}
            style={{
              flex: 1,
            }}
          />
        </View>
      </CustomModal>
    </View>
  );
}
