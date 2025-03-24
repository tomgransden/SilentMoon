import {
  Text,
  Image,
  Dimensions,
  ImageBackground,
  View,
  TextInput,
  TextInputProps,
  ScrollView,
  KeyboardAvoidingView,
  ImageSize,
  ImageSourcePropType,
  ColorValue,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StyledTextInput = (props: TextInputProps) => (
  <TextInput
    {...props}
    style={{
      backgroundColor: "#F2F3F7",
      height: 63,
      borderRadius: 15,
      paddingLeft: 16,
    }}
  />
);

type IStyledButtonProps = {
  backgroundColor: ColorValue;
  icon?: ImageSourcePropType;
  buttonText: string;
  buttonTextColor: ColorValue;
};

const StyledButton = ({
  backgroundColor,
  buttonText,
  buttonTextColor,
  icon,
}: IStyledButtonProps) => {
  return (
    <View
      style={{
        height: 63,
        backgroundColor,
        borderRadius: 32,
        borderWidth: 1,
        borderColor: "#EBEAEC",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: icon ? "row" : "column",
          alignItems: "center",
          columnGap: 12,
        }}
      >
        {icon ? (
          <Image
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
            source={icon}
          />
        ) : null}
        <Text style={{ fontSize: 14, color: buttonTextColor }}>
          {buttonText}
        </Text>
      </View>
    </View>
  );
};

export default function CreateAccountScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          <ImageBackground
            style={{
              width: Dimensions.get("screen").width,
              height: 400,
              paddingTop: 160,
            }}
            resizeMode="cover"
            source={require("../assets/images/curves.png")}
          >
            <Text
              style={{
                fontFamily: "HelveticaNeue",
                fontSize: 28,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Create your account
            </Text>
            <View style={{ marginHorizontal: 16, rowGap: 12, marginTop: 12 }}>
              <StyledButton
                buttonTextColor={"#F6F1FB"}
                backgroundColor={"#7583CA"}
                icon={require("../assets/images/facebook.png")}
                buttonText="CONTINUE WITH FACEBOOK"
              />
              <StyledButton
                buttonTextColor={"#3F414E"}
                backgroundColor={"ffffff"}
                icon={require("../assets/images/google.png")}
                buttonText="CONTINUE WITH GOOGLE"
              />
            </View>
          </ImageBackground>
          <Text style={{ textAlign: "center" }}>OR LOG IN WITH EMAIL</Text>
          <View style={{ marginHorizontal: 16, rowGap: 12, marginTop: 12 }}>
            <StyledTextInput placeholder="Username" />
            <StyledTextInput placeholder="Email address" />
            <StyledTextInput placeholder="Password" />
            <StyledButton
              buttonTextColor={"#F6F1FB"}
              backgroundColor={"#7583CA"}
              buttonText="GET STARTED"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
