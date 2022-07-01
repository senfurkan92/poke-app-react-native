import { Pressable, View } from 'react-native'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import colors from '../../constants/colors'
import { usePokemon } from '../../store/pokemonContext'

export default function LikeBtn({liked, pressHandler}) {
    const [thisLiked, setThisLiked] = useState(liked)

    const action = () => {
        setThisLiked(!thisLiked)
        pressHandler()
    }

    return (
        <View>
            <Pressable onPress={action}>
                <Ionicons 
                    name="heart"
                    style={{
                        color: thisLiked ? colors.danger : colors.light,
                        fontWeight: '600',
                        fontSize: 22,
                    }}    
                />
            </Pressable>
        </View>
    )
}