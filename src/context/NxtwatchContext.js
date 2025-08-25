import React from 'react'

const NxtwatchContext = React.createContext({
  activeTabId: 'HOME',
  setActiveTabId: () => {},
  themeColor: 'light',
  setThemeColor: () => {},
  savedVideos: [],
  addToSavedVideosa: () => {},
})

export default NxtwatchContext
