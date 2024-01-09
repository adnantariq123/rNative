import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
const logoImg =require("./assets/adaptive-icon.png")

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi Rafi!</Text>
      <StatusBar style="auto" />
      <View style={styles.bordered}>
        {/* notice how the white text had to be added inside another text tag */}
        <Text>
          <Text style={styles.txtWhite}>YO! </Text>
          This be another text
        </Text>

        {/* the SOURCE PROPS FOR Image EXPECT A NUMBER!!! So what happens when we passing logoImg as a value for source??
        we are actually passing a NUMBER that is refrence an image in the assets folder */}
       <Image source={logoImg} style={{width: 100, height:100}}/>  
      </View>

      {/* so when using a network image we need to convert to an object ADD a key called uri.... key you know, key-value-pair 
      also it is MANDATORY to set width n height for network images*/}
      <Image source={{uri:'https://picsum.photos/id/870/200/300?grayscale&blur=2'}} style={{width: 200, height:300}}/>


      <ImageBackground source={logoImg} style={{flex:1}}>
        <Text> image text</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  bordered: {
    borderColor:"#666",
    borderWidth:"3px",
    width: "100%",
    height: 100,
    backgroundColor: "#6699cc",
    //color: "white" adding color here did NOT cary over the white color to the text. hence you have to use txtWhite
  },
  txtWhite: {
    color: "white",
  },
});
