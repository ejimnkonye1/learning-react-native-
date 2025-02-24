import { View, Text, Image, Pressable, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default function SendButtons () {
    const actions = [
        { name: "Send", icon: "paper-plane", onPress: () => alert("Send Pressed"),color:"#60a5fa" },
        { name: "Receive", icon: "download", onPress: () => alert("Receive Pressed"),color:"#16a34a" },
        { name: "Top-up", icon: "plus-circle", onPress: () => alert("Top-up Pressed"),color:"#3b82f6" },
        { name: "Loan", icon: "money", onPress: () => alert("Loan Pressed"),color:"#7e22ce" },
      ];
    
    return(
        <View className="px-4 mt-3">
        <View className="bg-[#EEF0FF]  rounded-lg w-full ">
    <View className="items-center mt-2 ">
                  <View className="flex flex-row justify-between w-full px-5 mt-2 mb-2">
                    {actions.map((action, index) => (
                      <Pressable key={index} onPress={action.onPress}>
                        <View className="items-center">
                          <View className="p-3 bg-white  rounded-full flex items-center justify-center">
                            <Icon name={action.icon} size={24} style={{ color: action.color }}/>
                          </View>
                          <Text className="text-gray-700 font-semibold mt-2">{action.name}</Text>
                        </View>
                      </Pressable>
                    ))}
                  </View>
                </View>
        </View>
        </View>

       
        
    )
}