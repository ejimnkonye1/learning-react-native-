import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const services = [
    { name: "Airtime", icon: "phone", color: "#3b82f6" }, // blue-500
    { name: "Data", icon: "arrow-up", color: "#22c55e", promo: true }, // green-500
    { name: "Betting", icon: "soccer-ball-o", color: "#16a34a" }, // green-600
    { name: "Electricity", icon: "bolt", color: "#15803d" }, // green-700
    { name: "TV", icon: "tv", color: "#60a5fa" }, // blue-400
    { name: "Invite & Earn", icon: "gift", color: "#9333ea" }, // purple-600
    { name: "Win Big", icon: "trophy", color: "#6366f1", label: "Easy" }, // indigo-500
    { name: "Refer & Earn", icon: "money", color: "#7e22ce" }, // purple-700
  ];
  

const ServiceGrid = () => {
  return (
<ScrollView className="px-4 py-4 pt-7">
  {/* Header */}
  <View className="flex-row justify-between mb-4">
    <Text className="text-md font-bold">Services</Text>
    <TouchableOpacity className="flex-row items-center ">
      <Text className="text-blue-500 font-semibold">More</Text>
                <Icon name="angle-right" className="ml-2" size={20} color="#3b82f6" />
    </TouchableOpacity>
  </View>

  {/* Grid Items */}
  <View className="flex-row flex-wrap justify-between">
    {services.map((item, index) => (
      <TouchableOpacity key={index} className="items-center w-1/4 p-2">
        <View className="bg-gray-100 rounded-2xl p-3 mb-1">
          <Icon name={item.icon} size={24} style={{ color: item.color }} />
        </View>
        <Text className="text-xs text-center">{item.name}</Text>
      </TouchableOpacity>
    ))}
  </View>
</ScrollView>

  );
};

export default ServiceGrid;
