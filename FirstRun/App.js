import { Text, View, StyleSheet, Dimensions } from "react-native";
import React, {useState, useEffect} from 'react';


export default function App() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("screen")
  })

  useEffect(()=>{
    //alert("this should also work")
    const subscription = Dimensions.addEventListener("change", ({window})=>{
      setDimensions ({window})
    })
    return ()=> subscription?.remove();
    
  },[])

  const {window} = dimensions;
  const windowWidth = window.width;
  const windowHeight = window.height;

  return (
    <View style={styler.container}>
      <View style={styler.box}>
        <Text style={styler.text}>Hello Rafi!</Text>
      </View>
    </View>
  );
}

// Screen and window dimensions are different on android
const windowWidth=Dimensions.get("window").width // screen refering to the entire thing.. 
const windowHeight=Dimensions.get("window").height
//ONE VERY MAJOR DRAW BACK of the deminsions api -  the values do not dynamiclly update,
// when the windows deminsions change either due to orentation, or more complex senarios as foldable phones

// alert(windowWidth) 

// alert(windowHeight)

const styler = StyleSheet.create({
  container: {
    backgroundColor:"plum",
    flex:1,
    alignItems: "center",
    justifyContent:"center"
  },
  box: {
    width:windowWidth/2,
    height:windowHeight/2,
    // VERY VERY COOL! In the following example the iPad has more than 500 Dimensions.get("window").width SO the width bcame 100%. For the iPhone it will be 70% width instead!
    width: windowWidth > 500 ? "100%": "70%", 
    height: windowWidth > 600 ? "40%": "70%",
    backgroundColor:"lightblue",
    alignItems: "center",
    justifyContent:"center"
  },
  text: {
    fontSize:30,
    fontWeight:"bold",
    letterSpacing: windowWidth > 500 ? 20: 0 // so this letterSpacing:20 will only show on the iPad JUST HOW COOL is that!
  }
});
