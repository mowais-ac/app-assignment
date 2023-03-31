import { borderRadius, flexbox, shadows } from "../../_commons";
import { basecolor1, color } from "../../_variables";

export interface Props {
  row: any;
  box: any;
  attachLabel: any;
  label: any;
  attachOptions: any;
  attachButton: any;
  attachIcon: any;
  attachTxt: any;
  errorInput: any;
  preview: any;
  previewImg: any;
}
export const attachStyles: Props = {
  row: {
    marginVertical: 5,
    position: "relative",
  },
  box: {
    borderWidth: 1,
    borderColor: basecolor1.default,
    borderStyle: "dashed",
    height: 60,
    ...flexbox.alignItems.center,
    ...flexbox.justifyContent.center,
    ...borderRadius.default,
  },
  attachLabel: {
    color: basecolor1.default,
    marginBottom: 5,
  },
  label: {
    color: color.body,
    fontSize: 14,
  },
  attachOptions: {},
  attachButton: {
    width: 90,
    borderWidth: 1,
    borderColor: basecolor1.lighter,
    backgroundColor: color.white,
  },
  attachIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    opacity: 0.3,
  },
  attachTxt: {
    marginTop: 5,
  },
  errorInput: {},
  preview: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  previewImg: {
    width: 50,
    height: 50,
  },
};
