import { Text, View, StyleSheet, useWindowDimensions } from "react-native"; 


export default function App() {

  const windowWidthx = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const styler = StyleSheet.create({
    container: {
      backgroundColor:"plum",
      flex:1,
      alignItems: "center",
      justifyContent:"center"
    },
    box: {

      width: windowWidthx > 500 ? "100%": "70%", 
      height: windowHeight > 600 ? "40%": "70%",
      backgroundColor:"lightblue",
      alignItems: "center",
      justifyContent:"center"
    },

  });

  return (
    <View style={styler.container}>
      <View style={styler.box}>

        <Text style={{fontSize:30, letterSpacing: windowWidthx > 500 ? 20: 0}}>Hello Rafi!</Text>
      </View>
    </View>
  );
}




