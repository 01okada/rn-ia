import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Buttons";
import { DevCard } from "../components/DevCard";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Form } from "../types/form";

export default function PreviewScreen() {
    const router = useRouter()
    const params = useLocalSearchParams() as unknown as Form

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Preview do Cartão</Text>
                <DevCard data={params} />
                <View style={styles.footer}>
                    <Button label="Editar" variant="outline" onPress={() => router.push("/cadastro")} />
                    <Button label="Finalizar" onPress={() => router.push({ pathname: "/sucesso", params })} />
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
        paddingHorizontal: 24,
        gap: 16,
    },
    title: {
        color: "#2d2d30",
        fontWeight: "bold",
        fontSize: 28,
    },
    footer: {
        gap: 10,
    },
})
