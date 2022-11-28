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

function EnterCardDetails({ navigation }) {
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
              <Text style={styles.fund}>Enter your card details</Text>
              {/* form group */}
              <View style={styles.Secfund}>
                <Text style={styles.label}>Card Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder=" "
                  keyboardType="numeric"
                />
                <Text style={styles.label}>Holder's Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder=" "
                  keyboardType="default"
                />
                <View style={styles.price}>
                  <View style={styles.group}>
                    <Text style={styles.label}>Expiring Date</Text>
                    <TextInput
                      style={styles.inputGroup}
                      placeholder=" "
                      keyboardType="numeric"
                    />
                  </View>
                  <View>
                    <Text style={styles.label}>3-Digit CVV</Text>
                    <TextInput
                      style={styles.inputGroup}
                      placeholder=" "
                      keyboardType="numeric"
                    />
                  </View>
                </View>
              </View>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("FundingSummary")}
              >
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
    paddingHorizontal: 20,
    flex: 1,
  },
  topPage: {
    flex: 0.9,
  },
  fund: {
    left: 0,
    marginBottom: 30,
    marginTop: 10,
    fontSize: 18,
    fontWeight: "500",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 18,
    paddingVertical: 5,
    width: 250,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
    borderColor: "#000000",
    borderWidth: 1,
    backgroundColor: " rgba(86, 85, 143, 0.3)",
    textAlign: "center",
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 250,
  },
  inputGroup: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    marginBottom: 20,
    width: 130,
  },
  group: {
    marginRight: 0,
  },
  PriceText: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginRight: 10,
    backgroundColor: " rgba(71, 167, 92, 0.33)",
    borderRadius: 20,
  },
  label: {
    fontSize: 11,
    fontWeight: "500",
    marginBottom: 5,
  },
  Secfund: {
    marginHorizontal: 25,
    marginBottom: 150,
  },
});
export default EnterCardDetails;
