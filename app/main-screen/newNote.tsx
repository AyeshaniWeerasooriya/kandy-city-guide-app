import React, { useRef, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Share,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  RichEditor,
  RichToolbar,
  actions,
} from "react-native-pell-rich-editor";
import { styles } from "./newNote.styles";

function htmlToMarkdownText(html: string): string {
  html = html.replace(
    /<ol>(.*?)<\/ol>/gis,
    (match: string, listContent: string) => {
      let index = 1;
      return listContent.replace(
        /<li>(.*?)<\/li>/gi,
        (_: string, item: string) => `${index++}. ${item}\n`
      );
    }
  );

  html = html.replace(/<ul>(.*?)<\/ul>/gis, (_: string, list: string) =>
    list.replace(/<li>(.*?)<\/li>/gi, "- $1\n")
  );

  return html
    .replace(/<b>(.*?)<\/b>/gi, "*$1*")
    .replace(/<strong>(.*?)<\/strong>/gi, "*$1*")
    .replace(/<i>(.*?)<\/i>/gi, "_$1_")
    .replace(/<em>(.*?)<\/em>/gi, "_$1_")
    .replace(/<u>(.*?)<\/u>/gi, "_$1_")
    .replace(/<s>(.*?)<\/s>/gi, "~$1~")
    .replace(/<strike>(.*?)<\/strike>/gi, "~$1~")
    .replace(/<h1>(.*?)<\/h1>/gi, "*$1*")
    .replace(/<h2>(.*?)<\/h2>/gi, "*$1*")
    .replace(/<h3>(.*?)<\/h3>/gi, "*$1*")
    .replace(/<ul>|<\/ul>|<ol>|<\/ol>/gi, "")
    .replace(/<li>(.*?)<\/li>/gi, "• $1\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<div>(.*?)<\/div>/gis, "$1\n")
    .replace(/<p>(.*?)<\/p>/gis, "$1\n")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export default function NewNote() {
  const [title, setTitle] = useState("");
  const richText = useRef<RichEditor>(null);

  const handleShare = async () => {
    try {
      const htmlContent = await richText.current?.getContentHtml();

      if (!title.trim()) {
        setTitle("Untitled Note...");
        return;
      }

      const formattedText = htmlToMarkdownText(htmlContent || "");

      await Share.share({
        title: title.trim(),
        message: `${title.trim()}\n\n${formattedText}`,
      });

      setTitle("");
      richText.current?.setContentHTML("");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to share note.");
    }
  };

  const handleDiscard = () => {
    setTitle("");
    richText.current?.setContentHTML("");
    Alert.alert("Discarded", "Your note has been cleared.");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        placeholder="Untitled Note..."
        value={title}
        onChangeText={setTitle}
        placeholderTextColor="#000000"
      />

      <KeyboardAvoidingView
        style={{ flex: 1, position: "fixed", bottom: 0 }}
        // behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
        <RichEditor
          ref={richText}
          style={[styles.richEditor, { flex: 1 }]}
          placeholder="Start typing your note here..."
          initialFocus={false}
          disabled={false}
          useContainer
          //androidHardwareAccelerationDisabled={true}
          editorStyle={{
            backgroundColor: "#ffffff",
            color: "#1F2937",
            placeholderColor: "#9CA3AF",
            contentCSSText: `
              font-family: sans-serif;
              font-size: 18px;
              line-height: 28px;
              padding: 20px 20px;
              display: flex;
              flex-direction: column;
              min-height: 200px;
              position: fixed
              ;
            bottom: 0; left: 0;
              
            `,
          }}
          // editorInitializedCallback={() => {
          //   console.log("Editor Ready");
          // }}
          scrollEnabled={true}
        />

        <RichToolbar
          style={styles.toolbar}
          selectedIconTint={"#4F46E5"}
          iconSize={20}
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

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.discardButton}
            onPress={handleDiscard}
          >
            <Text style={styles.buttonText}>Discard</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveButton} onPress={handleShare}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
