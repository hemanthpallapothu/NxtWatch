import {
  TrendingVideo,
  TrendingVideoThumbnailUrl,
  TrendingVideoContainer,
  TrendingVideoTitle,
  TrendingVideoChannelName,
  TrendingVideoViewsAndPublishedAtContainer,
  TrendingVideoViews,
  TrendingVideoPublishedAt,
  TrendingVideoNavLink,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const TrendingPageVideo = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    channel,
  } = videoDetails
  const {name} = channel

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <TrendingVideoNavLink to={`/videos/${id}`}>
            <TrendingVideo>
              <TrendingVideoThumbnailUrl
                alt="video thumbnail"
                src={thumbnailUrl}
              />
              <TrendingVideoContainer>
                <TrendingVideoTitle isDarkTheme={isDarkTheme}>
                  {title}
                </TrendingVideoTitle>
                <TrendingVideoChannelName>{name}</TrendingVideoChannelName>
                <TrendingVideoViewsAndPublishedAtContainer>
                  <TrendingVideoViews>{viewCount}</TrendingVideoViews>
                  <TrendingVideoPublishedAt>
                    {publishedAt}
                  </TrendingVideoPublishedAt>
                </TrendingVideoViewsAndPublishedAtContainer>
              </TrendingVideoContainer>
            </TrendingVideo>
          </TrendingVideoNavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingPageVideo
