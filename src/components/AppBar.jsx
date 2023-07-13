import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import Constants from 'expo-constants';
import { theme } from "../theme";
import { Link, useLocation } from "react-router-native";

function AppBarTab({children, to}){
  const { pathname } = useLocation()
  const textStyle = [
    styles.text,
    pathname === to && styles.active
  ]
  return (
    <Link to={to} underlayColor={theme.colors.primary}>
      <StyledText style={textStyle} color='white' bold>{children}</StyledText>
    </Link>
  )  
}

export default function AppBar(){
  return (
    <View style={styles.container}>
      <AppBarTab to='/'>Repositories</AppBarTab>
      <AppBarTab to='/signin'>Sign in</AppBarTab>
    </View>
  )  
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingHorizontal: 10
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 5
  },
  active: {
    color: theme.appBar.textPrimary
  }
})