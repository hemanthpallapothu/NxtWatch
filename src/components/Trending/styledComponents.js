import styled from 'styled-components'

export const TrendingPageContainer = styled.div`
  background-size: cover;
  display: flex;
  flex-direction: row;
`
export const TrendingPageSideContainer = styled.div`
  background-color: ${props =>
    props.isDarkTheme === true ? '#212121' : '#f9f9f9'};
  height: 92vh;
  width: 100%;
  background-size: cover;
  overflow: auto;
`
export const TrendingPageTitle = styled.h1`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#181818')};
  font-family: roboto;
  font-size: 25px;
  padding-left: 20px;
`

export const TrendingPageTitleContainer = styled.div`
  background-color: ${props =>
    props.isDarkTheme === true ? '#212121' : '#f9f9f9'};
  height: 100px;
  width: 100%;
  padding-left: 20px;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TrendingPageLogoContainer = styled.div`
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

export const TrendingPageInprogressView = styled.div`
  height: 92vh;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const TrendingPageVideosContainer = styled.ul`
  padding: 0px;
`
