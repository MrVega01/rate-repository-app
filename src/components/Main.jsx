import { Text, View, StyleSheet } from 'react-native'
import { RepositoryList } from './RespositoryList'
import { Route, Routes } from 'react-router-native'
import AppBar from './AppBar'

export default function Main () {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
        <Route path='/' Component={RepositoryList}/>
        <Route path='/signin' Component={()=> <Text>Working on it!</Text>}/>
      </Routes>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})