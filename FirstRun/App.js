import { Text, View, StyleSheet } from "react-native";


export default function App() {
  return (
    <View style={styler.container}>
      <View style={styler.box}>
        <Text style={styler.text}>Welcome!</Text>
      </View>
    </View>
  );
}

const styler = StyleSheet.create({
  container: {
    backgroundColor:"plum",
    flex:1,
    alignItems: "center",
    justifyContent:"center"
  },
  box: {
    width:300,
    height:300,
    backgroundColor:"lightblue",
    alignItems: "center",
    justifyContent:"center"
  },
  text: {
    fontSize:30,
    fontWeight:"bold"
  }
});
