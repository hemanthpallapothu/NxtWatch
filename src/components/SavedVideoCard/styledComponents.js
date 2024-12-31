import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const SavedVideosPageContainer = styled.li`
  display: flex;
  flex-direction: row;  
`

export const SavedVideosPageThumbnil = styled.img`
  height: 200px;
  width: 400px;
`

export const SavedVideosPageTitle = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#181818')};
  font-family: roboto;
  font-size: 20px;
  width: 500px;
`
export const SavedVideosPageChannelName = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#94a3b8')};
  font-family: roboto;
  font-size: 15px;
  margin-top: 20px;
`

export const SavedVideosPageAlinement = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const SavedVideosPageViewCountAndPublishedAt = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0px;
`

export const SavedVideosPageViewCount = styled.li`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#94a3b8')};
  font-family: roboto;
  font-size: 15px;
  list-style-type: none;
  margin-top: 20px;
`

export const SavedVideosPagePublishedAt = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#94a3b8')};
  font-family: roboto;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
