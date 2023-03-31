import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useCallback, useState } from "react";
import Modal from "react-native-modal";
import { modalStyle } from "./styles";
import { basecolor1 } from "../../_variables";
import { display, flexbox, heading, textAlign } from "../../_commons";
import i18n from "../../../../i18n/i18n";

interface HeaderProps {
  title: string;
  description?: string;
}

const directionList: any = {
  top: "top",
  center: "center",
  bottom: "bottom",
};

interface Props {
  visible: boolean;
  header?: HeaderProps;
  direction?: "top" | "center" | "bottom";
  swipeDirection?: "up" | "down" | "left" | "right";
  children?: JSX.Element | JSX.Element[];
  onClose?: () => void;
  onSwipeMove?: () => void;
  onSwipeMoveComplete?: () => void;
}

export default function CustomModal({
  visible,
  header,
  direction = directionList.top,
  swipeDirection,
  children,
  onClose,
  onSwipeMove,
  onSwipeMoveComplete,
}: Props) {
  const onSwipeMoveHandler = useCallback(() => {
    onSwipeMove();
  }, [onSwipeMove]);
  const onSwipeCompleteHandler = useCallback(() => {
    onSwipeMoveComplete();
  }, [onSwipeMoveComplete]);
  return (
    <Modal
      isVisible={visible}
      backdropColor={basecolor1.darker}
      style={modalStyle.modal}
      avoidKeyboard={true}
      animationIn={"zoomIn"}
      swipeDirection={"down"}
      onSwipeMove={onSwipeMove && onSwipeMoveHandler}
      onSwipeComplete={onSwipeMoveComplete && onSwipeCompleteHandler}
    >
      {/* <KeyboardAvoidingView
        behavior="position"
        enabled
        style={modalStyle.keyboardView}
        contentContainerStyle={modalStyle.containerStyle}
      > */}
      <View style={modalStyle.wrap}>
        <View style={modalStyle.box}>
          {header && (
            <View style={modalStyle.header.wrap}>
              <Text
                style={[
                  heading.three,
                  modalStyle.header.title,
                  textAlign.center,
                ]}
              >
                {header.title}
              </Text>
              {header.description && (
                <Text style={modalStyle.header.description}>
                  {header.description}
                </Text>
              )}
            </View>
          )}
          {children}
          <TouchableOpacity
            onPress={onClose}
            style={[
              modalStyle.closeTxt,
              display.fluid,
              flexbox.justifyContent.center,
            ]}
          >
            <Text style={[textAlign.center]}>{i18n.t('close')}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </KeyboardAvoidingView> */}
    </Modal>
  );
}
