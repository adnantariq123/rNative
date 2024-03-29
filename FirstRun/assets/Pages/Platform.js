import { Text, View, StyleSheet, SafeAreaView, Platform } from "react-native";

// The purpose of SafeAreaView is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later.
//  Safe Area's paddings reflect the physical limitation of the screen, such as rounded corners or camera notches   *** SafeAreaView stills needs a bit of style==> flex:1

export default function App() {
  const styler = StyleSheet.create({
    safeContainer: {
      flex: 1,
      backgroundColor: "plum", // to avoid that white space that would show up on the top.. toggle this to see that white space
    },
    container: {
      backgroundColor: "plum",
      flex: 1,
    },
    box: {
      padding: 20,
      backgroundColor: Platform.OS === "ios" ? "lightblue" : "red", // this will show lightblue for ALL iOS devices like iPhone, iPads
      borderWidth: 4,
      borderColor: Platform.isPad ? "red" : "blue", // this new feature allows you to check is it was indeed an iPad
    },
    text: {
      ...Platform.select({ // platform specific code via using the spread operator ? this is fine for SMALL parts of the app
        ios: {
          color: "purple",
          fontSize: 24,
          fontStyle: "italic",
        },
        android: {
          color: "grey",
          fontSize: 34,
          fontStyle: "italic",
        },
      }),
      fontWeight: "bold",
      textAlign: "center",
    },
  });

  return (
    <SafeAreaView style={styler.safeContainer}>
      <View style={styler.container}>
        <View style={styler.box}>
          <Text style={styler.text}>Hello</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
