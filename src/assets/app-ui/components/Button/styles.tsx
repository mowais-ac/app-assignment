import { ButtonInterface } from "../../../../submodule/common/interfaces/interfaces_styles";
import { display, flexbox, fontWeight } from "../../_commons";
import { basecolor1, color } from "../../_variables";
export const buttonStyle: ButtonInterface = {
  wrap: {
    marginVertical: 6,
    position: "relative",
  },
  common: {
    borderRadius: 100,
    paddingHorizontal: 10,
    ...flexbox.alignItems.center,
  },
  primary: {
    backgroundColor: basecolor1.default,
  },
  fluidWrap: { ...display.fluid },
  fluid: { ...display.fluid },

  // Basic
  basic: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: basecolor1.default,
  },

  // Sizes
  mini: { paddingVertical: 6 },
  tiny: { paddingVertical: 8 },
  small: { paddingVertical: 9 },
  default: {
    paddingVertical: 12,
  },
  large: { paddingVertical: 14 },
  big: { paddingVertical: 15 },

  miniFont: { fontSize: 13 },
  tinyFont: { fontSize: 15 },
  smallFont: { fontSize: 15 },
  defaultFont: {
    fontSize: 15,
  },
  largeFont: { fontSize: 17 },
  bigFont: { fontSize: 20 },

  /**
   * Fonts
   */
  // font common
  commonText: {
    ...fontWeight.bold,
    textTransform: "uppercase",
  },
  commonMiniText: {
    ...fontWeight.body,
    textTransform: "uppercase",
  },

  // Basic
  basicFont: {
    color: basecolor1.default,
  },
  // White
  whiteColor: {
    backgroundColor: color.white,
  },
  primaryColorFont: {
    color: color.white,
  },
  whiteColorFont: {
    color: basecolor1.default,
  },
  // bc1Light
  bc1LightColor: {
    backgroundColor: basecolor1.light,
  },
  bc1LightColorFont: {
    color: color.white,
  },
  // bc1Lighter
  bc1LighterColor: {
    backgroundColor: basecolor1.lighter,
  },
  bc1LighterColorFont: {
    color: basecolor1.lighter,
  },
  // bc1Lightest
  bc1LightestColor: {
    backgroundColor: basecolor1.lightest,
  },
  bc1LightestColorFont: {
    color: basecolor1.default,
  },

  // Loading
  spinnerWrap: {
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 100,
    opacity: 0.9,
  },

  // disabled
  disabled: {
    opacity: 0.6,
  },
};
