import { View, Text, Image, ActivityIndicator, Pressable } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { useNavigation } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useFonts } from "expo-font";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import { useRouter } from "expo-router";
import History from '../app/history'
import BottomNav from "./bottomnav";
export default function HomeScreen() {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const router = useRouter();



  // hide arrow back here
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const actions = [
    { name: "Send", icon: "paper-plane", onPress: () => alert("Send Pressed") },
    { name: "Receive", icon: "download", onPress: () => alert("Receive Pressed") },
    { name: "Top-up", icon: "plus-circle", onPress: () => alert("Top-up Pressed") },
    { name: "Loan", icon: "money", onPress: () => alert("Loan Pressed") },
  ];
  return (
    // use safeview to ensure content stay in screen bound when u remove those header arrow
    <SafeAreaView className="flex-1 ">
    <View className={`${theme === "dark" ? "bg-[#161622]" : "bg-[#FFFFFF]"} h-screen pt-4`}>
 
      <View className="flex-row justify-between items-start px-5">
  <View>
    <Text className="">
    <View className="   flex-row items-center justify-center">
      <Image 
      source={require("../assets/images/ejim.png")}
      className="w-10 h-10 rounded-full"
      resizeMode="cover"
      />
      <View className="">
  
      <Text className="pl-2 text-1xl ">Billie dominic</Text>
      </View>
     
      </View>
    </Text>
  </View> 
    <View className="relative flex items-center justify-center pt-3">
      <Icon name="bell-o" size={20} color={theme === "dark" ? "#AAAAAA" : "gray"} />
      <Text className="relative bg-red-600 w-5 h-5 top-[-30px] left-4 text-sm rounded-full flex items-center justify-center text-center text-white">4</Text>
  </View> 
    </View>
  
    <View className="flex items-center justify-center mt-5">
      <Pressable
        onPress={() => console.log("ATM Card Pressed")}
        className="w-[95%] h-48 bg-gray-800 rounded-2xl p- shadow-lg"
      >
        <Image
          source={require("../assets/images/credit.png")}
          className="w-full h-full rounded-2xl"
          resizeMode="cover" // Ensures the image scales properly inside the card
        />
      </Pressable>
    </View>


    <View className="items-center mt-5">
      {/* Action Buttons Row */}
      <View className="flex flex-row justify-between w-full px-10 mt-4">
        {actions.map((action, index) => (
          <Pressable key={index} onPress={action.onPress}>
            <View className="items-center">
              <View className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center">
                <Icon name={action.icon} size={24} color="white" />
              </View>
              <Text className="text-gray-700 font-semibold mt-2">{action.name}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
<History />
<BottomNav />
    </View>
 
    </SafeAreaView>
  );
}
