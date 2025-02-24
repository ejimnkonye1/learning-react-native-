import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/FontAwesome'; 

const BottomNav = () => {
  const tabs = [
    { name: "Home", icon: "home" },
    { name: "My Cards", icon: "credit-card" },
    { name: "Statistics", icon: "bar-chart" },
    { name: "Settings", icon: "cog" },
  ];

  const handlePress = (name:any) => {
    Alert.alert(`${name} Clicked`);
  };

  return (
    <View className="flex-row items-center justify-between bg-white p-4 shadow-md border-t border-gray-200">
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(tab.name)}
          className="flex-1 items-center justify-center"
        >
          <Icon name={tab.icon} size={24} color="gray" />
          <Text className="text-gray-500 text-sm mt-1">{tab.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNav;
