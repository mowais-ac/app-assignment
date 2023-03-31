import { flexbox } from "../../_commons";
import { basecolor1 } from "../../_variables";

export const styles: any = {
  wrap: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    paddingBottom: 6,
    backgroundColor: basecolor1.lightest,
  },
  logo: {
    width: 50,
    height: 50,
  },
  hamburger: {
    width: 26,
    height: 30,
    ...flexbox.directionColumn,
    ...flexbox.justifyContent.center,
  },
  bar: {
    height: 3,
    backgroundColor: basecolor1.darkest,
    marginVertical: 2,
  },
};
