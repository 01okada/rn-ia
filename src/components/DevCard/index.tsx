import { Text, View } from "react-native";
import { styles } from "./styles";
import { Form } from "../../types/form";

type Props = {
    data: Form
}
export function DevCard({ data }: Props) {
    return (
        <View style={[styles.cardContainer, { backgroundColor: data.cardColor }]}>
            <View style={[styles.cardAvatarContainer, { backgroundColor: data.cardColor }]}>
                <View style={styles.cardAvatarSubContainer}>
                    <Text style={styles.cardAvatarSubLetter}>{data.fullName.charAt(0)}</Text>
                </View>
            </View>

            <View style={styles.cardTextGroup}>
                <Text style={styles.cardTitle}> {data.fullName}</Text>
                <View style={styles.cardTextGroup}>
                    <Text style={styles.cardText}>{data.role}</Text>
                    {data.company ? <Text style={styles.cardText}> | {data.company}</Text> : null}
                </View>
            </View>

            <View style={styles.cardSeparator} />

            <View style={styles.cardTextGroup}>
                <Text style={styles.cardSubTitle}>Especialista em</Text>
                <Text style={styles.cardRole}>{data.favoriteTech}</Text>


            </View>

            <View style={[styles.cardBadgeContainer, { marginTop: 8 }]}>
                <Text style={styles.cardBadgeText}>Especialista</Text>
            </View>
            <Text style={styles.cardSubTitle}>{data.experience} anos de experiência</Text>
        </View>
    )
}
