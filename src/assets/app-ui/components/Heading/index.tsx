import React from "react";
import { Text, View } from "react-native";
import i18n from "../../../../i18n/i18n";
import { heading_types } from "../../../../submodule/common/constants";
import {
  HEADING_COLORS_INTERFACE,
  HEADING_INTERFACE,
} from "../../../../submodule/common/interfaces/interfaces";
import { textAlign } from "../../_commons";
import { headingStyles } from "./styles";

interface Props {
  title: string;
  type: HEADING_INTERFACE;
  color?: HEADING_COLORS_INTERFACE;
  invert?: boolean;
}
export default function Heading({ title, type = "h1", invert = false }: Props) {
  const headingType =
    type === heading_types.h1
      ? headingStyles.h1
      : type === heading_types.h2
      ? headingStyles.h2
      : type === heading_types.h3
      ? headingStyles.h3
      : type === heading_types.h4
      ? headingStyles.h4
      : type === heading_types.h5
      ? headingStyles.h5
      : type === heading_types.h6
      ? headingStyles.h6
      : null;
  const invertStyles = invert && headingStyles.invert;
  return (
    <View style={headingStyles.row}>
      <Text style={[headingType, invertStyles, headingStyles.common, (i18n.isRtl && textAlign.right)]}>
        {title}
      </Text>
    </View>
  );
}
