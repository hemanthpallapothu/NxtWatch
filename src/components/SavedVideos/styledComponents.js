import styled from 'styled-components'

export const SavedVideosPageContainer = styled.div`
  background-size: cover;
  display: flex;
  flex-direction: row;
`

export const SavedVideosPageSideContainer = styled.div`
  background-color: ${props =>
    props.isDarkTheme === true ? '#181818' : '#f9f9f9'};
  height: 92vh;
  width: 100%;
  background-size: cover;
  overflow: auto;
`

export const SavedVideoPageTitleContainer = styled.div`
  background-color: ${props =>
    props.isDarkTheme === true ? '#181818' : '#f9f9f9'};
  height: 100px;
  width: 100%;
  padding-left: 20px;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SavedVideoPageLogoContainer = styled.div`
  background-color: ${props =>
    props.isDarkTheme === true ? '#383838' : '#F1F5F9'};
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-size: cover;
`

export const SavedVideoPageTitle = styled.h1`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#181818')};
  font-family: roboto;
  font-size: 25px;
  padding-left: 20px;
`

export const NoVideosContainer = styled.div`
  color: ${props => (props.isDarkTheme === true ? '#181818' : '#f9f9f9')};
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NoVideosImg = styled.img`
  height: 400px;
  width: 400px;
`

export const NoVideosText = styled.h1`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#181818')};
  font-family: roboto;
  font-size: 25px;
`

export const NoVideosParagraph = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#181818')};
  font-family: roboto;
  font-size: 20px;
`
