import { View, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "../../context/ThemeContext";

export default function History() {
  const transactions = [
    { id: 1, title: "Groceries", amount: "- ₦45.00", date: "Feb 23, 2025" },
    { id: 2, title: "Salary", amount: "+ ₦1,200.00", date: "Feb 22, 2025" },
    // { id: 3, title: "Netflix", amount: "-$15.99", date: "Feb 20, 2025" },
    // { id: 4, title: "Transfer", amount: "-$100.00", date: "Feb 19, 2025" },
  ];
  const { theme, toggleTheme } = useTheme();
   const isDarkMode = theme === "dark";
 
  return (
    <View className="mt-6 px-4">
      {/* Transactions Header */}
      <View className="flex flex-row justify-between items-center mb-3">
        <Text className={`text-md font-bold ${isDarkMode ?"text-white": "black"}`}>Transactions</Text>
        <Pressable onPress={() => alert("See All Transactions")}>
          <Text className="text-blue-500 font-semibold">See All</Text>
        </Pressable>
      </View>

      {/* Transaction List */}
      {transactions.map((transaction) => (
        <View
          key={transaction.id}
          className={`flex flex-row justify-between items-center p-4 rounded-lg mb-2 ${
            isDarkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
          style={{ backgroundColor: isDarkMode ? "#121212" : "#f3f4f6", }}
        >
          <View>
            <Text className={`font-semibold ${isDarkMode ? 'text-white':""}`}>{transaction.title}</Text>
            <Text className="text-gray-500 text-sm">{transaction.date}</Text>
          </View>
          <Text
            className={`font-bold ${
              transaction.amount.startsWith("-") ? "text-red-500" : "text-green-500"
            }`}
          >
            {transaction.amount}
          </Text>
        </View>
      ))}
    </View>
  );
}
