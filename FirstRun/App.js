import { Text, View, StyleSheet } from "react-native";
import Box from "./assets/Pages/Box";

export default function App() {
  return (
    <View style={styler.container}>
      <Box  propsStyle={{backgroundColor: "#aaa", alignSelf:"flex-start"}}> Box 1</Box>
      <Box  propsStyle={{backgroundColor: "#999"}}> Box 2</Box>
      <Box  propsStyle={{backgroundColor: "#777", alignSelf:"flex-end"}}> Box 3</Box>
      <Box  propsStyle={{backgroundColor: "#555"}}> Box 4</Box>
      <Box  propsStyle={{backgroundColor: "#333"}}> Box 5</Box>
      <Box  propsStyle={{backgroundColor: "#111"}}> Box 6</Box>
      <Box  propsStyle={{backgroundColor: "#000"}}> Box 7</Box>
    </View>
  );
}

const styler = StyleSheet.create({
  container: {
    flex:1,
    //flexDirection: "column", // BY DEFAULT it is set to column
    //flexDirection: "row",
    //justifyContent: "space-around",
    //justifyContent:"space-between",
    justifyContent:"space-evenly",
    //marginTop:20,
    borderWidth:2,
    borderColor: "red",
    //overflow:"hidden",
    //alignItems:"flex-start",
    //alignItems:"baseline",
    alignItems: "center"
  },
});
