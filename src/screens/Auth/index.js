/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from '../../store/ducks/auth';

import {
  Container,
  Content,
  TitleBox,
  Title,
  User,
  UserInputBox,
  UserInput,
  Password,
  PasswordInputBox,
  PasswordInput,
  ErrorView,
  Error,
  LogInButton,
  LogInText,
  Loading,
} from './styles';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePassword: true,
      inputFocused: '',
      email: '',
      password: '',
    };
  }

	signIn = async () => {
	  const { signInRequest } = this.props;
	  const { email, password } = this.state;
	  const credentials = { email, password };
	  const moked = { email: 'student@ae.com', password: '123456' };

	  await signInRequest(moked);
	};

	changeInput = (text, input) => {
	  this.setState({ [input]: text });
	};

	renderError = () => {
	  const { error } = this.props.auth;
	  return (
  <ErrorView>
    <Error>{error}</Error>
  </ErrorView>
	  );
	};

	render() {
	  const {
	    hidePassword, inputFocused, email, password,
	  } = this.state;
	  const { loading } = this.props.auth;
	  return (
  <Container>
    <Content>
      <TitleBox>
        <Title>Faça seu login</Title>
        <Ionicons name="ios-key" size={25} color="#ddba2c" />
      </TitleBox>
      <User>E-mail ou usuário</User>
      <UserInputBox focused={inputFocused}>
        <UserInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="e-mail ou usuário"
          underlineColorAndroid="transparent"
          onFocus={() => this.setState({ inputFocused: 'UserInputBox' })}
          value={email}
          onChangeText={text => this.changeInput(text, 'email')}
        />
        <Ionicons name="md-mail" size={20} color="#666" />
      </UserInputBox>
      <Password>Senha</Password>
      <PasswordInputBox focused={inputFocused}>
        <PasswordInput
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          placeholder="senha"
          onFocus={() => this.setState({ inputFocused: 'PasswordInputBox' })}
          secureTextEntry={hidePassword}
          value={password}
          onChangeText={text => this.changeInput(text, 'password')}
        />
        <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={20} color="#666" />
      </PasswordInputBox>
      {this.renderError()}
    </Content>
    <LogInButton onPress={this.signIn}>
      {loading ? <Loading size="small" color="#FFF" /> : <LogInText>Entrar</LogInText>}
    </LogInButton>
  </Container>
	  );
	}
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
