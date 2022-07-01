import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { usePokemon } from '../store/pokemonContext'
import HorizontalSlider from '../components/ui/HorizontalSlider/HorizontalSlider';
import colors from '../constants/colors';
import LikeBtn from '../components/ui/LikeBtn';

export default function PokemonDetail({route}) {
    const {
        state,
        dispatch
    } = usePokemon();

    const pokemon = state.list.find(x => x.name == route.params.name)

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions(
            {
                title: pokemon.name.toUpperCase(),
                headerRight: () => <LikeBtn 
                    liked={pokemon.liked} 
                    pressHandler={() => dispatch({
                        type: 'like',
                        name: pokemon.name
                    })}
                />,
            }
        )
    }, [navigation])

    return (
        <ScrollView style={styles.container}> 
            <HorizontalSlider pokeName={route.params.name}/>
            <View style={styles.container_content}>
                <Text style={styles.text_title}>
                    Weight & Height
                </Text>
                <View style={styles.container_key_value}>
                    <View  style={{flex:1}}>
                        <Text style={styles.text_key}>
                            Weight: 
                            <Text style={styles.text_value}>
                                {pokemon.detail.weight / 10} kg
                            </Text>
                        </Text>
                    </View>
                    <View  style={{flex:1}}>
                        <Text style={styles.text_key}>
                            Height: 
                            <Text style={styles.text_value}>
                                {pokemon.detail.height * 10} cm
                            </Text>
                        </Text>
                    </View>
                </View>

                <Text style={styles.text_title}>
                    Types
                </Text>
                <View style={styles.container_key_value}>
                    <View  style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                        {
                            pokemon.detail.types.map((x,i) => {
                                    const type = x.type.name;

                                    return (
                                        <View 
                                            key={i}
                                            style={{padding: 5, marginEnd:10, backgroundColor: colors[type], borderRadius: 5}}
                                        >
                                            <Text style={{color: colors.light}}>{type.replace('-', ' ')}</Text>
                                        </View>
                                    )
                                }
                            )
                        }
                    </View>
                </View>

                <Text style={styles.text_title}>
                    Abilities
                </Text>
                <View style={styles.container_key_value}>
                    <View  style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                        {
                            pokemon.detail.abilities.map((x,i) => 
                                <View 
                                    key={i}
                                    style={{padding: 5, marginEnd:10, backgroundColor: colors.warning, borderRadius: 5}}
                                >
                                    <Text style={{color: colors.light}}>{x.ability.name.replace('-', ' ')}</Text>
                                </View>
                            )
                        }
                    </View>
                </View>

                <Text style={styles.text_title}>
                    Moves
                </Text>
                <View style={styles.container_key_value}>
                    <View  style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
                        {
                            pokemon.detail.moves.map((x,i) => 
                                <View 
                                    key={i}
                                    style={{padding: 5, marginEnd:10, marginVertical: 5, backgroundColor: colors.danger, borderRadius: 5}}
                                >
                                    <Text style={{color: colors.light}}>{x.move.name.replace('-', ' ')}</Text>
                                </View>
                            )
                        }
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    container_content: {
        padding: 10,
    },
    container_key_value: {
        flexDirection: 'row',
    },
    text_title: {
        fontWeight: '900',
        textAlign: 'center',
        padding: 10,
        textTransform: 'uppercase',
        textDecorationLine: 'underline',
        letterSpacing: 2,
    },
    text_key: {
        fontWeight: '600'
    },
    text_value: {
        fontWeight: '400',
    }
})