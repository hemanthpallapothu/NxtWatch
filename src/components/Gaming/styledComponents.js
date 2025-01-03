import styled from 'styled-components'

export const GamingPageContainer = styled.div`
  background-size: cover;
  display: flex;
  flex-direction: row;
`

export const GamingPageSideContainer = styled.div`
  background-color: ${props =>
    props.isDarkTheme === true ? '#181818' : '#f9f9f9'};
  height: 92vh;
  width: 100%;
  background-size: cover;
  overflow: auto;
`

export const GamingPageInprogressView = styled.div`
  height: 92vh;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const GamingPageTitleContainer = styled.div`
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
export const GamingPageLogoContainer = styled.div`
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

export const GamingPageTitle = styled.h1`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#181818')};
  font-family: roboto;
  font-size: 25px;
  padding-left: 20px;
`

export const GamingPageVideosContainer = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  list-style-type: none;
`
