import { Stack } from "expo-router";   

export default function RootLayout(){
    return(
        <Stack initialRouteName="index" screenOptions={{ title: "" }}>

            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="cadastro" />
            <Stack.Screen name="preview" />
            <Stack.Screen name="sucesso" />
        </Stack>
    )
}