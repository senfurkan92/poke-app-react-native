import {View, Text} from 'react-native'
import { usePokemon } from '../store/pokemonContext'

export default function PokemonDetail({route}) {
    const {
        state
    } = usePokemon();

    const pokemon = state.list.find(x => x.name == route.params.name)

    return (
        <View>
            <Text>{JSON.stringify(pokemon)}</Text>
        </View>
    )
}