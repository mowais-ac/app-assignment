import React from "react";
import { Text, View } from "react-native";
import i18n from "../../../../i18n/i18n";
import { HEADING_COLORS_INTERFACE } from "../../../../submodule/common/interfaces/interfaces";
import { textAlign } from "../../_commons";
import { paragrapStyles } from "./styles";

interface Props {
  title: string;
  color?: HEADING_COLORS_INTERFACE;
  invert?: boolean;
}

export default function Paragraph({ title, invert = false }: Props) {
  const invertStyles = invert && paragrapStyles.invert;
  return (
    <View style={paragrapStyles.row}>
      <Text style={[paragrapStyles.common, (i18n.isRtl && textAlign.right)]}>{title}</Text>
    </View>
  );
}
