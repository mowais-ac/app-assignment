import i18n from "../../i18n/i18n";
import { Route } from "./interfaces/interface_route";

export const routes = {
  root: "root",
  dashboard: i18n.t("dashboard"),
  profile: i18n.t("profile"),
  transactions: i18n.t("transactions"),
  notifications: i18n.t("notifications"),
};

export const authRoute = {
  auth: "Auth",
  support: "Support",
  faqs: "FAQs",
};
