import { basecolor1, color } from "../_variables";
import { flexbox } from "../_commons";

/**
 * Parent auth component <AuthMain></AuthMain>
 */
export const authMain: any = {
  wrapper: {
    flex: 1,
    backgroundColor: basecolor1.lightest,
    alignItems: "center",
    justifyContent: "center",
    direction: "row",
  },
};

// Auth screen
export const authStyle = {
  contentArea: {},
  contentInner: {
    width: "68%",
  },
  logo: {
    width: 190,
    height: 60,
    
  },
  txt: {
    color: color.body,
    fontSize: 15,
  },
  getStarted: {
    marginTop: 20,
  },
};

export const loginStyle = {};
