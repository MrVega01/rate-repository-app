import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import Constants from 'expo-constants';
import { theme } from "../theme";
import { Link } from "react-router-native";

function AppBarTab({children, active, to}){
  return (
    <Link to={to}>
      <StyledText style={styles.text} color='white' bold>{children}</StyledText>
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
    backgroundColor: theme.colors.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingHorizontal: 10
  },
  text: {
    paddingHorizontal: 5
  }
})