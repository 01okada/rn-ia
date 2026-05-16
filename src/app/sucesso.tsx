import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Buttons";
import { useRouter } from "expo-router";

export default function SucessoScreen() {
    const router = useRouter()

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.emoji}>✅</Text>
                    <Text style={styles.title}>Cartão criado com sucesso</Text>
                    <Text style={styles.subtitle}>Seu cartão de visita digital está pronto para uso!</Text>
                </View>
                <View style={styles.footer}>
                    <Button label="Criar outro cartão" onPress={() => router.push("/cadastro")} />
                    <Button label="Voltar ao início" variant="secondary" onPress={() => router.replace("/")} />
                </View>
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
        alignItems: "center",
        paddingHorizontal: 24,
        gap: 32,
    },
    header: {
        alignItems: "center",
        gap: 12,
    },
    emoji: {
        fontSize: 64,
    },
    title: {
        color: "#2d2d30",
        fontWeight: "bold",
        fontSize: 32,
        textAlign: "center",
    },
    subtitle: {
        color: "#747477",
        fontSize: 16,
        textAlign: "center",
        maxWidth: 260,
    },
    footer: {
        width: "100%",
        gap: 10,
    },
})
