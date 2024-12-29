import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},

  savedVideosList: [],
  savedVideo: () => {},
})

export default ThemeContext
