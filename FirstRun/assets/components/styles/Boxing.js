import { StyleSheet } from "react-native";

export default Boxing= StyleSheet.create({
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
    }
})
