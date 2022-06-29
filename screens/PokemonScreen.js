import { View, Text, StyleSheet, FlatList, Pressable, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { usePokemon } from "../store/pokemonContext";
import PokemonCard from '../components/ui/PokemonCard';
import colors from '../constants/colors';
import Loading from '../components/ui/Loading';

export default function PokemonScreen() {
    const {
        state,
        loadMore
    } = usePokemon()

    const dimemsions = useWindowDimensions()

    return (
        <>
            <View style={[styles.container]} >
                <View style={{padding: 10}}>
                    <Text style={{alignSelf: 'flex-end'}}>
                        {state.list.length} out of {state.count} pokemons
                    </Text>
                </View>
                <FlatList
                    data={state.list}
                    renderItem={({item, count}) => <PokemonCard item={item} />}
                    keyExtractor={(item, count) => count}
                    onEndReachedThreshold={dimemsions.height}
                    onResponderEnd={() => {
                        if (!state.loading && state.list.length < state.count) {
                            loadMore()
                        }
                    }}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    btn_outer_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    btn_container: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        borderColor: colors.secondary,
        borderWidth: 1,
        backgroundColor: colors.light,
    }
})