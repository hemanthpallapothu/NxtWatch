import {
  HomeVideoContainer,
  HomeVideoThumbnailUrl,
  HomeVideoLogoAndTextContainer,
  HomeVideoChannelLogo,
  HomeVideoTextContainer,
  HomeVideoTitle,
  HomeVideoChannelName,
  HomeVideoViewsPublishedContainer,
  HomeVideoViews,
  HomeVideoPublished,
  HomeVideoNavLink,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const HomePageVideo = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    channel,
  } = videoDetails
  const {name, profileImageUrl} = channel
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <HomeVideoNavLink to={`/videos/${id}`}>
            <HomeVideoContainer>
              <HomeVideoThumbnailUrl alt="thumbnailUrl" src={thumbnailUrl} />
              <HomeVideoLogoAndTextContainer>
                <HomeVideoChannelLogo src={profileImageUrl} />
                <HomeVideoTextContainer>
                  <HomeVideoTitle isDarkTheme={isDarkTheme}>
                    {title}
                  </HomeVideoTitle>
                  <HomeVideoChannelName isDarkTheme={isDarkTheme}>
                    {name}
                  </HomeVideoChannelName>
                  <HomeVideoViewsPublishedContainer>
                    <HomeVideoViews isDarkTheme={isDarkTheme}>
                      {viewCount} views
                    </HomeVideoViews>
                    <HomeVideoPublished isDarkTheme={isDarkTheme}>
                      {publishedAt}
                    </HomeVideoPublished>
                  </HomeVideoViewsPublishedContainer>
                </HomeVideoTextContainer>
              </HomeVideoLogoAndTextContainer>
            </HomeVideoContainer>
          </HomeVideoNavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomePageVideo
