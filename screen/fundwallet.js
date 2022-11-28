import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function FundWallet({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.arrow} source={require("../assets/arrow.png")} />
      </TouchableOpacity>
      <View style={styles.body}>
        <ImageBackground
          source={require("../assets/bolt.png")}
          resizeMode="contain"
          style={styles.image}
        >
          <View style={styles.funding}>
            <View>
              <Text style={styles.fund}>Fund Wallet</Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("EnterAmount")}
                style={styles.button}
              >
                <Image
                  style={styles.loginItem}
                  source={require("../assets/fundwallet.png")}
                />
                <Text className="" style={styles.buttonText}>
                  Fund my Boltrecharge Wallet
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  body: {
    flex: 1,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  arrow: {
    width: 20,
    height: 20,
    margin: 10,
  },
  funding: {
    flex: 1,
    alignItems: "flex-start",
  },
  fund: {
    left: 0,
    marginBottom: 150,
    marginTop: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  button: {
    paddingHorizontal: 20,
    backgroundColor: " rgba(238, 238, 238, 0.7)",
    flexDirection: "row",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
export default FundWallet;
