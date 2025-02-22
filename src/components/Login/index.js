import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  GlobalStyle,
  MainContainer,
  LoginCardContainer,
  Image,
  InputLabel,
  InputContainer,
  LabelAndInputAlinement,
  ShowPasswordCheckBox,
  ShowPasswordText,
  CheckBox,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    isChecked: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onClickSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const api = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(api, options)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      this.onSubmitSuccess(jwtToken)
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, errorMsg, isChecked} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <>
        <GlobalStyle />
        <ThemeContext.Consumer>
          {value => {
            const {isDarkTheme} = value
            return (
              <MainContainer isDarkTheme={isDarkTheme}>
                <LoginCardContainer
                  isDarkTheme={isDarkTheme}
                  onSubmit={this.onClickSubmit}
                >
                  {isDarkTheme ? (
                    <Image
                      alt="website logo"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    />
                  ) : (
                    <Image
                      alt="website logo"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    />
                  )}
                  <LabelAndInputAlinement>
                    <InputLabel htmlFor="USERNAME" isDarkTheme={isDarkTheme}>
                      USERNAME
                    </InputLabel>
                    <InputContainer
                      id="USERNAME"
                      type="text"
                      placeholder="Username"
                      isDarkTheme={isDarkTheme}
                      onChange={this.onChangeUsername}
                      value={username}
                    />
                  </LabelAndInputAlinement>
                  <LabelAndInputAlinement>
                    <InputLabel htmlFor="PASSWORD" isDarkTheme={isDarkTheme}>
                      PASSWORD
                    </InputLabel>
                    <InputContainer
                      id="PASSWORD"
                      type={isChecked ? 'text' : 'password'}
                      placeholder="Password"
                      isDarkTheme={isDarkTheme}
                      onChange={this.onChangePassword}
                      value={password}
                    />
                  </LabelAndInputAlinement>
                  <ShowPasswordCheckBox>
                    <CheckBox
                      type="checkbox"
                      checked={isChecked}
                      id="Show Password"
                      onClick={this.onClickCheckbox}
                    />
                    <ShowPasswordText
                      htmlFor="Show Password"
                      isDarkTheme={isDarkTheme}
                    >
                      Show Password
                    </ShowPasswordText>
                  </ShowPasswordCheckBox>
                  <LoginButton type="submit">Login</LoginButton>
                  <ErrorMsg>{errorMsg}</ErrorMsg>
                </LoginCardContainer>
              </MainContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}

export default Login
