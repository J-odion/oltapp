import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Bottomtab({ navigation }) {
  return (
    <View
      className="flex-row justify-between px-8 py-4 bg-[#5256B5]"
      style={styles.menus}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Dashboard")}
        className="items-center"
        style={styles.menuItem}
      >
        <Image
          className="w-6 h-6 mb-3"
          style={styles.menuImage}
          source={require("../assets/homeIcon.png")}
        />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Service")}
        className="items-center"
        style={styles.menuItem}
      >
        <Image
          className="w-6 h-6 mb-3"
          resizeMode="contain"
          style={styles.menuImage}
          source={require("../assets/service.png")}
        />
        <Text className="text-center" style={styles.text}>
          Service
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Transaction")}
        className="items-center"
        style={styles.menuItem}
      >
        <Image
          className="w-6 h-6 mb-3"
          style={styles.menuImage}
          source={require("../assets/transactionIcon.png")}
        />
        <Text style={styles.text}>Transaction</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Settings")}
        className="items-center"
        style={styles.menuItem}
      >
        <Image
          className="w-6 h-6 mb-3"
          style={styles.menuImage}
          source={require("../assets/settingsIcon.png")}
        />
        <Text style={styles.text}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
