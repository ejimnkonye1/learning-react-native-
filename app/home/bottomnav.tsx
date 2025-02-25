import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTheme } from "../../context/ThemeContext";

interface TabItem {
  name: string;
  icon: string;
  route?: string; // Optional
}
const BottomNav = () => {
   const { theme, toggleTheme } = useTheme();
     const isDarkMode = theme === "dark";
   
  const [activeTab, setActiveTab] = useState("Home"); // State to track the active tab
  const navigation = useNavigation();
  const tabs = [
    { name: "Home", icon: "home",route: "home"  },
    { name: "My Cards", icon: "credit-card" },
    { name: "Statistics", icon: "bar-chart" },
    { name: "Settings", icon: "cog",route: "setting" },
  ];

  const handlePress = (tab: TabItem) => {
    setActiveTab(tab.name);
  
    
    // Navigate only if a valid route exists
    if (tab.route) {
      navigation.navigate(tab.route as never);
    }
  };
  return (
    <View   className={`absolute bottom-0 left-0 right-0 flex-row items-center justify-between 
      p-4 shadow-md border-t 
      ${isDarkMode ? 'bg-[#131313] border-[#2a2a2a]' : 'bg-white border-gray-200'}`}
      style={{
        backgroundColor: isDarkMode ? "#131313" : "#FFFFFF",
        borderColor: isDarkMode ? "#2a2a2a" : "#E5E7EB", 
     
      }}
  >
  
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(tab)}
          className="flex-1 items-center justify-center"
        >
<Icon 
  name={tab.icon} 
  size={24} 
  color={activeTab === tab.name ? (isDarkMode ? "violet" : "purple") : (isDarkMode ? "white" : "gray")} 
/>

<Text 
  className={`text-sm mt-1 ${activeTab === tab.name ? (isDarkMode ? "text-white" : "text-purple-900") : (isDarkMode ? "text-white" : "text-gray-500")}`}
>
  {tab.name}
</Text>

        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNav;
