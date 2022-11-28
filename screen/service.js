import { BottomTabBar } from "@react-navigation/bottom-tabs";
import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Bottomtab from "../components/bottomtab";

function Service({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.arrow}>Service</Text>
      </View>

      <View className="p-4" style={styles.body}>
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.navigate("MobileTopUp")}
            className="bg-[#6367BC] w-24 h-24 p-4 rounded items-center mr-4"
          >
            <Image
              className="w-10 h-10 my-1"
              source={require("../assets/mobiletopup.png")}
              resizeMode="contain"
            />
            <Text className="text-sm text-[#F3CC43]">AIRTIME</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Data")}
            className=" bg-[#6367BC] w-24 h-24 p-4 rounded items-center mr-4"
          >
            <Image
              className="w-10 h-10 my-1"
              source={require("../assets/wifi.png")}
              resizeMode="contain"
            />
            <Text className="text-sm text-[#F3CC43]">DATA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Electricity")}
            className=" bg-[#6367BC] w-26 h-26 p-4 rounded items-center"
          >
            <Image
              className="w-10 h-10 my-1"
              source={require("../assets/electricity.png")}
              resizeMode="contain"
            />
            <Text className="text-sm  text-[#F3CC43]">ELECTRICITY</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row my-8 justify-start">
          <TouchableOpacity
            onPress={() => navigation.navigate("Result")}
            className="bg-[#6367BC] w-24 h-24 p-4 rounded items-center mr-4"
          >
            <Image
              className="w-10 h-10 my-1"
              source={require("../assets/mobiletopup.png")}
              resizeMode="contain"
            />
            <Text className="text-sm text-[#F3CC43]">RESULTS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cable")}
            className=" bg-[#6367BC] w-24 h-24 p-4 rounded items-center mr-4 "
          >
            <Image
              className="w-10 h-10 my-1"
              source={require("../assets/CableTV.png")}
              resizeMode="contain"
            />
            <Text className="text-[#F3CC43] text-sm">CABLE</Text>
          </TouchableOpacity>
          <TouchableOpacity className=" bg-[#6367BC] w-24 h-24 p-4 rounded items-center">
            <Image
              className="w-10 h-10 my-1"
              source={require("../assets/betting.png")}
              resizeMode="contain"
            />
            <Text className="text-sm text-[#F3CC43]">BETTING</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-start">
          <TouchableOpacity className="bg-[#6367BC] w-24 h-24 p-4 rounded items-center mr-4">
            <Image
              className="w-10 h-10 my-1"
              source={require("../assets/insurance.png")}
              resizeMode="contain"
            />
            <Text className="text-[11px] text-[#F3CC43]">INSURANCE</Text>
          </TouchableOpacity>
          <TouchableOpacity className=" bg-[#6367BC] w-24 h-24 p-4 rounded items-center">
            <Image
              className="w-10 h-10 my-1"
              source={require("../assets/transfer.png")}
              resizeMode="contain"
            />
            <Text className="text-[12px] text-[#F3CC43]">TRANSFER</Text>
          </TouchableOpacity>
        </View>
      </View>

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
    backgroundColor: "#fff",
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  arrow: {
    fontSize: 18,
    letterSpacing: 1.3,
    paddingBottom: 10,
  },
  body: {
    flex: 1,
    padding: 10,
  },
});
export default Service;
