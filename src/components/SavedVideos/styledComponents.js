import styled from 'styled-components'

export const SavedVideosPageContainer = styled.div`
  background-size: cover;
  display: flex;
  flex-direction: row;
`

export const SavedVideosPageSideContainer = styled.div`
  background-color: ${props =>
    props.isDarkTheme === true ? '#212121' : '#f9f9f9'};
  height: 92vh;
  width: 100%;
  background-size: cover;
  overflow: auto;
`
