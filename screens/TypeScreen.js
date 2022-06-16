import { useTypes } from '../store/typeContext'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import TypeCard from '../components/ui/TypeCard'
import colors from '../constants/colors'

export default function TypeScreen() {
    const {types} = useTypes()

    return (
        <View>
            <FlatList 
                data={types} 
                renderItem={({item, index}) => 
                    <TypeCard type={item}></TypeCard>
                }
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}