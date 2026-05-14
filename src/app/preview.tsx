import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../componentes/Buttons";

export default function previewScreen(){
    return(
        <SafeAreaView>
            <View style ={styles.container}>
                 <View style={styles.headerContainer}>
                    <Text style={styles.title}>Preview do Cartão</Text>
                 </View>

                 <View style ={styles.cardContainer}>
                    <View style ={styles.cardAvatarContainer}>
                        <View style ={styles.cardAvatarSubContainer}>
                            <Text style ={styles.cardAvatarSubLetter}>M</Text>
                         </View>
                    </View>

                   <View style ={styles.cardTextGroup}>
                        <Text style ={styles.cardTitle}> Matheus Okada</Text>
                        <View style ={styles.cardTextGroup}>
                            <Text style ={styles.cardText}>Engenheiro de Software</Text>
                            <Text style ={styles.cardSubTitle}>MTI</Text>
                        </View>
                   </View>

                    <View style ={styles.cardSeparator}/> 

                        <View style ={styles.cardTextGroup}>
                            <Text style ={styles.cardSubTitle}>Especialista em</Text>
                            <Text style ={styles.cardRole}>Backend</Text> 
                    
                            
                        </View>   
                            
                    <View style ={[styles.cardBadgeContainer, {marginTop: 8}]}>
                        <Text style ={styles.cardBadgeText}>Especialista</Text>
                    </View>
                        <Text style ={styles.cardSubTitle}>2 anos de experiência</Text>
                 </View>
                    <View style ={styles.footerContainer} >
                      <Button label="Editar" variant="outline"/>
                      <Button label="Finalizar"/>
                    </View>
         </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        justifyContent:"center", 
        paddingHorizontal: 24,
        gap: 10
    },
    headerContainer:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"flex-start",
        gap: 14
    },
    title:{
        color:"#2d2d30",
        fontWeight:"bold",
        fontSize:28,
        textAlign:"center"
    },
    
    footerContainer:{
        flexDirection:"row",
        gap: 10,
    },
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
        borderRadius: "100%"
    },
    cardAvatarSubContainer:{
        backgroundColor: "f8fbff",
        borderRadius: "100%",
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
        backgroundColor:"f8fbff",
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
