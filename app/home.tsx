import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { useNavigation } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import History from "../app/history";
import BottomNav from "./bottomnav";
import BalanceCard from "./balance";
import TopNavbar from "./header"
import SendButtons from "./button";
import ServiceGrid from "./services";
export default function HomeScreen() {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const router = useRouter();

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);


  return (
    <SafeAreaView className="flex-1">
   
      <TopNavbar />
      <ScrollView
        className={`${theme === "dark" ? "bg-[#161622]" : "bg-[#FFFFFF]"} pt-[55px]`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }} // Add space for BottomNav
      >
        {/* Header */}


        {/* Balance Card */}
        <BalanceCard />

   

        {/* Action Buttons */}
      <SendButtons />
<ServiceGrid />
        {/* Transaction History */}
        <History />
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <BottomNav />
    </SafeAreaView>
  );
}
