import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../componentes/Buttons";
import { DevCard } from "../componentes/DevCard";
import { use } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Form } from "./cadastro";

export default function PreviewScreen(){
    const router = useRouter()
    const params = useLocalSearchParams() as unknown as Form
    return(
        <SafeAreaView>
            <View style ={styles.container}>
                 <View style={styles.headerContainer}>
                    <Text style={styles.title}>Preview do Cartão</Text>
                 </View>

                    <DevCard data = {params} />
                
                    <View style ={styles.footerContainer} >
                      <Button label="Editar" variant="outline" onPress={() => router.push("/cadastro")} />
                      <Button label="Finalizar" onPress={() => router.push("/sucesso")}/>
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
        flexDirection:"column",
        gap: 10,
    },
})