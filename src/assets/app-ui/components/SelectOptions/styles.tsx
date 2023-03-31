import { flexbox, shadows } from "../../_commons";
import { color } from "../../_variables";
import { inputStyles } from "../Input/styles";
interface Props {
  row: any;
  label: any;
  input: any;
  iconShowHidePwdWrap: any;
  iconShowHidePwd: any;
  errorInput: any;
  errorTxt: any;
  textCenter: any;
  optionsList: any;
  option: any;
  selectedOption: any;
  arrowDown: any;
}
export const selectStyles: Props = {
  row: {
    ...inputStyles.row,
  },
  label: {
    ...inputStyles.label,
  },
  input: {
    height: 44,
    backgroundColor: color.white,
    borderRadius: 6,
    paddingHorizontal: 16,
    ...shadows.input,
    ...flexbox.justifyContent.center,
  },
  iconShowHidePwdWrap: {
    position: "absolute",
    top: 14,
    right: 13,
  },
  iconShowHidePwd: {
    width: 18,
    height: 18,
    opacity: 0.4,
    backgroundPosition: "center",
  },
  // Errors
  errorInput: {
    borderWidth: 1,
    borderColor: color.brightRed,
  },
  errorTxt: {
    color: color.brightRed,
    fontSize: 13,
    ...flexbox.justifyContent.end,
    ...flexbox.directionRow,
    marginTop: 3,
  },
  textCenter: {
    textAlign: "center",
  },
  optionsList: {},
  option: {
    backgroundColor: color.white,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginVertical: 4,
    borderRadius: 6,
    ...shadows.input,
  },
  selectedOption: {},
  arrowDown: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 20,
    height: 20,
  },
};
