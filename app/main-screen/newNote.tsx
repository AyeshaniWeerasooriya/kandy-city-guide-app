import React, { useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import {
  RichEditor,
  RichToolbar,
  actions,
} from "react-native-pell-rich-editor";
import { styles } from "./newNote.styles";

export default function NewNote() {
  const [title, setTitle] = useState("");
  const richText = useRef<RichEditor>(null);

  const handleSave = async () => {};

  const handleDiscard = async () => {};

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        placeholder="Untitled Note..."
        value={title}
        onChangeText={setTitle}
        placeholderTextColor="#000000"
      />
      <RichToolbar
        style={styles.toolbar}
        editor={richText}
        actions={[
          actions.setBold,
          actions.setItalic,
          actions.setUnderline,
          actions.setStrikethrough,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.heading1,
        ]}
      />

      <RichEditor
        ref={richText}
        style={styles.richEditor}
        placeholder="Start typing your note here..."
        editorStyle={{
          backgroundColor: "#ffffff",
          color: "#1F2937",
          placeholderColor: "#9CA3AF",
        }}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.discardButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Discard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleDiscard}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
