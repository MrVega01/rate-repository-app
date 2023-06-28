import { FlatList, Text, StyleSheet } from 'react-native'
import repositories from '../utils/repositories'
import { RepositoryItem } from './RepositoryItem'

export function RepositoryList () {
  return (
    <FlatList
      data={repositories}
      style={styles.list}
      ItemSeparatorComponent={() => <Text />}
      renderItem={({ item: repo }) => <RepositoryItem repo={repo} />}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 15,
    paddingVertical: 10
  }
})