import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import * as yup from "yup";

function LoginScreen({ navigation }) {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });
  return (
    <SafeAreaView style={styles.container}>
      <View View className="flex-1 items-center justify-center ">
        {/* avatar */}
        <View style={styles.menuItem}>
          <Image
            style={styles.loginItem}
            source={require("../assets/avatar.png")}
          />
          <Text style={styles.text}> Login</Text>
        </View>
        {/* forms */}

        <View style={styles.forms}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={styles.input}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.email}
                  </Text>
                )}
                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.input}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.password}
                  </Text>
                )}
                {/* <Button
                    onPress={handleSubmit}
                    title="LOGIN"
                    disabled={!isValid}
                  /> */}

                <TouchableOpacity
                  onPress={() => navigation.navigate("Dashboard")}
                >
                  <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
        <View style={styles.options}>
          <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
            <Text style={styles.forgetText}>Forget password?</Text>
          </TouchableOpacity>

          <View style={styles.link}>
            <Text style={styles.text}>Not enrolled?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.linkText}>Sign up now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* menus */}
      <View style={styles.menus}>
        <TouchableOpacity style={styles.menuItem}>
          <Image
            style={styles.menuImage}
            source={require("../assets/faqs.png")}
          />
          <Text style={styles.text}>Faqs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image
            style={styles.menuImage}
            source={require("../assets/contact-us.png")}
          />
          <Text style={styles.text}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image
            style={styles.menuImage}
            source={require("../assets/notification.png")}
          />
          <Text style={styles.text}> Notification</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 20,
    width: 250,
    padding: 8,
    margin: 10,
    backgroundColor: "white",
    paddingHorizontal: 13,
    paddingVertical: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "#7378EA",
    justifyContent: "center",
    alignItems: "center",
  },
  menus: {
    top: 0,
    flexDirection: "row",
    marginBottom: 20,
  },
  text: {
    color: "white",
  },
  menuItem: {
    marginHorizontal: 30,
    alignItems: "center",
  },
  forms: {
    flex: 0.7,
    flexDirection: "column",
    padding: 0,
  },
  textInput: {
    height: 40,
    minWidth: 350,
    margin: 0,
    borderColor: "gray",
    textAlign: "center",
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  login: {
    backgroundColor: "orange",
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 50,
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  link: {
    flexDirection: "row",
    marginTop: 4,
  },
  linkText: {
    color: "white",
    paddingLeft: 5,
  },
  forgetText: {
    textDecorationLine: "underline",
    color: "#fff",
  },
  options: {
    left: -80,
  },
  menuImage: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  loginItem: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
});
export default LoginScreen;
