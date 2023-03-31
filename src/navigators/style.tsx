import { basecolor1, color } from "../assets/app-ui/_variables";

export const styles: any = {
  bottomTab: {
    icon: {
      width: 24,
      height: 24,
    },
    labelStyle: {},
    inActiveLabelColor: color.body,
    activeLabelColor: basecolor1.default,
  },
  drawer: {
    position: "left",
    positionRtl: "right",
    wrap: {
      backgroundColor: color.white,
    },
    overlayColor: "rgba(135, 132, 125, 0.4)",
    drawerItem: {
      backgroundColor: basecolor1.lightest,
      height: "auto",
    },
    drawerItemFocused: {
      backgroundColor: basecolor1.default,
    },
    drawerLabelFocused: {
      color: color.white,
    },
    logout: {
      paddingHorizontal: 15,
      paddingVertical: 12,
      borderTopWidth: 1,
      borderTopColor: basecolor1.lightest,
      marginTop: 10,
    },
    logoutTxt: {
      fontSize: 14,
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 5,
      overflow: "hidden",
      backgroundColor: basecolor1.lightest,
    },
  },
};
