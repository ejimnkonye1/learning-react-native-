import React from "react";
import { View, Text, ScrollView, Switch, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/Entypo";
import { useTheme } from "../context/ThemeContext";

const settingsOptions = [
  { name: "BilPay PIN", icon: "lock" },
  { name: "Auto-Logout Setting", icon: "clock-o", hasDot: true },
  { name: "Payment Setting", icon: "credit-card" },
  { name: "Device Management", icon: "mobile" },
  { name: "Biometric Authentication", icon2: "fingerprint", hasDot: true }, // Uses Icon2
  { name: "Security Questions", icon: "question-circle" },
  { name: "Push Notification Settings", icon: "bell" },
  { name: "Email Notification Settings", icon: "envelope" },
  { name: "About BilPay", icon: "info-circle" },
  { name: "Close BilPay Account", icon: "trash", color: "red" },
];

const SettingsScreen = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <View className={`flex-1 ${isDarkMode ? "bg-black" : "bg-gray-200"} `}>
      <ScrollView
      contentContainerStyle={{ paddingBottom: 80 }} 
       showsVerticalScrollIndicator={false}>
        {/* First 5 settings */}
        <View className={`p-4 rounded-lg mb-4 shadow-md border ${isDarkMode ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"}`}  style={{ backgroundColor: isDarkMode ? "#121212" : "#f3f4f6", }}>

        {settingsOptions.slice(0, 5).map((item, index) => (
          <TouchableOpacity
            key={index}
            className={`flex-row items-center justify-between py-6 px-2 border-b border-gray-200   `}
            activeOpacity={0.7}
            style={{borderColor: isDarkMode ?'#A9A9A9':'#E5E7EB'}}
          >
            <View className="flex-row items-center">
              {item.icon2 ? (
                <Icon2 name={item.icon2} size={20} color={isDarkMode ? "white" : "black"} />
              ) : (
                <Icon name={item.icon || ''} size={20} color={item.color || (isDarkMode ? "white" : "black")} />
              )}
              <Text className={`ml-3 text-md font-semibold text-base ${isDarkMode ? "text-white" : "text-black"}`}>
                {item.name}
              </Text>
            </View>
            <View className="flex-row items-center">
              {item.hasDot && <View className="w-2 h-2 bg-red-500 rounded-full mr-3" />}
              <Icon1 name="chevron-right" size={18} color={isDarkMode ? "gray" : "black"} />
            </View>
          </TouchableOpacity>
        ))}
</View>


<View className={`p-4  rounded-lg mb-4 shadow-md border flex-row justify-between items-center ${isDarkMode ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"}`} style={{ backgroundColor: isDarkMode ? "#121212" : "#f3f4f6" }}>
  <Text className={`text-base px-2 text-md font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>
    Dark Mode
  </Text>
  <Switch value={isDarkMode} onValueChange={toggleTheme} />
</View>

      

        {/* Last 5 settings */}
        <View className={`p-4 rounded-lg mb-4 shadow-md border ${isDarkMode ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"}`}  style={{ backgroundColor: isDarkMode ? "#121212" : "#f3f4f6", }}>
        {settingsOptions.slice(5).map((item, index) => (
          <TouchableOpacity
            key={index + 5}
            className="flex-row items-center justify-between py-6 px-2 border-b border-gray-200"
            activeOpacity={0.7}
            style={{borderColor: isDarkMode ?'#A9A9A9':'#E5E7EB'}}
          >
            <View className="flex-row items-center">
              {item.icon2 ? (
                <Icon2 name={item.icon2} size={20}  />
              ) : (
                <Icon name={item.icon || ''} size={20} color={item.color || (isDarkMode ? "white" : "black")} />
              )}
              <Text className={`ml-3 text-md font-semibold text-base ${isDarkMode ? "text-white" : "text-black"}`}>
                {item.name}
              </Text>
            </View>
            <View className="flex-row items-center">
              {item.hasDot && <View className="w-2 h-2 bg-red-500 rounded-full mr-3" />}
              <Icon1 name="chevron-right" size={18} color={isDarkMode ? "gray" : "black"} />
            </View>
          </TouchableOpacity>
        ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
