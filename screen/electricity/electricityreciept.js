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

function ElectricityReciept({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topFirst}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.arrow}
            source={require("../../assets/arrow.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSecond}>
        <View style={styles.body}>
          <ImageBackground
            source={require("../../assets/reciept.png")}
            resizeMode="contain"
            style={styles.image}
          >
            {/* top section */}
            <View style={styles.topContents}>
              <Image
                style={styles.starFirst}
                resizeMode="contain"
                source={require("../../assets/star.png")}
              />
              <Image
                style={styles.starSecond}
                resizeMode="contain"
                source={require("../../assets/star.png")}
              />
              <Image
                style={styles.spiral}
                resizeMode="contain"
                source={require("../../assets/spiral.png")}
              />
              <Image
                style={styles.starthird}
                resizeMode="contain"
                source={require("../../assets/star.png")}
              />
              <Image
                style={styles.last}
                resizeMode="contain"
                source={require("../../assets/star.png")}
              />
              <Text> Transaction Receipt</Text>

              <Image
                style={styles.dividerFirst}
                resizeMode="contain"
                source={require("../../assets/divider.png")}
              />
            </View>
            {/* middle content */}
            <View style={styles.middleContents}>
              <View style={styles.numtext}>
                <Text style={styles.num}>Status:</Text>
                <Text style={styles.nums}>Successful</Text>
              </View>

              <View style={styles.numtext}>
                <Text style={styles.num}>Receipt ID:</Text>
                <Text style={styles.nums}>000345378766</Text>
              </View>

              <View style={styles.numtext}>
                <Text style={styles.num}>Exchange Ref:</Text>
                <Text style={styles.nums}>0000875634389673536333</Text>
              </View>

              <View style={styles.numtext}>
                <Text style={styles.num}>Date:</Text>
                <Text style={styles.nums}>5th Jul 2022 12:37PM</Text>
              </View>

              <View style={styles.numtext}>
                <Text style={styles.num}>Data Phone No:</Text>
                <Text style={styles.nums}>08145991555</Text>
              </View>
              <View style={styles.numtext}>
                <Text style={styles.num}>Plan:</Text>
                <Text style={styles.nums}>7.5GB @#1500 valid for 7days</Text>
              </View>

              <View style={styles.numtext}>
                <Text style={styles.num}>Mobile Network:</Text>
                <Text style={styles.nums}>MTN</Text>
              </View>

              <View style={styles.numtext}>
                <Text style={styles.num}>Charges:</Text>
                <Text style={styles.nums}>N0.00</Text>
              </View>
            </View>
            <View style={styles.nearbuttom}>
              <Image
                style={styles.divider}
                resizeMode="contain"
                source={require("../../assets/divider.png")}
              />
              <View style={styles.numtext}>
                <Text style={styles.num}>Amount:</Text>
                <Text style={styles.nums}>#1,000</Text>
              </View>
            </View>
            {/* buttom content */}
            <View style={styles.buttomContents}>
              <Text style={styles.thank}> THANK YOU</Text>
              <TouchableOpacity>
                <Text style={styles.login}> Print Receipt</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.share}>Share</Text>
              </TouchableOpacity>
              <View style={styles.powered}>
                <Text style={styles.power}>Powered by: </Text>
                <Text style={styles.bolt}>Boltrecharge </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(206, 206, 243, 1)",
  },
  topFirst: {
    flex: 0.3,
    backgroundColor: "rgba(206, 206, 243, 1)",
  },
  bottomSecond: {
    backgroundColor: "rgba(192, 192, 251, 1)",
    flex: 0.7,
    position: "relative",
  },
  body: {
    flex: 1,
    top: -140,
  },
  image: {
    flex: 1,
    height: 550,
  },
  topContents: {
    flex: 0.2,
    alignItems: "center",
    marginTop: 40,
    position: "relative",
  },
  starFirst: {
    width: 20,
    height: 20,
    left: 110,
    marginTop: 40,
    position: "absolute",
  },
  starSecond: {
    width: 35,
    height: 30,
    left: 85,
    marginTop: 0,
    position: "absolute",
  },
  spiral: {
    width: 50,
    height: 40,
    right: 130,
    marginTop: -40,
    position: "absolute",
  },
  starthird: {
    width: 35,
    height: 30,
    right: 80,
    marginTop: 0,
    position: "absolute",
  },
  last: {
    width: 25,
    height: 20,
    right: 80,
    marginTop: 40,
    position: "absolute",
  },
  dividerFirst: {
    width: 230,
    marginVertical: 10,
    top: 40,
  },
  divider: {
    width: 230,
    marginVertical: 10,
  },
  middleContents: {
    flex: 0.6,
    alignItems: "center",
    position: "relative",
    marginTop: 30,
  },
  numtext: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
    width: 230,
    left: 90,
  },
  num: {
    fontSize: 11,
    paddingVertical: 5,
  },
  nums: {
    color: "rgba(20, 28, 214, 1)",
    fontSize: 11,
    paddingVertical: 5,
  },
  nearbuttom: {
    alignItems: "center",
  },
  buttomContents: {
    alignItems: "center",
    flex: 0.2,
    marginBottom: 2,
  },
  arrow: {
    width: 25,
    height: 20,
    left: 20,
    marginTop: 20,
    backgroundColor: "rgba(206, 206, 243, 1)",
  },

  thank: {
    color: "rgba(20, 28, 214, 1)",
    paddingVertical: 10,
  },
  login: {
    backgroundColor: "rgba(243, 204, 67, 1)",
    paddingHorizontal: 13,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 10,
    color: "white",
    textAlign: "center",
    fontSize: 14,
    width: 220,
  },
  share: {
    color: "rgba(243, 204, 67, 1)",
    paddingVertical: 5,
  },
  powered: {
    flexDirection: "row",
  },
  power: {
    fontStyle: "italic",
    fontSize: 10,
  },
  bolt: {
    color: "rgba(20, 28, 214, 1)",
    fontStyle: "italic",
    fontSize: 10,
  },
});
export default ElectricityReciept;
