import React from 'react'
import { View } from 'react-native'
import { LogBox } from 'react-native'
import Container from './src/navigations/Container'

const App = () => {
  console.log('tomheo');
  LogBox.ignoreAllLogs()
  return (
    <View style={{ flex: 1 }}>
      <Container />
    </View>
  )
}

export default App
