import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    cardContainer:{
        backgroundColor: "#38cab7",
        borderRadius: 16,
        padding: 32,
        justifyContent:"center",
        alignItems:"center",
        gap: 10,
    },
    cardAvatarContainer:{
        backgroundColor: "#38cab7",
        padding: 4,
        borderRadius: 44
    },
    cardAvatarSubContainer:{
        backgroundColor: "#f8fbff",
        borderRadius: 40,
        height: 80,
        width: 80,
        justifyContent:"center",
        alignItems:"center"
    },
    cardAvatarSubLetter:{
        color: "#38cab7",
        fontSize: 32,
        fontWeight: "bold"
    },
    cardTitle:{
        color: "#f8fbff",
        fontSize: 32,
        fontWeight: "bold"
    },
    cardText:{
         color: "#f7faff",
        fontSize: 16,
        fontWeight: "bold"
    },
    cardSubTitle:{   
        color: "#d5e5ff",
        fontSize: 14,
    },
    cardSeparator:{
        backgroundColor: "#f8fbff39",
        height: 1,
        width: 250,
        marginVertical: 8
    },
    cardRole:{
        color:"#f8fbff",
        fontSize: 24,
        fontWeight: "bold",

    },
    cardBadgeContainer:{
        backgroundColor:"#ff8e15",
        paddingVertical: 8,
        paddingHorizontal: 16,           
         borderRadius: 20

    },
    cardBadgeText:{
        color: "#4c3600",
        fontWeight: "bold",
        letterSpacing: 1,
    },
    cardTextGroup:{
        justifyContent:"center",
        alignItems:"center",
        gap: 4
    }                
})