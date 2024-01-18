import { Veiw, Text, StyleSheet, ListHeaderComponentStyle  } from "react-native";

export default Header = () => {
  const style = StyleSheet.create({
    fHeader: {
      backgroundColor: "#e6e",
      borderWidth: 2,
      borderColor: "#333",
    },
    SomeTxt: {
      color: "#fff",
      fontWeight:"400",
      textAlign: "center",
    },
  });

  // VERY IMPORTANT ******* ListHeaderComponent ******* prop will not accept a component which has a View tag inside it , and will throw an error
  return (
    // <Veiw>
      // <Text style={style.SomeTxt}> WHY does style not work???
      <Text>
        Nothing to see here just a simply header
      </Text>
    // </Veiw> SO dont use view tag inside a component which is going to be used as a ListHeaderComponent
  );
};
