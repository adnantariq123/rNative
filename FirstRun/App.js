import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable, Modal,
  ActivityIndicator,
  Alert
} from "react-native";

import React, { useState } from "react";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {

  const [boxToggle, setBoxToggle] = useState(false)
  const [modalToggle, setmodalToggle] = useState(false)

  const JimDoe = () => {
    setBoxToggle((prev) => !prev)
  }
  return (
    <View style={styles.container}>

      {/* is loading==true ?  then use  ^-^ <ActivityIndicator size={"large"} color={"white"}/> */}
      {/* backgroundColor property is SPECIFIC to andriod apps and not iOS devices  *** hidden */}
      <StatusBar backgroundColor="lightGreen" barStyle="light-content" />


      <ScrollView>
        <Text style={styles.rafiStyle}>Hi Rafi ^-^</Text>

        {/* instead of onClick in React Native buttons have onPress and color and disabled property*/}
        <Button title="Open Modal" onPress={() => setmodalToggle(true)} />

        {/* ALERT WITH ARRAY OF BTN
        Alert.alert will accept an ARRAY of obj to add more than one btn  */}
        <Button title="Rafi btn" color="red" onPress={() => Alert.alert("Hello Rafi^-^", "How do you do", [
          {
            text: "Cancel",
            onPress: () => console.log("cancel pressed")
          },
          {
            text: "OK",
            onPress: () => console.log("O.K pressed")
          },
          {
            text: "whatever",
            onPress: () => console.log("Whatever")
          }

        ])} />

        {/* disabled btn   */}
        <Button title="is a button" onPress={() => { alert("button pressed") }} disabled />


        {/* has onPress it also has onLongPress as well as onPressOut */}
        <Pressable onPress={() => JimDoe()} onLongPress={() => Alert.alert("Long long Press ^-^")}>

          {/* NETWORK IMAGE 
          so when using a network image we need to convert to an object ADD a key called uri.... key you know, key-value-pair 
          also it is MANDATORY to set width n height for network images*/}
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
          : null}



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


      <Modal
        visible={modalToggle}
        onRequestClose={() => setmodalToggle(false)}
        animationType="slide" // none, slide, fade  --- by default its none
        presentationStyle="formSheet" //'fullScreen', 'pageSheet' -  work only in protraite mode, 'formSheet', 'overFullScreen'
      >
        {/*  do we need another view INSIDE the modal.. apprantly */}
        <Text style={styles.modalTxt}> what's up asdfdfghjk</Text>
        <Button title="Close Modal" color="red" onPress={() => setmodalToggle(false)} />
      </Modal>

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
  },
  modalTxt: {
    fontSize: 30,
    color: "#036",
    fontWeight: "bold",
    textAlign: "center"
  }

});
