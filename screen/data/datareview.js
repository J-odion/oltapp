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

function DataReview({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* back arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={styles.arrow}
          source={require("../../assets/arrow.png")}
        />
      </TouchableOpacity>
      {/* all other contents  */}
      <View style={styles.body}>
        <ImageBackground
          source={require("../../assets/bolt.png")}
          resizeMode="contain"
          style={styles.image}
        >
          <View style={styles.funding}>
            <View style={styles.topPage}>
              <Text style={styles.fund}>Review and pay</Text>
              {/* form group */}
              <View style={styles.Secfund}>
                <View style={styles.groupes}>
                  <View style={styles.row}>
                    <View style={styles.price}>
                      <Text style={styles.label}>Plan</Text>
                      <Text style={styles.label}>
                        100MB @ validity for 1Day
                      </Text>
                    </View>
                    <View style={styles.price}>
                      <Text style={styles.label}>Amount</Text>
                      <Text style={styles.label}>#1000.00</Text>
                    </View>
                    <View style={styles.price}>
                      <Text style={styles.label}>Mobile Number</Text>
                      <Text style={styles.label}>0803200000</Text>
                    </View>
                    <View style={styles.price}>
                      <Text style={styles.label}>Service Type</Text>
                      <Text style={styles.label}>Data Topup (Mtn)</Text>
                    </View>
                  </View>

                  <View>
                    <Text style={styles.label}>Purchasing from</Text>
                  </View>
                  <View style={styles.box}>
                    <Image
                      style={styles.imageIcon}
                      source={require("../../assets/icon.png")}
                    />
                    <View>
                      <Text style={styles.textSmall}> Boltrecharge Wallet</Text>
                      <Text style={styles.textSmaller}> 374828742737</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <ImageBackground source={require("../../assets/subt.png")}>
                    <View style={styles.subt}>
                      <View style={styles.split}>
                        <Text style={styles.label}>Sub Total</Text>
                        <Text style={styles.label}>#500</Text>
                      </View>
                      <View style={styles.split}>
                        <Text style={styles.textSmaller}>Extra charges</Text>
                        <Text style={styles.textSmaller}>#0</Text>
                      </View>
                      <Text style={styles.underline}></Text>
                      <View style={styles.split}>
                        <Text style={styles.label}>Grand Total</Text>
                        <Text style={styles.label}>#500</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              </View>
            </View>

            <View>
              <TouchableOpacity onPress={() => navigation.navigate("DataPin")}>
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
  imageIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    margin: 5,
    backgroundColor:
      "radial-gradient(75.56% 448.14% at 50% 50%, rgba(41, 34, 141, 0.2) 0%, rgba(115, 106, 255, 0) 100%)",
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
    marginBottom: 10,
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
    backgroundColor: "rgba(86, 85, 143, 1)",
    textAlign: "center",
  },
  groupes: {
    backgroundColor:
      "radial-gradient(75.56% 448.14% at 50% 50%, rgba(41, 34, 141, 0.2) 0%, rgba(115, 106, 255, 0) 100%)",
    padding: 10,
    borderRadius: 10,
    marginBottom: 100,
  },
  subt: {
    padding: 30,
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    borderRadius: 10,
    padding: 10,
    backgroundColor:
      "radial-gradient(75.56% 448.14% at 50% 50%, rgba(41, 34, 141, 0.2) 0%, rgba(115, 106, 255, 0) 100%)",
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: "#B3C1CD",
    marginVertical: 10,
  },
  textSmall: {
    fontSize: 8,
  },
  textSmaller: {
    color: "#000AFE",
    fontSize: 8,
  },
  split: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    backgroundColor: "rgba(191, 190, 242, 0)",
  },
  inputGroup: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    marginBottom: 20,
    width: 130,
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
export default DataReview;
