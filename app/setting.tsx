import { View, Text, Button } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18, color: theme === "dark" ? "white" : "black" }}>
        Current Theme: {theme}
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}
