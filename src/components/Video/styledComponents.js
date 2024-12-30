import styled from 'styled-components'

export const VideosPageContainer = styled.div`
  background-size: cover;
  display: flex;
  flex-direction: row;
`

export const VideosPageSideContainer = styled.div`
  background-color: ${props =>
    props.isDarkTheme === true ? '#181818' : '#f9f9f9'};
  height: 92vh;
  width: 100%;
  background-size: cover;
  overflow: auto;
`
export const VideoInprogressView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const VideoContainerSM = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 300px;
  width: 100%;
  background-size: cover;
  display: flex;

  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const VideoContainerMD = styled.div`
  display: none;
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 500px;
    width: 100%;
    background-size: cover;
  }
`

export const VideoTitle = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#1e293b')};
  font-size: 20px;
  font-family: roboto;
  margin-top: 20px;
`

export const VideoDetailsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 0px;
  margin-top: 20px;
`

export const VideoViews = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#94a3b8')};
  font-size: 13px;
  font-family: roboto;
  list-style-type: none;
`
export const VideoPublishedAt = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#94a3b8')};
  font-size: 13px;
  font-family: roboto;
  margin-left: 20px;
`

export const VideoViewsAndPublishedAt = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const VideoButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const VideoButton = styled.button`
  color: ${props => {
    if (props.isLiked) {
      return '#2563eb'
    }
    return '#64748b'
  }};
  height: 35px;
  width: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 0px;
`
export const HRLine = styled.hr`
  border-color: ${props =>
    props.isDarkTheme === true ? '#f9f9f9' : '#94a3b8'};
  border-style: solid;
  border-width: 1px;
  margin-top: 10px;
`

export const ChannelImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 100px;
`

export const ChannelLogoNameAlinement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ChannelName = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#1e293b')};
  font-size: 13px;
  font-family: roboto;
`

export const ChannelSubscribers = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#1e293b')};
  font-size: 13px;
  font-family: roboto;
`

export const ChannelNameSubscribersContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelDescrption = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#1e293b')};
  font-size: 15px;
  font-family: roboto;
  margin-left: 50px;
`
