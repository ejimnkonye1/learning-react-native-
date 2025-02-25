import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/Feather";
import { useTheme } from "../../context/ThemeContext";

const BalanceCard = () => {
    const { theme, toggleTheme } = useTheme();
     const isDarkMode = theme === "dark";
   
  return (
    <View className="p-2">
    <View style={{ backgroundColor: isDarkMode ? "#5E30B5" : "#EEF0FF", padding: 24, borderRadius: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
      {/* Left Side: Balance Info */}
      <View>
        <View className="flex-row items-center space-x-2">
          <Icon name="shield" size={16} color="green" />
          <Text className={`${isDarkMode ?"text-white":'text-gray-700'} text-sm font-semibold ml-2 mr-2`}>Available Balance</Text>
          <Icon1 name="eye" size={16} color="gray" />
        </View>

        <TouchableOpacity className="flex-row items-center mt-4">
          <Text className={`${isDarkMode ?'text-white':'text-black'} text-[20px] font-bold`}>₦416.87</Text>
          <Icon name="angle-right" className="ml-2" size={20} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Right Side: Transaction & Add Money */}
      <View className="items-end">
        <TouchableOpacity className="flex-row items-center mb-4">
          <Text className={`${isDarkMode ?"text-white":'text-gray-600'} font-medium text-sm`}>Transaction History</Text>
          <Icon name="angle-right" className="ml-2" size={16} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity className="bg-purple-600 px-4 py-2 rounded-full">
          <Text className="text-white font-medium">Add Money</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>

  );
};

export default BalanceCard;
