import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./tabs.styles";

interface TwoTabProps {
  tabOneLabel: string;
  tabTwoLabel: string;
  onTabChange?: (activeTab: number) => void;
}

export default function Tabs({
  tabOneLabel,
  tabTwoLabel,
  onTabChange,
}: TwoTabProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handlePress = (index: number) => {
    setActiveTab(index);
    if (onTabChange) onTabChange(index);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 0 && styles.activeTab]}
        onPress={() => handlePress(0)}
      >
        <Text style={[styles.tabText, activeTab === 0 && styles.activeTabText]}>
          {tabOneLabel}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, activeTab === 1 && styles.activeTab]}
        onPress={() => handlePress(1)}
      >
        <Text style={[styles.tabText, activeTab === 1 && styles.activeTabText]}>
          {tabTwoLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
