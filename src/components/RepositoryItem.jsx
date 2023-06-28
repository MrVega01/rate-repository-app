import { Text, View, StyleSheet, Image } from 'react-native'
import StyledText from './StyledText'
import { theme } from '../theme'

export function RepositoryItem ({ repo }) {
  return (
    <View key={repo.name} style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={{uri: repo.authorAvatar}}/>
        <View style={styles.headerInfo}>
          <StyledText style={styles.texts} color='white' size='subheading' bold>{repo.name}</StyledText>
          <StyledText style={styles.texts} color='white'>{repo.description}</StyledText>
        </View>
      </View>
      <StyledText style={styles.texts} color='white'>URL: {repo.html_url}</StyledText>
      <StyledText style={styles.texts} color='white'>Forked: {String(repo.fork)}</StyledText>
      <StyledText style={styles.texts} color='white' size='sub'>Created at: {repo.created_at}</StyledText>
      <StyledText style={styles.texts} color='white' size='sub'>Updated at:{repo.updated_at}</StyledText>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: theme.colors.primary,
    borderRadius: 5
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerInfo: {
    flex: 1,
    padding: 5
  },
  texts: {
    paddingVertical: 2
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 3,
  }
})
