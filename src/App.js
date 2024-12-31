import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import Video from './components/Video'
import SavedVideos from './components/SavedVideos'
import NotFoundUrl from './components/NotFoundUrl'

import ThemeContext from './context/ThemeContext'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideosList: [],
  }

  onToggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addSavedVideo = video => {
    this.setState(prevState => {
      const {savedVideosList} = prevState
      const isVideoAlreadySaved = savedVideosList.some(
        eachVideo => eachVideo.id === video.id,
      )

      if (isVideoAlreadySaved) {
        const updatedSavedVideosList = savedVideosList.filter(
          eachVideo => eachVideo.id !== video.id,
        )
        return {savedVideosList: updatedSavedVideosList}
      }

      return {savedVideosList: [...savedVideosList, video]}
    })
  }

  render() {
    const {isDarkTheme, savedVideosList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.onToggleTheme,
          savedVideosList,
          savedVideo: this.addSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={Video} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFoundUrl} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
