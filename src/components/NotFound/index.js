import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundText,
  NotFoundParagraph,
  NotFoundButton,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <NotFoundContainer>
          <NotFoundImg
            alt="no videos"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
          />
          <NotFoundText isDarkTheme={isDarkTheme}>
            No Search results found
          </NotFoundText>
          <NotFoundParagraph isDarkTheme={isDarkTheme}>
            Try different key words or remove search filter
          </NotFoundParagraph>
          <NotFoundButton>Retry</NotFoundButton>
        </NotFoundContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
