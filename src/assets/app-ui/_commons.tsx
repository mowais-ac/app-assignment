import {
  FontWeightInterface,
  HeadingProps,
  MarginProps,
  PaddingProps,
  ShadowInterface,
} from "../../submodule/common/interfaces/interfaces_styles";
import { basecolor1, fSize, color } from "./_variables";

export const common: any = {
  container: {
    flex: 1,
    backgroundColor: basecolor1.lightest,
  },
  text: {
    color: "#fff",
  },
};

// Fonts
export const baseFontFamily: any = {
  heading: "Inter-SemiBold",
  body: "Inter-Regular",
  bold: "Inter-SemiBold",
  light: "Inter-Light",
  semiBold: "Inter-Medium",
};

export const fontWeight: FontWeightInterface = {
  heading: { fontFamily: baseFontFamily.heading },
  body: { fontFamily: baseFontFamily.body },
  bold: { fontFamily: baseFontFamily.bold },
  light: { fontFamily: baseFontFamily.light },
};

export const fontSize: any = {
  xsmall: { fontSize: fSize.xsmall },
  small: { fontSize: fSize.small },
  default: { fontSize: fSize.default },
  large: { fontSize: fSize.large },
  xlarge: { fontSize: fSize.xlarge },
};

// Heading
export const heading: HeadingProps = {
  one: {
    fontSize: 22,
  },
  two: {
    fontSize: 20,
  },
  three: {
    fontSize: 18,
  },
  four: {
    fontSize: 16,
  },
  five: {
    fontSize: 14,
  },
  six: {
    fontSize: 13,
  },
};

// Display
export const display: any = {
  flexbox: {
    display: "flex",
  },
  fluid: {
    width: "100%",
  },
};

