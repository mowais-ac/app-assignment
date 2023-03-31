import { fontWeight } from "../../assets/app-ui/_commons";
import { basecolor1, color } from "../../assets/app-ui/_variables";

export const styles: any = {
  actionRequiredWrap: {
    backgroundColor: "transparent",
  },
  actionRequiredBox: {
    padding: 10,
    backgroundColor: basecolor1.lighter,
    borderRadius: 6,
  },
  section: {
    backgroundColor: color.white,
    padding: 15,
    marginBottom: 3,
  },
  dashboardSection: {},
  ctaBoxWrap: {
    borderWidth: 1,
  },
  reqLists: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  reqBoxWwrap: {
    width: "50%",
    padding: 3,
  },
  reqBox: {
    backgroundColor: basecolor1.lightest,
    padding: 15,
    borderRadius: 6,
  },
  quantity: {
    fontSize: 22,
    color: color.body,
    marginBottom: 5,
    ...fontWeight.bold,
  },
  title: {
    fontSize: 15,
    color: color.body,
  },
};
