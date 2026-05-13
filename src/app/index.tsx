import { StyleSheet, Text,TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen(){
    return(
        <SafeAreaView>
            <View style ={styles.container}>
                 <View style={styles.headerContainer}>
                    <Text style={styles.logo}>DevCard</Text>
                    <Text style={styles.subtitle}>Seu cartão de visita digital</Text>
                 </View>
                    <View>
                       
                    </View>
         </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        justifyContent:"center",
        height:"100%",
        alignContent:"center",
        paddingHorizontal: 24
    },
    headerContainer:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height: 700
    },
    logo:{
        color:"#29E5F2",
        fontWeight:"bold",
        fontSize:56
    },
    subtitle:{
        color:"#747477",
        fontWeight:"400",
        fontSize:16,
        width:200,
        textAlign:"center"
    },
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
