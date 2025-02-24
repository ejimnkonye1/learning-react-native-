import { useTheme } from "@/context/ThemeContext";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function TopNavbar () {
     const { theme } = useTheme();
    return(
        <View className="absolute top-0 left-0 right-0 bg-white py-4 px-5 shadow-lg z-10 pt-10">
  <View className="flex-row justify-between items-center">
    <View className="flex-row items-center">
      <Image
        source={require("../assets/images/ejim.png")}
        className="w-10 h-10 rounded-full"
        resizeMode="cover"
      />
      <View className="pl-2">
        <Text className="text-md font-semibold">Billie Dominic</Text>
        <Text className="text-sm">Welcome, let’s make a payment</Text>
      </View>
    </View>

    {/* Notifications */}
    <View className="relative flex items-center justify-center">
      <Icon name="bell-o" size={20} color={theme === "dark" ? "#AAAAAA" : "gray"} />
      <Text className="absolute bg-red-600 w-5 h-5 text-sm rounded-full text-white text-center top-[-5px] left-3">
        4
      </Text>
    </View>
  </View>
</View>

    );
}