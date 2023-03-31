import { flexbox } from "../../_commons";
import { basecolor1, color } from "../../_variables";
export const dividerStyle: any = {
  wrap: {
    width: "100%",
    marginTop: 15,
    marginBottom: 10,
  },
  common: {
    width: "100%",
    height: 1,
    backgroundColor: basecolor1.light,
  },
  center: {
    ...flexbox.alignItems.center,
    ...flexbox.justifyContent.center,
  },
  centerInner: {
    width: 40,
  },
  stackLeft: {
    width: 40,
  },
};
