import React from 'react'
import { View, StyleSheet } from 'react-native'
import WeatherSearch from './src/components/weatherSearch'
import WeatherInfo from './src/components/weatherInfo'

const App = () => {
    const searchWeather = (location) => {
        console.log(location)}
  return (
    <View style={styles.container}>
     <WeatherSearch searchWeather={searchWeather} />
      <WeatherInfo />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})

export default App