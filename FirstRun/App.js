import { Text, View, StyleSheet } from "react-native";
import Box from "./assets/Pages/Box";

export default function App() {
  return (
    <View style={styler.container}>
      <Box  propsStyle={{backgroundColor: "#aaa", flex:1}}> Box 1</Box>
      <Box  propsStyle={{backgroundColor: "#999", flex:1}}> Box 2</Box>
      <Box  propsStyle={{backgroundColor: "#777", flex:1}}> Box 3</Box>
      <Box  propsStyle={{backgroundColor: "#555", flex:1}}> Box 4</Box>
      <Box  propsStyle={{backgroundColor: "#333", flex:1}}> Box 5</Box>
      <Box  propsStyle={{backgroundColor: "#111", flex:1}}> Box 6</Box>
      <Box  propsStyle={{backgroundColor: "#000", flex:1}}> Box 7</Box>
    </View>
  );
}

const styler = StyleSheet.create({
  container: {
    flex:1,
    marginTop:20,
    borderWidth:2,
    borderColor: "red",
    //overflow:"hidden"
  },
});
