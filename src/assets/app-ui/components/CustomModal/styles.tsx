import { display, flexbox, fontWeight } from "../../_commons";
import { basecolor1, color } from "../../_variables";
export const modalStyle: any = {
  modal: {
    margin: 0,
    paddingHorizontal: 10,
  },
  wrap: {
    flex: 1,
    ...flexbox.directionRow,
    ...flexbox.alignItems.end,
  },
  innerWrap: {
    width: "100%",
  },
  box: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: basecolor1.lightest,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 14,
    ...display.fluid,
  },
  header: {
    wrap: {
      marginBottom: 10,
    },
    title: {
      ...fontWeight.bold,
    },
    description: {},
  },
  closeTxt: {
    paddingTop: 20,
    padding: 10,
  },
};
