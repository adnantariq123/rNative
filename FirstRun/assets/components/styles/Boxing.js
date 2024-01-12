import { StyleSheet } from "react-native";

export default Boxing= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "plum",
        alignItems: "center",
        justifyContent: "center",
        padding: 60
      },
    box: {
        width:"25%", // notice how the fucking percentage needs to be a string...
        height:100,
        padding:10,
        margin:20,
        backgroundColor:"#ccc",
        //border:"1px solid black" THIs would never work. we need to define every property of the border indvidually
        borderWidth:2,
        borderColor: "purple",
        borderRadius:15
    },
    lightBlue: {
        backgroundColor:"lightblue",
        
    },
    lightGreen: {
        backgroundColor:"lightgreen"
    },
    //there are no common shadow style for both iOs as well as andriod... the following box shadow will work in iOS   
    boxShadow: {
        shadowColor: "#333", // but shadowColor works on both ^-^
        shadowOffset: {
            width:6,
            height:6
        },
        shadowOpacity:0.6,
        shadowRadius:4
    },
    // for andriods we need 
    andriodShadow: {
        elevation:10
    },
    darkMode: {
        backgroundColor: "#333",
        color: "#fff", // this shit here will not get carried over the the <Text> tag 
        marginBottom:20,
        padding:20,
        borderRadius:15

    }
})
