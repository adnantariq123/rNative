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

    <Text>It is important to mention that ALL deminsions in React native are unit LESS.(and represent dencity in-dependent pixels) no rem, em, etc </Text>
      {/* for adding more than one 'css class' we have to make use of Array */}
      <View style={[Boxing.box, Boxing.lightBlue]}></View>
      <View style={[Boxing.box, Boxing.lightGreen]}></View>



    </View>
  );
}

