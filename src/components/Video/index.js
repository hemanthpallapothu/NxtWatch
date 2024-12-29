import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'

import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import Navbar from '../NavBar'
import SideBar from '../SideBar'
import FailureView from '../FailureView'

import ThemeContext from '../../context/ThemeContext'

import {
  VideosPageContainer,
  VideosPageSideContainer,
  VideoInprogressView,
  VideoContainerSM,
  VideoContainerMD,
  VideoTitle,
  VideoDetailsContainer,
  VideoViews,
  VideoPublishedAt,
  VideoButtonsContainer,
  VideoViewsAndPublishedAt,
  VideoButton,
  HRLine,
  ChannelImg,
  ChannelName,
  ChannelSubscribers,
  ChannelLogoNameAlinement,
  ChannelNameSubscribersContainer,
  ChannelDescrption,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Video extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.onGetVideoDetails()
  }

  onGetVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const api = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(api, options)
    if (response.ok === true) {
      this.setState({apiStatus: apiStatusConstants.success})
      const data = await response.json()
      const formatteddata = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnailUrl,
        channelName: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({videoDetails: formatteddata})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRenderInProgress = () => (
    <VideoInprogressView>
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </VideoInprogressView>
  )

  onRenderFailure = () => <FailureView onGetVideos={this.onGetVideoDetails} />

  onRenderSuccess = () => {
    const {videoDetails} = this.state
    const {
      title,
      viewCount,
      publishedAt,
      videoUrl,
      channelName,
      profileImageUrl,
      subscriberCount,
      description,
    } = videoDetails
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <VideoContainerSM>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  height="100%"
                  width="450px"
                />
              </VideoContainerSM>
              <VideoContainerMD>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  height="100%"
                  width="100%"
                />
              </VideoContainerMD>
              <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
              <VideoDetailsContainer>
                <VideoViewsAndPublishedAt>
                  <VideoViews>{viewCount} Views</VideoViews>
                  <VideoPublishedAt>{publishedAt}</VideoPublishedAt>
                </VideoViewsAndPublishedAt>

                <VideoButtonsContainer>
                  <VideoButton>
                    <AiOutlineLike size={20} /> Like
                  </VideoButton>
                  <VideoButton>
                    <BiDislike size={20} /> Dislike
                  </VideoButton>
                  <VideoButton>
                    <MdPlaylistAdd size={20} /> Save
                  </VideoButton>
                </VideoButtonsContainer>
              </VideoDetailsContainer>
              <HRLine />
              <ChannelLogoNameAlinement>
                <ChannelImg src={profileImageUrl} />
                <ChannelNameSubscribersContainer>
                  <ChannelName isDarkTheme={isDarkTheme}>
                    {channelName}
                  </ChannelName>
                  <ChannelSubscribers>
                    {subscriberCount} Subscribe
                  </ChannelSubscribers>
                </ChannelNameSubscribersContainer>
              </ChannelLogoNameAlinement>
              <ChannelDescrption>{description}</ChannelDescrption>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  onRenderVideo = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.onRenderInProgress()
      case apiStatusConstants.success:
        return this.onRenderSuccess()
      case apiStatusConstants.failure:
        return this.onRenderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Navbar />
              <VideosPageContainer isDarkTheme={isDarkTheme}>
                <SideBar />
                <VideosPageSideContainer isDarkTheme={isDarkTheme}>
                  {this.onRenderVideo()}
                </VideosPageSideContainer>
              </VideosPageContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Video
