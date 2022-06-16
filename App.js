import { View, SafeAreaView, Platform, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import TypeProvider from './store/typeContext'
import Constants from 'expo-constants'
import colors from './constants/colors'
import TypeScreen from './screens/TypeScreen'

export default function App() {

  const [fontsLoaded] = useFonts({
    'pasifico': require('./assets/fonts/pasifico.ttf')
  })


  return (
    <>
      <StatusBar backgroundColor={colors.secondary}></StatusBar>
      <SafeAreaView style={{backgroundColor: colors.secondary}} ></SafeAreaView>
      <View style={styles.container}>
        <TypeProvider>
          <TypeScreen/>
        </TypeProvider>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.select({ios: 0, android: Constants.statusBarHeight})
  },
})