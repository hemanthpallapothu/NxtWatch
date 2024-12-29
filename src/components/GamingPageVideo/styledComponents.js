import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GamingVideo = styled.li`
  height: 300px;
  width: 200px;
  margin-bottom: 15px;
  @media screen and (min-width: 767px) {
    height: 500px;
    width: 350px;
  }
`

export const GamingVideoThumbnil = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 15px;
  @media screen and (min-width: 767px) {
    height: 400px;
    width: 350px;
  }
`

export const GamingVideoTitle = styled.h1`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#181818')};
  font-size: 15px;
  font-family: roboto;
  margin-bottom: 10px;
`

export const GamingVideoViewCount = styled.h1`
  color: #64748b;
  font-size: 15px;
  font-family: roboto;
`

export const GamingVideoNavLink = styled(Link)`
  text-decoration: none;
`
