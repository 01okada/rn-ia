import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../componentes/Buttons";
import { Input } from "../componentes/Input";
import { ButtonColors } from "../componentes/ButtonColors";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

const Card_Colors = [
    { id: "1", name: "Azul", colorCode: "#3a3ada" },
    { id: "2", name: "Verde", colorCode: "#38cab7" },
    { id: "3", name: "Rosa", colorCode: "#ff00ff" }
]

export type Form = {
    colorID: string,
    fullName: string,
    role: string,
    company?: string,
    experience: number,
    cardColor: string,
    favoriteTech: string
}

type Error = {
    colorID?: string,
    fullName?: string,
    role?: string,
    company?: string,
    experience?: string,
    cardColor?: string,
    favoriteTech?: string
}

export default function CadastroScreen() {
    const router = useRouter()
    const [form, setForm] = useState<{ data: Form, error: Error }>({
        data: {
            colorID: "",
            fullName: "",
            role: "",
            company: "",
            experience: 1,
            cardColor: "",
            favoriteTech: ""
        },
        error: {}
    })

    function handleSubmit(){
        router.push({
            pathname: "/preview",
            params:  form.data
                
            }
        )

    }
    function handleInputChange(fieldName: keyof Form, text: string) {
        setForm((currentForm) => {
            return {
                ...currentForm,
                data: {
                    ...currentForm.data,
                    [fieldName]: text
                }
            }
        })
        handleInputValidation(fieldName)
    }



    function handleSetOrRemoveInputerror(fieldName: keyof Form, error: string | undefined) {
        setForm((currentForm) => {
            return {
                ...currentForm,
                error: {
                    ...currentForm.error,
                    [fieldName]: error
                }
            }
        })
    }


    function handleInputValidation(field: keyof Form) {
        const { fullName, role, cardColor, favoriteTech, experience } = form.data

        switch (field) {
            case "fullName":
                if (fullName.length === 0) {
                    handleSetOrRemoveInputerror("fullName", "informe o nome completo")
                }
                if (fullName.length < 3) {
                    handleSetOrRemoveInputerror("fullName", "informe pelo menos 3 caracteres")
                }
                if (fullName.length >= 3) {
                    handleSetOrRemoveInputerror("fullName", undefined)
                }
                break
                case "role":
                    
                if (!!role) {
                    handleSetOrRemoveInputerror("role", "informe o seu cargo")
                } else {
                    handleSetOrRemoveInputerror("role", undefined)
                }
                break
                case "experience":
                     if (!!experience) {
                    handleSetOrRemoveInputerror("experience", "informe seus anos de experiência")
                } else {
                    handleSetOrRemoveInputerror("experience", undefined)
                }
                break
                 case "cardColor":
                    if (!!cardColor) {
                    handleSetOrRemoveInputerror("cardColor", "selecione uma cor")
                } else {
                    handleSetOrRemoveInputerror("cardColor", undefined)
                }
                break
                 case "favoriteTech":
                       if (!!favoriteTech) {
                    handleSetOrRemoveInputerror("favoriteTech", "informe sua tecnologia preferida")
                }else {
                    handleSetOrRemoveInputerror("favoriteTech", undefined)
                }
                break
                default:
                break
        }

    
        return (
            <SafeAreaView>
                <KeyboardAvoidingView>
                    <View style={styles.container}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.title}>Cadastro do Desenvolvedor
                            </Text>
                            <Text style={styles.subtitle}>Preencha os dados para cadastrar seu cartão
                            </Text>
                        </View>

                        <View style={{ height: 700 }}>
                            <View style={{ gap: 12, marginBottom: 12 }}>
                                <Input onChangeText={(text) => handleInputChange('fullName', text)} 
                                label="Nome completo" 
                                errorMessage ={form.error["fullName"]}
                                placeholder="Matheus Okada Dias" 
                                onChange={() =>{ handleInputValidation("fullName")}}
                                />

                                <Input onChangeText={(text) => handleInputChange('role', text)} 
                                label="Cargo" 
                                errorMessage ={form.error["role"]}
                                placeholder="Engenheiro de Software" 
                                onChange={() =>{ handleInputValidation("role")}}
                                />
                                
                                <Input onChangeText={(text) => handleInputChange('company', text)} 
                                label="Empresa" 
                                errorMessage ={form.error["company"]}
                                placeholder="MTI" 
                                onChange={() =>{ handleInputValidation("company")}}
                                />
                                
                                <Input onChangeText={(text) => handleInputChange('experience', text)} 
                                label="Anos de experiência" 
                                errorMessage ={form.error["experience"]}
                                placeholder="2" 
                                onChange={() =>{ handleInputValidation("experience")}}
                                />
                                
                                <Input onChangeText={(text) => handleInputChange('favoriteTech', text)} 
                                label="Tecnologia preferida" 
                                errorMessage ={form.error["favoriteTech"]}
                                placeholder="Java" 
                                onChange={() =>{ handleInputValidation("favoriteTech")}}
                                />

                            </View>

                            <ButtonColors onSelect={(colorCode) => handleInputChange('cardColor', colorCode)}
                                group={Card_Colors} />

                        </View>
                        
                        <View style={styles.footerContainer} >
                            <Button onPress={handleSubmit} label="Cadastrar cartão" />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }

    const styles = StyleSheet.create({
        container: {
            flexDirection: "column",
            justifyContent: "center",
            paddingHorizontal: 24,
            gap: 10
        },
        headerContainer: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 4
        },
        title: {
            color: "#2d2d30",
            fontWeight: "bold",
            fontSize: 28,
            textAlign: "center"
        },

        footerContainer: {
            flexDirection: "column",
            gap: 10,
        },
        subtitle: {
            color: "#747477",
            fontWeight: "400",
            fontSize: 16,
            textAlign: "center"
        },
        formGroup: {
            flexDirection: "column",
            gap: 4
        },
        formLabel: {
            color: "#2d2d30",
            fontWeight: "bold",

        },

        formInput: {
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#afafb4",
            paddingHorizontal: 12,
            paddingVertical: 8,
            height: 50,
            backgroundColor: "#f8f8ff"
        },
        formError: {
            color: "#b61052",
            fontWeight: "bold",
        },


    })
}