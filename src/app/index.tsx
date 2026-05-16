import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Buttons";
import { useRouter } from "expo-router";

export default function HomeScreen() {
    const router = useRouter()

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.logo}>DevCard</Text>
                    <Text style={styles.subtitle}>Seu cartão de visita digital</Text>
                </View>
                <Button label="Criar meu Cartão" onPress={() => router.push("/cadastro")} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 24,
        gap: 24,
    },
    header: {
        alignItems: "center",
        gap: 8,
    },
    logo: {
        color: "#29E5F2",
        fontWeight: "bold",
        fontSize: 56,
    },
    subtitle: {
        color: "#747477",
        fontSize: 16,
        textAlign: "center",
    },
})
