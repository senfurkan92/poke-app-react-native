import { View, SafeAreaView, Platform, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import TypeProvider from './store/typeContext'
import Constants from 'expo-constants'
import colors from './constants/colors'
import AppRouter from './router/AppRouter'
import PokemonProvider from './store/pokemonContext'

export default function App() {

  const [fontsLoaded] = useFonts({
    'pasifico': require('./assets/fonts/pasifico.ttf'),
    'incon': require('./assets/fonts/incon.ttf'),
    'pokemon': require('./assets/fonts/pokemon.ttf')
  })


  return ( fontsLoaded && 
    <>
      <StatusBar backgroundColor={colors.secondary}></StatusBar>
      <SafeAreaView style={{backgroundColor: colors.secondary}} ></SafeAreaView>
      <View style={styles.container}>
        <TypeProvider>
          <PokemonProvider>
            <AppRouter />
          </PokemonProvider>
        </TypeProvider>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.select({ios: 0, android: Constants.statusBarHeight}),
    flex: 1,
  },
})