import Navbar from '../NavBar'
import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundUrlContainer,
  NotFoundUrlImg,
  NotFoundUrlText,
  NotFoundUrlParagraph,
} from './styledComponents'

const NotFoundUrl = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          <NotFoundUrlContainer isDarkTheme={isDarkTheme}>
            <NotFoundUrlImg
              alt="not found"
              src={
                isDarkTheme === true
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              }
            />
            <NotFoundUrlText isDarkTheme={isDarkTheme}>
              Page Not Found
            </NotFoundUrlText>
            <NotFoundUrlParagraph isDarkTheme={isDarkTheme}>
              We are sorry, the page you requested could not be found.
            </NotFoundUrlParagraph>
          </NotFoundUrlContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFoundUrl
