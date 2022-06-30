import { FlatList} from 'react-native'
import Slide from './Slide'
import { usePokemon } from '../../../store/pokemonContext'

export default function HorizontalSlider({pokeName}) {
    const { state } = usePokemon()
    const pokemon = state.list.find(x => x.name == pokeName).detail
    const data = [
        pokemon.sprites.other.dream_world.dream_world,
        pokemon.sprites.other.home.front_default,
        pokemon.sprites.other.home.front_shiny,
        pokemon.sprites.other['official-artwork'].front_default
    ].filter(x => x)

    return (
        <FlatList
            data={data}
            renderItem={({item,index}) => <Slide uri={item} types={pokemon.types.map(x => x.type.name)}/>}
            keyExtractor={(item, index) => index}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
        />
    )
}