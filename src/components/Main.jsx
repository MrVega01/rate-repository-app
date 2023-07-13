import { Text, View, StyleSheet } from 'react-native'
import { RepositoryList } from './RespositoryList'
import { Route, Routes } from 'react-router-native'
import AppBar from './AppBar'
import { theme } from '../theme'
import LogInPage from '../pages/LogIn'

export default function Main () {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
        <Route path='/' Component={RepositoryList}/>
        <Route path='/signin' Component={LogInPage}/>
      </Routes>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    flex: 1
  }
})