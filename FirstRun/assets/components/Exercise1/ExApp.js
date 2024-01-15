import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";

import PokimonCard from "./components/PokimonCard";

export default ExerciseOne = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
      paddingTop:Platform.OS==="android"? 25:0
    },
  });

  return (
    // works only on iOS
    <SafeAreaView style={styles.container}> 
      <PokimonCard></PokimonCard>
    </SafeAreaView>
  );
};
