import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
 
    formGroup:{
        flexDirection:"column",
        gap: 4
    },
    formLabel:{
        color:"#2d2d30",
        fontWeight:"bold",
        
    },
   
    formInput:{
        borderRadius: 8,
        borderWidth: 1,
        borderColor:"#afafb4",
        paddingHorizontal: 12,
        paddingVertical: 8,
        height:50,
        backgroundColor:"#f8f8ff"
    },
    formError:{
         color:"#b61052",
        fontWeight:"bold",
    },

})