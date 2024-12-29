import {
  GamingVideo,
  GamingVideoThumbnil,
  GamingVideoTitle,
  GamingVideoViewCount,
  GamingVideoNavLink,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const GamingPageVideo = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <GamingVideoNavLink to={`/videos/${id}`}>
            <GamingVideo>
              <GamingVideoThumbnil alt={title} src={thumbnailUrl} />
              <GamingVideoTitle isDarkTheme={isDarkTheme}>
                {title}
              </GamingVideoTitle>
              <GamingVideoViewCount>
                {viewCount} Watching Worldwide
              </GamingVideoViewCount>
            </GamingVideo>
          </GamingVideoNavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingPageVideo
