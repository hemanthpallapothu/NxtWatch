import {
  FailureImg,
  FailureText,
  FailureDescription,
  FailureRetryButton,
  FailureContainer,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const FailureView = props => {
  const {onGetVideos} = props
  const onClickVideos = () => {
    onGetVideos()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <FailureContainer>
            {isDarkTheme ? (
              <FailureImg
                alt="failure view"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              />
            ) : (
              <FailureImg
                alt="failure view"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              />
            )}
            <FailureText isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureText>
            <FailureDescription>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <FailureRetryButton onClick={onClickVideos}>
              Retry
            </FailureRetryButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureView
