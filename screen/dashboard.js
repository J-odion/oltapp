import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Bottomtab from "../components/bottomtab";

function DashboardScreen({ navigation }) {
  // const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);
  // const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);
  // const [shadowRadius, setShadowRadius] = useState(0);
  // const [shadowOpacity, setShadowOpacity] = useState(0.1);
  return (
    <SafeAreaView style={styles.container}>
      {/* header with avartar to the far right */}
      <View style={styles.header}>
        <View style={styles.left}>
          <Text style={styles.leftText}>Hello Smith</Text>
          <Text style={styles.leftText}>Welcome Back</Text>
        </View>
        <Image
          style={styles.avatar}
          source={require("../assets/walletman.png")}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.walletDetails}>
          {/* wallet commisio and accont number SLIDER*/}
          <LinearGradient
            style={styles.walletDetails}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            colors={[
              "rgba(40, 47, 214, 1)",
              "rgba(198, 153, 69, 0.77)",
              "rgba(202, 164, 33, 0.68)",
            ]}
          >
            <View style={styles.spread}>
              <View>
                <Text style={styles.text}> WALLET BALANCE</Text>
                <Text style={styles.text}>#23,345.25</Text>
              </View>
              <View>
                <Image source={require("../assets/fundwallet.png")} />
                <TouchableOpacity
                  onPress={() => navigation.navigate("FundWallet")}
                >
                  <Text style={styles.fund}>FUND WALLET</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.spread}>
              <View>
                <Text style={styles.text}>COMMISSION</Text>
                <Text style={styles.text}>#2,000.00</Text>
              </View>
              <View>
                <Text style={styles.text}>PROVIDUS BANK NO</Text>
                <Text style={styles.text}>0124356539</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
      {/* CIRCLE WITH ICONS*/}
      {/* BOTTOM TAB */}
      {/* bottom tab */}
      <View className="flex-row justify-between px-8 py-4 bg-[#5256B5]">
        <TouchableOpacity
          onPress={() => navigation.navigate("Dashboard")}
          className="items-center"
        >
          <Image
            className="w-6 h-6 mb-3"
            source={require("../assets/homeIcon.png")}
          />
          <Text className="text-[#fff]">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Service")}
          className="items-center"
        >
          <Image
            className="w-6 h-6 mb-3"
            resizeMode="contain"
            source={require("../assets/service.png")}
          />
          <Text className="text-[#fff]">Service</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Transaction")}
          className="items-center"
        >
          <Image
            className="w-6 h-6 mb-3"
            source={require("../assets/transactionIcon.png")}
          />
          <Text className="text-[#fff]">Transaction</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Settings")}
          className="items-center"
        >
          <Image
            className="w-6 h-6 mb-3"
            source={require("../assets/settingsIcon.png")}
          />
          <Text className="text-[#fff]">Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(82, 86, 181, 1)",
  },
  header: {
    alignItems: "flex-end",
    flexDirection: "row",
    padding: 10,
    justifyContent: "flex-end",
  },
  left: {
    marginHorizontal: 10,
  },
  leftText: {
    fontSize: 12,
    fontWeight: "500",
  },
  avatar: {
    width: 40,
    height: 40,
  },

  body: {
    padding: 10,
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  image: {
    resizeMode: "",
  },
  walletDetails: {
    margin: 5,
    borderRadius: 10,
  },
  spread: {
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
    padding: 15,
  },
  text: {
    color: "#ffffff",
  },
  fund: {
    color: "#fff",
    borderRadius: 10,
    backgroundColor: "rgba(198, 153, 69, 0.22)",
  },
});
export default DashboardScreen;
