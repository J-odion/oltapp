import * as React from "react";
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

function DetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* back arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.arrow} source={require("../assets/arrow.png")} />
      </TouchableOpacity>

      {/* all other contents  */}
      <View style={styles.body}>
        <ImageBackground
          source={require("../assets/bolt.png")}
          resizeMode="contain"
          style={styles.image}
        >
          <View style={styles.funding}>
            <View style={styles.topPage}>
              <Text style={styles.fund}>Enter Amount</Text>
              <View style={styles.Secfund}>
                <Text>Enter amount to fund wallet with</Text>
                <TextInput
                  style={styles.input}
                  placeholder=" "
                  keyboardType="numeric"
                />
                <View style={styles.price}>
                  <Text style={styles.PriceText}>500</Text>
                  <Text style={styles.PriceText}>1000</Text>
                  <Text style={styles.PriceText}>1500</Text>
                  <Text style={styles.PriceText}>2000</Text>
                </View>
              </View>
            </View>

            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
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
    left: 0,
    alignItems: "center",
  },
  fund: {
    left: 0,
    marginBottom: 30,
    marginTop: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  button: {
    paddingHorizontal: 60,
    backgroundColor: " rgba(86, 85, 143, 0.3)",
    flexDirection: "row",
    borderRadius: 10,
    borderColor: "#120F9F",
  },
  buttonText: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  price: {
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
    marginBottom: 50,
    marginTop: 15,
  },
  PriceText: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginRight: 10,
    backgroundColor: " rgba(71, 167, 92, 0.33)",
    borderRadius: 20,
  },
  Secfund: {
    marginLeft: 25,
    marginBottom: 250,
  },
});
export default DetailsScreen;