export const flexbox: any = {
  one: { flex: 1 },
  two: { flex: 2 },
  three: { flex: 3 },
  four: { flex: 4 },
  five: { flex: 5 },
  six: { flex: 6 },
  seven: { flex: 7 },
  eight: { flex: 5 },
  nine: { flex: 9 },
  ten: { flex: 10 },
  eleven: { flex: 11 },
  twelve: { flex: 12 },
  inner: {},
  alignItems: {
    start: {
      alignItems: "flex-start",
    },
    center: {
      alignItems: "center",
    },
    end: {
      alignItems: "flex-end",
    },
  },
  justifyContent: {
    center: {
      justifyContent: "center",
    },
    start: {
      justifyContent: "flex-start",
    },
    end: {
      justifyContent: "flex-end",
    },
    spaceBetween: {
      justifyContent: "space-between",
    },
    spaceAround: {
      justifyContent: "space-around",
    },
    spaceEvenly: {
      justifyContent: "space-evenly",
    },
    stretch: {
      justifyItems: "stretch",
    },
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  directionRow: {
    flexDirection: "row",
  },
  directionRowReverse: {
    flexDirection: "row-reverse",
  },
  directionColumn: {
    flexDirection: "column",
  },
  shrinkOne: {
    flexShrink: 1,
  },
  flexGrowOne: {
    one: 1,
  },
};

export const borderRadius: any = {
  min: {
    borderRadius: 6,
    overflow: "hidden",
  },
  default: {
    borderRadius: 10,
    overflow: "hidden",
  },
  max: {
    borderRadius: 20,
    overflow: "hidden",
  },
  full: {
    borderRadius: 200,
  },
};

export const loading: any = {
  spinnerTextStyle: {
    color: "#FFF",
    fontFamily: baseFontFamily.bold,
  },
};

export const shadow: any = {
  one: {
    shadowRadius: 5,
    shadowOpacity: 0.07,
    shadowColor: basecolor1.default,
    shadowOffset: { width: 0, height: 2 },
  },
};

export const gradient1: any = {
  color1: "#4064a6",
  color2: "#4cbeea",
};

export const gradient2: any = {
  color1: "#880281",
  color2: "#cd0e88",
};

export const base: any = {
  defaultShadow: {
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: basecolor1.light,
    shadowOpacity: 0.8,
  },
};

export const textDecoration: any = {
  underline: {
    textDecorationLine: "underline",
  },
  lineThorough: {
    textDecorationLine: "line-through",
  },
};

export const fontColor: any = {
  body: {
    color: color.body,
  },
  white: {
    color: color.white,
  },
  black: {
    color: color.black,
  },
  lime: {
    color: color.lime,
  },
  red: {
    color: color.red,
  },
  brightRed: {
    color: color.brightRed,
  },
  blue: {
    color: color.blue,
  },
  darkBlue: {
    color: color.darkBlue,
  },
  cyan: {
    color: color.cyan,
  },
  darkCyan: {
    color: color.darkCyan,
  },
  yellow: {
    color: color.yellow,
  },
  orange: {
    color: color.orange,
  },
  green: {
    color: color.green,
  },
  darkGreen: {
    color: color.darkGreen,
  },
  success: {
    color: color.success,
  },
  successLight: {
    color: color.successLight,
  },
  info: {
    color: color.info,
  },
  warning: {
    color: color.warning,
  },
  danger: {
    color: color.danger,
  },
  facebook: {
    color: color.facebook,
  },
  twitter: {
    color: color.twitter,
  },
  linkedin: {
    color: color.linkedin,
  },
  googleplus: {
    color: color.googleplus,
  },
  vimeo: {
    color: color.vimeo,
  },
  youtube: {
    color: color.youtube,
  },
  lightgray: {
    color: color.lightgray,
  },
  lightergray: {
    color: color.lightergray,
  },
  lightestgray: {
    color: color.lightestgray,
  },
  lightestergray: {
    color: color.lightestergray,
  },
  basecolor1: {
    default: { color: basecolor1.default },
    light: { color: basecolor1.light },
    lighter: { color: basecolor1.lighter },
    lightest: { color: basecolor1.lightest },
    dark: { color: basecolor1.dark },
    darker: { color: basecolor1.darker },
    darkerTransparent: { color: basecolor1.darkerTransparent },
    darkest: { color: basecolor1.darkest },
  },
};

export const btnUpload: any = {
  box: {
    borderWidth: 1,
    borderStyle: "dashed",
    marginVertical: 10,
    borderColor: basecolor1.default,
    padding: 20,
    borderRadius: 10,
    backgroundColor: color.white,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: basecolor1.light,
    shadowOpacity: 1,
    ...flexbox.alignItems.center,
    ...flexbox.justifyContent.center,
  },
  text: {
    fontSize: 20,
    color: basecolor1.default,
  },
  icon: {
    width: 40,
    height: 40,
  },
};

const dividerCommon = {
  height: 1,
  backgroundColor: basecolor1.light,
  marginVertical: 20,
};
export const divider: any = {
  wrap: {},
  default: {},
  fullWrap: {},
  full: {
    ...dividerCommon,
  },
  centerWrap: {
    ...display.flexbox,
    ...flexbox.directionRow,
    ...flexbox.justifyContent.center,
    ...flexbox.alignItems.center,
  },
  center: {
    width: 30,
    ...dividerCommon,
  },
};

// Testing
export const testCommon: any = {
  common: {
    borderWidth: 2,
  },
};
export const test: any = {
  red: {
    ...testCommon.common,
    borderColor: "red",
  },
  orange: {
    ...testCommon.common,
    borderColor: "orange",
  },
  cyan: {
    ...testCommon.common,
    borderColor: "cyan",
  },
  blue: {
    ...testCommon.common,
    borderColor: "blue",
  },
  yellow: {
    ...testCommon.common,
    borderColor: "yellow",
  },
};

// Align
export const textAlign: any = {
  left: {
    textAlign: "left",
  },
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
};

// Margin
export const margin: MarginProps = {
  no: {
    margin: 0,
  },
  horizontal0: {
    marginHorizontal: 0,
  },
  vertivalNo: {
    marginVertical: 0,
  },
  horizontal5: {
    marginHorizontal: 5,
  },
  horizontal10: {
    marginHorizontal: 10,
  },
  horizontal15: {
    marginHorizontal: 15,
  },
  horizontal20: {
    marginHorizontal: 20,
  },
  vertical5: {
    marginVertical: 5,
  },
  vertical10: {
    marginVertical: 10,
  },
  vertical15: {
    marginVertical: 15,
  },
  vertical20: {
    marginVertical: 20,
  },
  vertical25: {
    marginVertical: 25,
  },
  vertical30: {
    marginVertical: 30,
  },
  vertical35: {
    marginVertical: 35,
  },
  vertical40: {
    marginVertical: 40,
  },
  top5: { marginTop: 5 },
  top10: { marginTop: 10 },
  top15: { marginTop: 15 },
  top20: { marginTop: 20 },
  top25: { marginTop: 25 },
  top30: { marginTop: 30 },
  top35: { marginTop: 35 },
  top40: { marginTop: 40 },
  top45: { marginTop: 45 },
  top50: { marginTop: 50 },
  top55: { marginTop: 55 },
  top60: { marginTop: 60 },

  bottom5: { marginBottom: 5 },
  bottom10: { marginBottom: 10 },
  bottom15: { marginBottom: 15 },
  bottom20: { marginBottom: 20 },
  bottom25: { marginBottom: 25 },
  bottom30: { marginBottom: 30 },
  bottom35: { marginBottom: 35 },
  bottom40: { marginBottom: 40 },
  bottom45: { marginBottom: 45 },
  bottom50: { marginBottom: 50 },
  bottom55: { marginBottom: 55 },
  bottom60: { marginBottom: 60 },
};

export const fade: any = {
  no: {
    opacity: 0,
  },
  low: {
    opacity: 0.3,
  },
  medium: {
    opacity: 0.5,
  },
  high: {
    opacity: 0.7,
  },
};

// Padding
export const padding: PaddingProps = {
  no: {
    padding: 0,
  },
  horizontalNo: {
    paddingHorizontal: 0,
  },
  vertivalNo: {
    paddingVertical: 0,
  },
  horizontalFive: {
    paddingHorizontal: 5,
  },
  horizontalTen: {
    paddingHorizontal: 10,
  },
  horizontalFifteen: {
    paddingHorizontal: 15,
  },
  horizontalTwenty: {
    paddingHorizontal: 20,
  },
  horizontalThirty: {
    paddingHorizontal: 30,
  },
  horizontalForty: {
    paddingHorizontal: 40,
  },
  verticalFive: {
    paddingVertical: 5,
  },
  verticalTen: {
    paddingVertical: 10,
  },
  verticalFifteen: {
    paddingVertical: 15,
  },
  verticalTwenty: {
    paddingVertical: 20,
  },
  five: { padding: 5 },
  eight: { padding: 8 },
  ten: { padding: 10 },
  fifteen: { padding: 15 },
  twenty: { padding: 20 },
  twentyfive: { padding: 25 },

  top0: { paddingTop: 0 },
  top5: { paddingTop: 5 },
  top10: { paddingTop: 10 },
  top15: { paddingTop: 15 },
  top20: { paddingTop: 20 },
  top25: { paddingTop: 25 },
  top30: { paddingTop: 30 },
  top35: { paddingTop: 35 },

  bottom0: { paddingBottom: 0 },
  bottom5: { paddingBottom: 5 },
  bottom10: { paddingBottom: 10 },
  bottom15: { paddingBottom: 15 },
  bottom20: { paddingBottom: 20 },
  bottom25: { paddingBottom: 25 },
  bottom30: { paddingBottom: 30 },
  bottom35: { paddingBottom: 35 },

  right0: { paddingRight: 0 },
  right5: { paddingRight: 5 },
  right10: { paddingRight: 10 },
  right15: { paddingRight: 15 },
  right20: { paddingRight: 20 },
  right25: { paddingRight: 25 },
  right30: { paddingRight: 30 },
  right35: { paddingRight: 35 },

  left0: { paddingLeft: 0 },
  left5: { paddingLeft: 5 },
  left10: { paddingLeft: 10 },
  left15: { paddingLeft: 15 },
  left20: { paddingLeft: 20 },
  left25: { paddingLeft: 25 },
  left30: { paddingLeft: 30 },
  left35: { paddingLeft: 35 },
};

export const shadows: ShadowInterface = {
  input: {
    shadowColor: basecolor1.light,
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
};
