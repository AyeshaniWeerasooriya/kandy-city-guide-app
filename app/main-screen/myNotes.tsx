import { Pencil, Search, Trash2 } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./myNotes.styles";

interface Note {
  id: string;
  title: string;
  content: string;
}

export default function MyNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      setTimeout(() => {
        setNotes([
          { id: "1", title: "Shopping List", content: "Buy milk and eggs..." },
          { id: "2", title: "Meeting Notes", content: "Discuss Q4 plans..." },
        ]);
        setLoading(false);
      }, 800);
    };
    fetchNotes();
  }, []);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const handleEdit = (id: string) => {
    console.log("Edit note", id);
  };

  const handleDelete = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Notes</Text>

      <View style={styles.searchContainer}>
        <Search size={20} color="#9CA3AF" style={styles.searchIcon} />
        <TextInput
          placeholder="Search your notes..."
          placeholderTextColor="#9CA3AF"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      {loading ? (
        <ActivityIndicator
          size="small"
          color="#4F46E5"
          style={{ marginTop: 16 }}
        />
      ) : filteredNotes.length === 0 ? (
        <Text style={styles.emptyText}>No notes found. Create a new one!</Text>
      ) : (
        <FlatList
          data={filteredNotes}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.noteCard}
              activeOpacity={0.8}
              onPress={() => console.log("Open note", item.id)}
            >
              <Text style={styles.noteTitle}>{item.title || "Untitled"}</Text>
              <Text style={styles.noteSubtitle}>Click to view full note</Text>

              <View style={styles.actionContainer}>
                <TouchableOpacity
                  onPress={(e) => {
                    e.stopPropagation?.();
                    handleEdit(item.id);
                  }}
                  style={styles.iconButton}
                >
                  <Pencil size={16} color="#4B5563" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={(e) => {
                    e.stopPropagation?.();
                    handleDelete(item.id);
                  }}
                  style={styles.iconButton}
                >
                  <Trash2 size={16} color="#4B5563" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
