import { Text, View } from 'react-native'
import Constants from 'expo-constants'
import { RepositoryList } from './RespositoryList'

export default function Main () {
  return (
    <View style={{ margin: Constants.statusBarHeight, flexGrow: 1 }}>
      <RepositoryList/>
    </View>
  )
}
