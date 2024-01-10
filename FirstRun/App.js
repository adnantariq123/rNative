import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable
} from "react-native";

import React, {useState} from "react";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {

  const [boxToggle, setBoxToggler] = useState(false)

  const JimDoe =()=>{
    setBoxToggler((prev)=>!prev)
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.rafiStyle}>Hi Rafi ^-^</Text>

        {/* instead of onClick in React Native buttons have onPress and color and disabled property*/}
        <Button title="is a button" onPress={() => { alert("button pressed") }} />
        <Button title="is a button" color="red" onPress={() => { alert("red button pressed") }} />
        <Button title="is a button" onPress={() => { alert("button pressed") }} disabled />
        <StatusBar style="auto" />

        {/* NETWORK IMAGE 
      so when using a network image we need to convert to an object ADD a key called uri.... key you know, key-value-pair 
      also it is MANDATORY to set width n height for network images*/}
      <Pressable onPress={()=>JimDoe()}>
          <Image
            source={{
              uri: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
            }}
            style={{ width: 200, height: 300, alignSelf: "center" }}
            
            
          />
      </Pressable>

        {boxToggle ? 
        <View style={styles.bordered}>
          <Text>
            <Text style={styles.txtWhite}>YO! </Text>
            {/* notice how the white text had to be added inside another text tag */}
            This be another text
          </Text>

          {/* the SOURCE PROPS FOR Image EXPECT A NUMBER. So what happens when we passing logoImg as a value for source??
        we are actually passing a NUMBER that is refrence an image in the assets folder */}
          <Image source={logoImg} style={{ width: 100, height: 100, alignSelf: "flex-end" }} />
        </View>
        :null}



        {/*kinda sad but you need to have a child element to make background image show??  */}
        <ImageBackground source={logoImg} style={{ flex: 1 }}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{"\n\n"}Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Text>
        </ImageBackground>


      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
    padding: 60
  },
  bordered: {
    borderColor: "#666",
    borderWidth: "3px",
    width: "100%",
    height: 100,
    backgroundColor: "#6699cc",
    //color: "white" adding color here did NOT cary over the white color to the text. hence you have to use txtWhite
  },
  txtWhite: {
    color: "white",
  },
  rafiStyle: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20
  }
});
