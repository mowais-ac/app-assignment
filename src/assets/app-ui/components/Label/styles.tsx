import { display, flexbox, fontWeight } from "../../_commons";
import { basecolor1, color } from "../../_variables";
export const labelStyle: any = {
  wrap: {
    ...display.fluid,
    marginVertical: 2,
  },
  common: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
    ...flexbox.alignItems.center,
  },
  primary: {
    backgroundColor: basecolor1.default,
  },
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
  smallFont: { fontSize: 16 },
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
    fontSize: 13,
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
  whiteColorFont: {
    color: color.body,
  },

  // Lighter
  lighterColor: {
    backgroundColor: basecolor1.lighter,
  },
  lighterColorFont: {
    color: color.body,
  },

  // Black
  blackColor: {
    backgroundColor: color.black,
  },
  blackColorFont: {
    color: basecolor1.default,
  },
};
