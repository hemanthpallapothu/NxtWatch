import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'

import {
  TrendingPageContainer,
  TrendingPageSideContainer,
  TrendingPageInprogressView,
  TrendingPageVideosContainer,
  TrendingPageTitleContainer,
  TrendingPageLogoContainer,
  TrendingPageTitle,
} from './styledComponents'

import Navbar from '../NavBar'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import TrendingPageVideo from '../TrendingPageVideo'

import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.onGetTrendingVideos()
  }

  onGetTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const api = 'https://apis.ccbp.in/videos/trending'
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
      const formattedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
      }))
      this.setState({videosList: formattedData})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRenderInProgressView = () => (
    <TrendingPageInprogressView>
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </TrendingPageInprogressView>
  )

  onRenderSuccessView = () => {
    const {videosList} = this.state
    return (
      <TrendingPageVideosContainer>
        {videosList.map(eachItem => (
          <TrendingPageVideo key={eachItem.id} videoDetails={eachItem} />
        ))}
      </TrendingPageVideosContainer>
    )
  }

  onRenderFailureView = () => (
    <FailureView onGetVideos={this.onGetTrendingVideos} />
  )

  renderTendingsView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.onRenderInProgressView()
      case apiStatusConstants.failure:
        return this.onRenderFailureView()
      case apiStatusConstants.success:
        return this.onRenderSuccessView()
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
              <TrendingPageContainer>
                <SideBar />
                <TrendingPageSideContainer isDarkTheme={isDarkTheme}>
                  <TrendingPageTitleContainer isDarkTheme={isDarkTheme}>
                    <TrendingPageLogoContainer isDarkTheme={isDarkTheme}>
                      <HiFire color="#ff0000" size={25} />
                    </TrendingPageLogoContainer>
                    <TrendingPageTitle isDarkTheme={isDarkTheme}>
                      Trending
                    </TrendingPageTitle>
                  </TrendingPageTitleContainer>
                  {this.renderTendingsView()}
                </TrendingPageSideContainer>
              </TrendingPageContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
