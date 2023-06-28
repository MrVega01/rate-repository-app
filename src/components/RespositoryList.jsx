import { FlatList, Text } from 'react-native'
import repositories from '../utils/repositories'
import { RepositoryItem } from './RepositoryItem'

export function RepositoryList () {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text />}
      renderItem={({ item: repo }) => <RepositoryItem repo={repo} />}
    />
  )
}
