import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const TrendingVideo = styled.li`
  height: 100px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  @media screen and (min-width: 767px) {
    height: 200px;
    margin-bottom: 30px;
  }
`

export const TrendingVideoThumbnailUrl = styled.img`
  height: 100px;
  width: 200px;
  margin-right: 10px;
  @media screen and (min-width: 767px) {
    height: 200px;
    width: 400px;
  }
`

export const TrendingVideoContainer = styled.div`
  height: 100px;
  width: 250px;
  padding-left: 20px;
  @media screen and (min-width: 767px) {
    height: 150px;
    width: 500px;
  }
`
export const TrendingVideoTitle = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#181818')};
  font-size: 10px;
  font-family: roboto;
  margin-bottom: 10px;
  @media screen and (min-width: 767px) {
    font-size: 20px;
  }
`

export const TrendingVideoChannelName = styled.p`
  color: #64748b;
  font-size: 10px;
  font-family: roboto;
  margin-bottom: 10px;
  @media screen and (min-width: 767px) {
    font-size: 15px;
  }
`

export const TrendingVideoViewsAndPublishedAtContainer = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 0px;
`
export const TrendingVideoViews = styled.p`
  color: #64748b;
  font-size: 10px;
  font-family: roboto;
  list-style-type: none;
  @media screen and (min-width: 767px) {
    font-size: 15px;
  }
`

export const TrendingVideoPublishedAt = styled.p`
  color: #64748b;
  font-size: 10px;
  font-family: roboto;
  margin-left: 15px;
  @media screen and (min-width: 767px) {
    font-size: 15px;
  }
`

export const TrendingVideoNavLink = styled(Link)`
  text-decoration: none;
`
