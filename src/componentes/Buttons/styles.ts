import { StyleSheet } from "react-native";

 const stylePrimary= StyleSheet.create({
   
    buttonContainer:{
        backgroundColor:"#29E5F2",
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center",
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 8
    },
    buttonText:{
          color:"#f8f8ff",
        fontWeight:"500",
        fontSize:18
    }
   
})
 const styleSecondary= StyleSheet.create({

    buttonContainer:{
        ...stylePrimary.buttonContainer,
        backgroundColor:"transparent",
       
    },
    buttonText:{
          ...stylePrimary.buttonText,
          color:"#29E5F2",
    }
   
})


export const styles ={
    primary: stylePrimary,
    secondary: styleSecondary,
    outline : stylePrimary
} as const
