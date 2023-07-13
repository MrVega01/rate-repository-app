import { Button, View, StyleSheet } from 'react-native'
import { Formik, useField } from 'formik'
import StyledTextInput from '../components/StyledTextInput'
import { loginValidationSchema } from '../validationSchemas/login'
import StyledText from '../components/StyledText'
import { theme } from '../theme'

const initialValues = {
  email: '',
  password: ''
}

function FormikInputValue({name, ...props}){
  const [field, meta, helpers] = useField(name)

  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.errorText}>{meta.error}</StyledText>}
    </>
  )
}

export default function LogInPage(){
  return <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={values => console.log(values)}>
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
  },
  errorText: {
    color: 'red',
    marginTop: -5,
    marginBottom: 5,
    fontSize: theme.fontSizes.sub
  }
})