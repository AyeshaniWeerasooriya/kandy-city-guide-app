import React, { useState } from "react";
import { View } from "react-native";
import BottomNavbar from "../common-components/bottom-navbar/bottomNavbar";
import Tabs from "../common-components/tabs/tabs";
import { style } from "./home.styles";
import MyNotes from "./myNotes";
import NewNote from "./newNote";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={style.container}>
      <View style={style.navContainer}>
        <Tabs
          tabOneLabel="New Note"
          tabTwoLabel="My Notes"
          onTabChange={(tab) => setActiveTab(tab)}
        />
      </View>
      <View style={style.middleContainer}>
        {activeTab === 0 ? <NewNote /> : <MyNotes />}
      </View>
      <View style={style.bottomNavContainer}>
        <BottomNavbar />
      </View>
    </View>
  );
}
