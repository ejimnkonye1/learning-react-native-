import { View, Text, ScrollView, Switch, TouchableOpacity, Image } from "react-native";
import { useTheme } from "../context/ThemeContext";
import Icon1 from "react-native-vector-icons/Feather";

const ProfilePage = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <View className={`flex-1 ${isDarkMode ? "bg-black" : "bg-gray-200"}`} >
      <ScrollView
              contentContainerStyle={{ paddingBottom: 80 }} 
      showsVerticalScrollIndicator={false}>
        <View className="flex-1 p-4" style={{ backgroundColor: isDarkMode ? "#131313" : "#F9FAFB" }}>

          {/* Profile Header */}
          <View className={`flex-row items-center p-4 rounded-lg mb-4 border ${isDarkMode ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"}`}  style={{ backgroundColor: isDarkMode ? "#121212" : "#FFFFFF", }}>
            <Image source={require('../assets/images/ejim.png')} className="w-14 h-14 rounded-full mr-4" />
            <View>
              <Text className="text-lg font-bold" style={{ color: isDarkMode ? "#ffffff" : "#000000" }}>Hi, Onyedika</Text>
              <Text className="text-sm text-gray-500">706 248 7335</Text>
            </View>
          </View>

          {/* Account Details */}
          <View className={`p-4 rounded-lg mb-4 shadow-md border ${isDarkMode ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"}`}  style={{ backgroundColor: isDarkMode ? "#121212" : "#FFFFFF", }}>
            {[
              { label: "Account Number", value: "706 248 7335" },
              { label: "Email", value: "ejimnkonyeonyedika@gmail.com" },
              { label: "Nick Name", value: "Onyedika" }
            ].map((item, index, array) => (
              <View key={index} className={`flex-row justify-between items-center py-5 ${index !== array.length - 1 ? "border-b" : ""} border- dark:border-gray-700`} style={{borderColor: isDarkMode ?'#A9A9A9':''}}  >
                <Text className="text-md text-gray-500">{item.label}</Text>
                <View className="flex-row items-center">
                  <Text className="text-md font-semibold mr-2 text-gray-400">{item.value}</Text>
                  <Icon1 name="chevron-right" size={18} color={isDarkMode ? "gray" : "#C0C0C0"} />
                </View>
              </View>
            ))}
          </View>

          {/* Personal Information */}
          <View className={`p-4 rounded-lg mb-4 shadow-md border ${isDarkMode ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"}`}  style={{ backgroundColor: isDarkMode ? "#121212" : "#FFFFFF", }}>
            {[
              { label: "KYC Levels", value: "Tier 3" },
              { label: "Full Name", value: "ONYEDIKA  EJIMNK..." },
              { label: "Gender", value: "Male" },
              { label: "Date of Birth", value: "Feb **, **" },
              { label: "Mobile Number", value: "08162459114" },
              { label: "Address", value: "" },
              { label: "Occupation", value: "" },
            ].map((item, index, array) => (
              <View key={index} className={`flex-row justify-between items-center py-5 ${index !== array.length - 1 ? "border-b" : ""} `} style={{borderColor: isDarkMode ?'#A9A9A9':'#C0C0C0'}} >
                <Text className="text-md text-gray-500">{item.label}</Text>
                <View className="flex-row items-center">
                  {item.value ? <Text className="text-md font-semibold mr-2 text-gray-400">{item.value}</Text> : null}
                  <Icon1 name="chevron-right" size={18} color={isDarkMode ? "gray" : "#C0C0C0"} />
                </View>
              </View>
            ))}
          </View>
          <View className={`p-4 rounded-lg shadow-md border ${isDarkMode ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"}`}  style={{ backgroundColor: isDarkMode ? "#121212" : "#f3f4f6", }}>
            {[
              { label: "Management of Account", value: "" }
            ].map((item, index,array) => (
              <View key={index} className={`flex-row justify-between items-center py-4 ${index !== array.length - 1 ? "border-b" : ""} border-gray-300 dark:border-gray-100`}>
                <Text className="text-md text-gray-500">{item.label}</Text>
                <View className="flex-row items-center">
                  {item.value ? <Text className="text-md font-semibold mr-2 text-gray-400">{item.value}</Text> : null}
                  <Icon1 name="chevron-right" size={18} color={isDarkMode ? "gray" : "#C0C0C0"} />
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfilePage;
