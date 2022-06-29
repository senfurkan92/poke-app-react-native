import {StyleSheet, View} from 'react-native'
import colors from '../../constants/colors'

export default function CardFrame({children, borderColor, bgColor}) {
    return (
        <View style={[styles.card, {
            borderColor: borderColor || colors.secondary,
            backgroundColor: bgColor || 'transparent'
        }]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderWidth: 1,
        overflow: 'hidden',
    },
})