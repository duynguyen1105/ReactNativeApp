import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../interfaces/types'
import { intervalToDuration, formatDuration } from 'date-fns'
import { START_DATE } from '../interfaces/constants'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export const HomeScreen = ({ navigation }: Props) => {
  const duration = intervalToDuration({
    start: START_DATE,
    end: new Date(),
  })

  const formattedDuration = formatDuration(duration, {
    format: ['years', 'months', 'days'],
  })

  return (
    <View style={styles.container}>
      <Text>We have fall in love</Text>
      <Text>{formattedDuration}</Text>
      {/* <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      />
      <StatusBar style="auto" /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
