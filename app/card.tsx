import { View, Text, Image, Pressable, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Cards (){
    return(
         <View className="flex items-center justify-center mt-5">
                  <Pressable
                    onPress={() => console.log("ATM Card Pressed")}
                    className="w-[95%] h-48 bg-gray-800 rounded-2xl shadow-lg"
                  >
                    <Image
                      source={require("../assets/images/credit.png")}
                      className="w-full h-full rounded-2xl"
                      resizeMode="cover"
                    />
                  </Pressable>
                </View>
    )

}