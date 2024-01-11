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



import SuperStyling from "./assets/components/styles/LongHornStyles";
import Boxing from "./assets/components/styles/Boxing";

export default function App() {

  const [boxToggle, setBoxToggle] = useState(false)
  const [modalToggle, setmodalToggle] = useState(false)

  const JimDoe = () => {
    setBoxToggle((prev) => !prev)
  }
  return (
    <View style={SuperStyling.container}>
      <View style={Boxing.darkMode}>
        <Text style={{color:"#fff"}}>Style Inheritance - BRO, there is NO inheritance in React native. SO, a View's color will NOT get carried over to the text. But a Text within a Text will allow the inheritance!</Text>
      </View>

    <Text>It is important to mention that ALL deminsions in React native are unit LESS.(and represent dencity in-dependent pixels) no rem, em, etc </Text>
      {/* for adding more than one 'css class' we have to make use of Array */}
      <View style={[Boxing.box, Boxing.lightBlue, Boxing.boxShadow]}></View>
      <View style={[Boxing.box, Boxing.lightGreen]}></View>



    </View>
  );
}

