import { Link } from "expo-router";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("screen");

const strings = {
  cta: "SIGN UP",
  footer: "ALREADY HAVE AN ACCOUNT?",
  footerCta: "LOG IN",
  subtitle: "Thousands of people are using silent moon for small meditation",
  title: "We are what we do",
};

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../assets/images/bg.png")}
        >
          <View style={styles.imageContainer}>
            <Image
              style={styles.logo}
              source={require("../assets/images/logo.png")}
            />
            <Image
              style={styles.heroImage}
              source={require("../assets/images/chair.png")}
            />
          </View>
        </ImageBackground>
        <Text style={styles.title}>{strings.title}</Text>
        <Text style={styles.subtitle}>{strings.subtitle}</Text>
        <View style={styles.button}>
          <Link href={"/topics"}>
            <Text style={styles.buttonText}>{strings.cta}</Text>
          </Link>
        </View>
        <Text style={styles.footer}>
          {strings.footer}{" "}
          <Text style={styles.footerCta}>{strings.footerCta}</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1 },
  heroImage: { marginTop: 60 },
  logo: { alignSelf: "center", marginTop: 50 },
  backgroundImage: {
    aspectRatio: 1657 / 2016,
    width,
  },
  title: {
    textAlign: "center",
    fontFamily: "HelveticaNeue",
    fontWeight: "bold",
    fontSize: 30,
  },
  subtitle: {
    textAlign: "center",
    fontFamily: "HelveticaNeue",
    fontWeight: "200",
    fontSize: 16,
    marginTop: 12,
    paddingHorizontal: 16,
  },
  button: {
    alignSelf: "center",
    height: 63,
    width: Dimensions.get("screen").width * 0.9,
    backgroundColor: "#8E97FD",
    borderRadius: 38,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "HelveticaNeue",
    color: "white",
  },
  footer: { textAlign: "center", marginTop: 16 },
  footerCta: { color: "#8E97FD" },
  imageContainer: { alignSelf: "center" },
});
