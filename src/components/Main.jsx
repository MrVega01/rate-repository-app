import { Text, View } from 'react-native'
import Constants from 'expo-constants'

export default function Main () {
  return (
    <View style={{ margin: Constants.statusBarHeight, flexGrow: 1 }}>
      <Text>Prueba</Text>
    </View>
  )
}
