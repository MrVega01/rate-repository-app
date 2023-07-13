import { Button, View, StyleSheet } from 'react-native'
import { Formik, useField } from 'formik'
import StyledTextInput from '../components/StyledTextInput'

const initialValues = {
  email: '',
  password: ''
}

function FormikInputValue({name, ...props}){
  const [field, meta, helpers] = useField(name)

  return (
    <StyledTextInput
      value={field.value}
      onChangeText={value => helpers.setValue(value)}
      {...props}
    />
  )
}

export default function LogInPage(){
  return <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
    {({handleSubmit, values})=>{
      return <View style={styles.form}>
        <FormikInputValue
          placeholder='E-mail'
          name="email"
        />
        <FormikInputValue
          placeholder='Password'
          name="password"
          secureTextEntry
        />
        <Button title='Log In' onPress={handleSubmit}/>
      </View>
    }}
  </Formik>
}

const styles = StyleSheet.create({
  form: {
    margin: 16
  }
})