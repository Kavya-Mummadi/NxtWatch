import {Component} from 'react'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import NxtwatchContext from './context/NxtwatchContext'

import './App.css'

class App extends Component {
  state = {
    activeTabId: 'HOME',
    themeColor: 'light',
    savedVideos: [],
  }

  componentDidMount() {
    if (window.location.pathname !== '/') {
      const {history} = this.props
      const jwtToken = Cookies.get('jwt_token')
      if (jwtToken === undefined) {
        history.replace('/login')
      } else {
        history.replace('/')
      }
    }
  }

  changeActiveTabId = id => {
    this.setState({
      activeTabId: id,
    })
  }

  changeTheme = () => {
    this.setState(prevState => ({
      themeColor: prevState.themeColor === 'light' ? 'dark' : 'light',
    }))
  }

  addSavedVideos = videoDetails => {
    this.setState(prevState => {
      const alreadySaved = prevState.savedVideos.find(
        eachVideo => eachVideo.id === videoDetails.id,
      )

      if (alreadySaved) {
        return {
          savedVideos: prevState.savedVideos.filter(
            eachVideo => eachVideo.id !== videoDetails.id,
          ),
        }
      }

      return {
        savedVideos: [...prevState.savedVideos, videoDetails],
      }
    })
  }

  render() {
    const {activeTabId, themeColor, savedVideos} = this.state

    return (
      <NxtwatchContext.Provider
        value={{
          activeTabId,
          setActiveTabId: this.changeActiveTabId,
          themeColor,
          setThemeColor: this.changeTheme,
          savedVideos,
          addToSavedVideos: this.addSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtwatchContext.Provider>
    )
  }
}

export default withRouter(App)
