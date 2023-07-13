import { TextInput, StyleSheet } from "react-native";
import { theme } from '../theme'

export default function StyledTextInput({style = {}, ...props}){
  const inputStyle = {
    ...styles.textInput,
    ...style
  }
  return <TextInput style={inputStyle} {...props}></TextInput>
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 10,
    color: theme.colors.textPrimary
  }
})