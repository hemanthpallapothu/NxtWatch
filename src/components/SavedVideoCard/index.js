import ThemeContext from '../../context/ThemeContext'

import {
  SavedVideosPageContainer,
  SavedVideosPageThumbnil,
  SavedVideosPageTitle,
  SavedVideosPageChannelName,
  SavedVideosPageViewCount,
  SavedVideosPagePublishedAt,
  SavedVideosPageViewCountAndPublishedAt,
  SavedVideosPageAlinement,
  NavLink,
} from './styledComponents'

const SavedVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    viewCount,
    publishedAt,
  } = videoDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <NavLink to={`/videos/${id}`}>
            <SavedVideosPageContainer>
              <SavedVideosPageThumbnil alt="video thumbnail" src={thumbnailUrl} />
              <SavedVideosPageAlinement>
                <SavedVideosPageTitle isDarkTheme={isDarkTheme}>
                  {title}
                </SavedVideosPageTitle>
                <SavedVideosPageChannelName>
                  {channelName}
                </SavedVideosPageChannelName>
                <SavedVideosPageViewCountAndPublishedAt>
                  <SavedVideosPageViewCount>
                    {viewCount} views
                  </SavedVideosPageViewCount>
                  <SavedVideosPagePublishedAt>
                    {publishedAt}
                  </SavedVideosPagePublishedAt>
                </SavedVideosPageViewCountAndPublishedAt>
              </SavedVideosPageAlinement>
            </SavedVideosPageContainer>
          </NavLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideoCard
