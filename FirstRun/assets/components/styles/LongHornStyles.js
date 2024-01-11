import { StyleSheet } from "react-native";


export default SuperStyling = StyleSheet.create({
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
  