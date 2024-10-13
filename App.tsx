import React from 'react'
import { View } from 'react-native'
import { LogBox } from 'react-native'
import Container from './src/navigations/Container'

const App = () => {
  LogBox.ignoreAllLogs()
  return (
    <View style={{ flex: 1 }}>
      <Container />
    </View>
  )
}

export default App