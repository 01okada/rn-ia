import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";

export type GroupItems ={
    id: string,
    name: string,
    colorCode: string
}

type Props ={
    group: Array<GroupItems>
    onSelect: (colorCode: string) => void
}

export function ButtonColors({group, onSelect}: Props){
    const [selected, setSelected]  = useState<GroupItems | null>(null)

    function handleSelect(item: GroupItems){
        setSelected(item)
        onSelect(item.colorCode)
    }
     useEffect(() => {
        const firstItem = group.at(0)
        if(firstItem){
            setSelected(firstItem)
            onSelect(firstItem.colorCode)
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

    return (
        <View style={styles.buttonGroupContainer}>
            {group.map((item) => (
                <TouchableOpacity key={item.id} style={[styles.buttonGroupButtonContainer, selected?.id === item.id && { borderColor: item.colorCode }]} onPress={() => handleSelect(item)}>
                    <View style={[styles.buttonGroupButtonColorIndicator, { backgroundColor: item.colorCode }]} />
                    <Text style={[styles.buttonGroupButtonText, selected?.id === item.id && {color: item.colorCode}]}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}