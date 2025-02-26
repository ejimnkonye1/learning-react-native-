import { View, Text, TextInput, Pressable, ScrollView, ActivityIndicator, Alert } from "react-native";
import { Link, useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useState } from "react";
import { useFonts } from "expo-font";
import { auth, firestore } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "expo-router";
import { useTheme } from "../context/ThemeContext"; // Import theme context
import { doc, getDoc } from "firebase/firestore";

export default function Login() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Loading state

    const router = useRouter();
    const navigation = useNavigation(); 
    const { theme } = useTheme(); // Get current theme

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const userInfo = await signInWithEmailAndPassword(auth, email, password);
            console.log("User info:", userInfo);
            const user = userInfo.user
            const userId = user.uid
            const userdoc = await getDoc(doc(firestore, "users", userId))
            if (userdoc.exists()){
                Alert.alert("Success", "user exits signing in");
                router.push("/home"); 
            } else{
            Alert.alert("user not in db")
            }
        
        } catch (error:any) {
            Alert.alert("Error", error.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Load custom fonts
    const [fontsLoaded] = useFonts({
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <ScrollView className="flex-1" style={{ backgroundColor: theme === "dark" ? "#121212" : "#FFFFFF" }}>
            <View className="pt-10 p-5">
                <Text className="text-2xl mb-3" 
                    style={{ 
                        fontFamily: "Poppins-Bold", 
                        color: theme === "dark" ? "#FFFFFF" : "#000000" 
                    }}
                >
                 Log in
                </Text>
                <Text style={{ fontFamily: "Poppins-Regular", color: theme === "dark" ? "#BBBBBB" : "#555555" }}>
                    Log in to get started
                </Text>

                {/* Email Input */}
                <View className="pt-5">
                    <Text className="mb-1" style={{ fontFamily: "Poppins-Regular", color: theme === "dark" ? "#BBBBBB" : "#555555" }}>
                        Email
                    </Text>
                    <View className="flex-row items-center border p-2 rounded" 
                        style={{ 
                            borderColor: theme === "dark" ? "#555555" : "#CCCCCC", 
                            backgroundColor: theme === "dark" ? "#333333" : "#F6F6F6"
                        }}>
                        <Icon name="envelope" size={20} color={theme === "dark" ? "#AAAAAA" : "gray"} />
                        <TextInput
                            keyboardType="email-address"
                            placeholder="Enter your email"
                            className="flex-1 ml-2"
                            value={email}
                            onChangeText={setEmail}
                            style={{ fontFamily: "Poppins-Regular", color: theme === "dark" ? "#FFFFFF" : "#000000" }}
                        />
                    </View>
                </View>

                {/* Password Input */}
                <View className="pt-5">
                    <Text className="mb-1" style={{ fontFamily: "Poppins-Regular", color: theme === "dark" ? "#BBBBBB" : "#555555" }}>
                        Password
                    </Text>
                    <View className="flex-row items-center border p-2 rounded" 
                        style={{ 
                            borderColor: theme === "dark" ? "#555555" : "#CCCCCC", 
                            backgroundColor: theme === "dark" ? "#333333" : "#F6F6F6"
                        }}>
                        <Icon name="lock" size={20} color={theme === "dark" ? "#AAAAAA" : "gray"} />
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Enter your password"
                            className="flex-1 ml-2"
                            value={password}
                            onChangeText={setPassword}
                            style={{ fontFamily: "Poppins-Regular", color: theme === "dark" ? "#FFFFFF" : "#000000" }}
                        />
                    </View>
                </View>

           
                <View className="pt-8">
                    <Pressable
                        className="rounded-full px-2 py-3"
                        style={{
                            backgroundColor:  email && password  ? "#007BFF" : "#888888",
                        }}
                        disabled={!email || !password }
                        onPress={handleLogin}
                    >
                        <Text className="text-center text-white" style={{ fontFamily: "Poppins-Bold" }}>
                            {isLoading ? "Signing In..." : "Sign In"}
                        </Text>
                    </Pressable>
                </View>

                {/* Login Link */}
                <Text className="pt-4 text-center" style={{ fontFamily: "Poppins-Regular", color: theme === "dark" ? "#BBBBBB" : "#555555" }}>
                    Don"t have an account? 
                    <Link className="text-blue-500 ml-2" href='/register'> Sign Up</Link>
                </Text>  
            </View>
        </ScrollView>
    );
}
