import React, { useCallback, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  ATTACH_TYPES,
  ENUM_ATTACH,
  FileProps,
  InputErrorProps,
} from "../../../../submodule/common/interfaces/interfaces";
import CustomModal from "../CustomModal";
import { attachStyles } from "./styles";
import * as DocumentPicker from "expo-document-picker";
import { icon_file, icon_picture } from "../../img";
import {
  borderRadius,
  flexbox,
  fontColor,
  margin,
  padding,
  textAlign,
} from "../../_commons";
import * as ImagePicker from "expo-image-picker";
import { fetchImageFromUri } from "../../../../submodule/common/common";

interface Props {
  file: FileProps;
  label?: string;
  error?: InputErrorProps;
  type?: ATTACH_TYPES;
  onSelect: (e: FileProps) => void;
}
export default function Attach({ file, label, type, error, onSelect }: Props) {
  const [showAttachModal, setShowAttachModal] = useState(false);

  const hideAttachModal = useCallback(() => {
    setShowAttachModal(false);
  }, []);

  const showAttachModalHandle = useCallback(() => {
    setShowAttachModal(true);
  }, []);

  const onFileSelect = useCallback(async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      copyToCacheDirectory: false,
    });
    console.log("onFileSelect result:::", result);
    setShowAttachModal(false);
  }, []);

  const onPictureSelect = useCallback(async () => {
    const result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    const uri = result.assets[0].uri;
    const file = await fetchImageFromUri(uri);
    onSelect({ file: file, uri: uri, type: ENUM_ATTACH.IMAGE });
    setShowAttachModal(false);
  }, [onSelect]);

  return (
    <View style={attachStyles.row}>
      <TouchableOpacity
        style={[attachStyles.box]}
        onPress={() => showAttachModalHandle()}
      >
        <Text style={[attachStyles.attachLabel]}>ATTACH</Text>
        <Text style={[attachStyles.label]}>{label}</Text>
        {file?.uri && (
          <View style={[attachStyles.preview]}>
            <Image
              source={{ uri: file.uri }}
              style={[attachStyles.previewImg]}
            />
          </View>
        )}
      </TouchableOpacity>

      <CustomModal
        visible={showAttachModal}
        onClose={hideAttachModal}
        header={{ title: `${label}` }}
      >
        <View
          style={[
            attachStyles.attachOptions,
            flexbox.directionRow,
            flexbox.justifyContent.center,
            margin.horizontal0,
          ]}
        >
          <TouchableOpacity
            onPress={() => onFileSelect()}
            style={[
              attachStyles.attachButton,
              borderRadius.min,
              padding.ten,
              margin.horizontal5,
              flexbox.justifyContent.center,
              flexbox.alignItems.center,
            ]}
          >
            <Image
              style={[attachStyles.attachIcon, textAlign.center]}
              source={icon_file}
            />
            <Text
              style={[attachStyles.attachTxt, textAlign.center, fontColor.body]}
            >
              File
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onPictureSelect()}
            style={[
              attachStyles.attachButton,
              borderRadius.min,
              padding.ten,
              margin.horizontal5,
              flexbox.justifyContent.center,
              flexbox.alignItems.center,
            ]}
          >
            <Image
              style={[attachStyles.attachIcon, textAlign.center]}
              source={icon_picture}
            />
            <Text
              style={[attachStyles.attachTxt, textAlign.center, fontColor.body]}
            >
              Picture
            </Text>
          </TouchableOpacity>
        </View>
      </CustomModal>
    </View>
  );
}
