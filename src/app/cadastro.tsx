import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Buttons";
import { Input } from "../components/Input";
import { ButtonColors } from "../components/ButtonColors";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Form, FormError } from "../types/form";

const cardColors = [
    { id: "1", name: "Azul", colorCode: "#3a3ada" },
    { id: "2", name: "Verde", colorCode: "#38cab7" },
    { id: "3", name: "Rosa", colorCode: "#ff00ff" }
]

export default function CadastroScreen() {
    const router = useRouter()
    const [form, setForm] = useState<{ data: Form, error: FormError }>({
        data: {
            fullName: "",
            role: "",
            company: "",
            experience: "",
            cardColor: "",
            favoriteTech: ""
        },
        error: {}
    })

    function handleSubmit() {
        const { fullName, role, experience, cardColor, favoriteTech } = form.data
        handleInputValidation("fullName", fullName)
        handleInputValidation("role", role)
        handleInputValidation("experience", experience)
        handleInputValidation("cardColor", cardColor)
        handleInputValidation("favoriteTech", favoriteTech)

        const hasErrors = !fullName || fullName.length < 3 || !role || !experience || !cardColor || !favoriteTech
        if (hasErrors) return

        router.push({ pathname: "/preview", params: form.data })
    }

    function handleInputChange(fieldName: keyof Form, text: string) {
        setForm((current) => ({
            ...current,
            data: { ...current.data, [fieldName]: text }
        }))
        handleInputValidation(fieldName, text)
    }

    function handleSetOrRemoveInputError(fieldName: keyof Form, error: string | undefined) {
        setForm((current) => ({
            ...current,
            error: { ...current.error, [fieldName]: error }
        }))
    }

    function handleInputValidation(field: keyof Form, value: string) {
        switch (field) {
            case "fullName":
                if (value.length === 0) {
                    handleSetOrRemoveInputError("fullName", "informe o nome completo")
                } else if (value.length < 3) {
                    handleSetOrRemoveInputError("fullName", "informe pelo menos 3 caracteres")
                } else {
                    handleSetOrRemoveInputError("fullName", undefined)
                }
                break
            case "role":
                handleSetOrRemoveInputError("role", !value ? "informe o seu cargo" : undefined)
                break
            case "experience":
                handleSetOrRemoveInputError("experience", !value ? "informe seus anos de experiência" : undefined)
                break
            case "cardColor":
                handleSetOrRemoveInputError("cardColor", !value ? "selecione uma cor" : undefined)
                break
            case "favoriteTech":
                handleSetOrRemoveInputError("favoriteTech", !value ? "informe sua tecnologia preferida" : undefined)
                break
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.title}>Cadastro do Desenvolvedor</Text>
                    <Text style={styles.subtitle}>Preencha os dados para cadastrar seu cartão</Text>
                </View>

                <View style={styles.form}>
                    <Input
                        onChangeText={(text) => handleInputChange("fullName", text)}
                        label="Nome completo"
                        errorMessage={form.error.fullName}
                        placeholder=""
                    />
                    <Input
                        onChangeText={(text) => handleInputChange("role", text)}
                        label="Cargo"
                        errorMessage={form.error.role}
                        placeholder=""
                    />
                    <Input
                        onChangeText={(text) => handleInputChange("company", text)}
                        label="Empresa"
                        errorMessage={form.error.company}
                        placeholder=""
                    />
                    <Input
                        onChangeText={(text) => handleInputChange("experience", text)}
                        label="Anos de experiência"
                        errorMessage={form.error.experience}
                        placeholder=""
                        keyboardType="numeric"
                    />
                    <Input
                        onChangeText={(text) => handleInputChange("favoriteTech", text)}
                        label="Tecnologia preferida"
                        errorMessage={form.error.favoriteTech}
                        placeholder=""
                    />
                </View>

                <ButtonColors
                    onSelect={(colorCode) => handleInputChange("cardColor", colorCode)}
                    group={cardColors}
                />

                <Button onPress={handleSubmit} label="Cadastrar cartão" />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        gap: 16,
    },
    header: {
        gap: 4,
    },
    title: {
        color: "#2d2d30",
        fontWeight: "bold",
        fontSize: 28,
    },
    subtitle: {
        color: "#747477",
        fontSize: 16,
    },
    form: {
        gap: 12,
    },
})
