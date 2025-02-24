import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("Home"); // State to track the active tab

  const tabs = [
    { name: "Home", icon: "home" },
    { name: "My Cards", icon: "credit-card" },
    { name: "Statistics", icon: "bar-chart" },
    { name: "Settings", icon: "cog" },
  ];

  const handlePress = (name:any) => {
    setActiveTab(name);
    Alert.alert(`${name} Clicked`);
  };

  return (
    <View className="absolute bottom-0 left-0 right-0 flex-row items-center justify-between bg-white p-4 shadow-md border-t border-gray-200">
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(tab.name)}
          className="flex-1 items-center justify-center"
        >
          <Icon name={tab.icon} size={24} color={activeTab === tab.name ? "purple" : "gray"} />
          <Text className={`text-sm mt-1 ${activeTab === tab.name ? "text-purple-900" : "text-gray-500"}`}>
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNav;
