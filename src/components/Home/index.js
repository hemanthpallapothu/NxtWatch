import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {IoSearchOutline} from 'react-icons/io5'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Navbar from '../NavBar'
import SideBar from '../SideBar'
import HomePageVideo from '../HomePageVideo'
import FailureView from '../FailureView'

import NotFound from '../NotFound'

import ThemeContext from '../../context/ThemeContext'

import {
  HomePageContainer,
  HomePageSideContainer,
  HomePageBannerContainer,
  HomePageBannerImg,
  HomePageBannerText,
  HomePageBannerButton,
  HomePageBannerAndButton,
  HomePageBannerCloseButton,
  HomePageVideoSearch,
  HomePageVideoSearchButton,
  HomePageSearchContainer,
  HomePageVideosContainer,
  HomePageInprogressView,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Home extends Component {
  state = {
    showBanner: true,
    apiStatus: apiStatusConstants.initial,
    userInputSearch: '',
    VideosList: [],
  }

  componentDidMount() {
    this.onGetVideos()
  }

  onClickCloseBanner = () => {
    this.setState({showBanner: false})
  }

  onChangeSearchVideo = event => {
    this.setState({userInputSearch: event.target.value})
  }

  onGetVideos = async () => {
    const {userInputSearch} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const api = `https://apis.ccbp.in/videos/all?search=${userInputSearch}`
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
      this.setState({VideosList: formattedData})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRenderBanner = () => (
    <HomePageBannerContainer>
      <HomePageBannerAndButton>
        <HomePageBannerImg
          alt="Logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <HomePageBannerCloseButton onClick={this.onClickCloseBanner}>
          <IoMdClose color="#000000" size={25} />
        </HomePageBannerCloseButton>
      </HomePageBannerAndButton>

      <HomePageBannerText>
        Buy Nxt Watch Premium prepaid plans with UPI
      </HomePageBannerText>
      <HomePageBannerButton>GET IT NOW</HomePageBannerButton>
    </HomePageBannerContainer>
  )

  onRenderFailure = () => <FailureView onGetVideos={this.onGetVideos} />

  onRenderInProgress = () => (
    <HomePageInprogressView>
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </HomePageInprogressView>
  )

  onRenderSuccess = () => {
    const {VideosList} = this.state

    return (
      <HomePageVideosContainer>
        {VideosList.length === 0 ? (
          <NotFound />
        ) : (
          VideosList.map(eachVideo => (
            <HomePageVideo key={eachVideo.id} videoDetails={eachVideo} />
          ))
        )}
      </HomePageVideosContainer>
    )
  }

  renderApiStatusView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.onRenderSuccess()
      case apiStatusConstants.failure:
        return this.onRenderFailure()
      case apiStatusConstants.inProgress:
        return this.onRenderInProgress()
      default:
        return null
    }
  }

  render() {
    const {showBanner} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Navbar />
              <HomePageContainer>
                <SideBar />
                <HomePageSideContainer isDarkTheme={isDarkTheme}>
                  {showBanner && this.onRenderBanner()}
                  <HomePageSearchContainer>
                    <HomePageVideoSearch
                      type="text"
                      isDarkTheme={isDarkTheme}
                      placeholder="Search"
                      onChange={this.onChangeSearchVideo}
                    />
                    <HomePageVideoSearchButton
                      isDarkTheme={isDarkTheme}
                      onClick={this.onGetVideos}
                    >
                      <IoSearchOutline />
                    </HomePageVideoSearchButton>
                  </HomePageSearchContainer>

                  {this.renderApiStatusView()}
                </HomePageSideContainer>
              </HomePageContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
