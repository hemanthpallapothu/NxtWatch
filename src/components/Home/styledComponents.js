import styled from 'styled-components'

export const HomePageBGContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 200px;
  background-size: cover;
  padding: 25px;
`

export const HomePageContainer = styled.div`
  background-size: cover;
  display: flex;
  flex-direction: row;
`

export const HomePageSideContainer = styled.div`
  background-color: ${props =>
    props.isDarkTheme === true ? '#212121' : '#f9f9f9'};
  height: 92vh;
  width: 100%;
  background-size: cover;
  overflow: auto;
`

export const HomePageBannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 300px;
  width: 100%;
  background-size: cover;
`

export const HomePageBannerImg = styled.img`
  height: 40px;
  width: 150px;
  padding-left: 25px;
  padding-top: 25px;
`

export const HomePageBannerText = styled.p`
  color: #1e293b;
  font-size: 25px;
  font-family: roboto;
  width: 400px;
  padding-left: 25px;
  padding-top: 25px;
`

export const HomePageBannerButton = styled.button`
  height: 35px;
  width: 100px;
  background-color: transparent;
  border-width: 1px;
  margin-left: 25px;
  margin-top: 25px;
`

export const HomePageBannerAndButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const HomePageBannerCloseButton = styled.button`
  background-color: transparent;
  border: 0px;
`

export const HomePageSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const HomePageVideoSearch = styled.input`
  background-color: ${props =>
    props.isDarkTheme === true ? '#212121' : '#f9f9f9'};
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.isDarkTheme === true ? '#f9f9f9' : '#212121'};
  height: 35px;
  width: 300px;
  margin-top: 20px;
  margin-left: 20px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  @media screen and(min-width: 767px) {
    height: 35px;
    width: 400px;
  }
`

export const HomePageVideoSearchButton = styled.button`
  height: 39px;
  width: 100px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  margin-top: 20px;
  border-width: 1px;
  border-color: ${props =>
    props.isDarkTheme === true ? '#f9f9f9' : '#212121'};
`

export const HomePageVideosContainer = styled.ul`
  margin-top: 20px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px;
  width: 100%;
`

export const HomePageInprogressView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
