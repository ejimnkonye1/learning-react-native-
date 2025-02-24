import { ThemedText } from '@/components/ThemedText';
import { auth } from '@/firebaseConfig';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
  const user = auth.currentUser

  return (
    <View >
      <Text>Details</Text>
         <ThemedText>Billie is learning react native now
         <View className="flex-1 justify-center items-center bg-blue-500">
      <Text className="text-white text-xl">Hello, World! {user?.email || 'none'}</Text>
    </View>
              </ThemedText>
      
    </View>
  );
}


