import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../componentes/Buttons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Form } from "./cadastro";
import { DevCard } from "../componentes/DevCard";

export default function SucessoScreen(){
    const router = useRouter()
    const params = useLocalSearchParams() as unknown as Form
    
    
    return(
        <SafeAreaView>
            <View style ={styles.container}>
                 <View style={styles.headerContainer}>
                    <Text style={styles.title}>Cartão criado com sucesso</Text>
                    <Text style={styles.subtitle}>Seu cartão de visita digital está pronto para uso!</Text>
                 </View>
                 <DevCard data={params} />
                    <View style ={styles.footerContainer} >
                      <Button label="Criar outro cartão" onPress={() => router.push("/cadastro")}/>
                      <Button label="Voltar ao inicio" variant="secondary" onPress={() => router.replace("index")}/>
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
        height: 700,
        gap: 10
    },
    title:{
        color:"#2d2d30",
        fontWeight:"bold",
        fontSize:32,
        width:200,
        textAlign:"center"

    },
    subtitle:{
        color:"#747477",
        fontWeight:"400",
        fontSize:16,
        width:200,
        textAlign:"center"
    },
   
    footerContainer:{
        flexDirection:"column",
        gap: 10,
    }
})
