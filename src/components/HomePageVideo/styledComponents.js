import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const HomeVideoContainer = styled.li`
  height: 300px;
  width: 100%;
  margin: 10px;

  @media screen and (min-width: 767px) {
    width: 375px;
  }
`

export const HomeVideoThumbnailUrl = styled.img`
  height: 200px;
  width: 100%;

  @media screen and (min-width: 767px) {
    width: 375px;
  }
`

export const HomeVideoLogoAndTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const HomeVideoChannelLogo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 8px;
`
export const HomeVideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const HomeVideoTitle = styled.div`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : 'black;')};
  font-size: 15px;
  font-family: roboto;
  padding-left: 15px;
`
export const HomeVideoChannelName = styled.p`
  color: #475569;
  font-size: 15px;
  font-family: roboto;
  padding-left: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const HomeVideoViewsPublishedContainer = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
`
export const HomeVideoViews = styled.li`
  color: #475569;
  font-size: 15px;
  font-family: roboto;
  list-style-type: none;
`
export const HomeVideoPublished = styled.li`
  color: #475569;
  font-size: 15px;
  font-family: roboto;
  margin-left: 20px;
`

export const HomeVideoNavLink = styled(Link)`
  text-decoration: none;
`
