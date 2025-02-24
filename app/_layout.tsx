import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import { ThemeProvider, useTheme } from "../context/ThemeContext"; // Import ThemeContext

// Prevent splash screen from auto-hiding before assets load
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <ThemeProvider> 
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme } = useTheme(); // Get theme from context
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="details" />
        <Stack.Screen name="register" />
        <Stack.Screen name="setting" />
        <Stack.Screen name="home" />
      </Stack>
      <StatusBar style="auto" />
    </NavigationThemeProvider>
  );
}
