import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
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
    this.state = { hidePassword: true, loading: false, inputFocused: '' };
  }

	renderError = () => (
  <ErrorView>
    <Error>Usuário não existe</Error>
  </ErrorView>
	);

	render() {
	  const { hidePassword, inputFocused, loading } = this.state;
	  return (
  <Container>
    <Content>
      <TitleBox>
        <Title>Faça seu login</Title>
        <Ionicons name="ios-key" size={25} color="yellow" />
      </TitleBox>
      <User>E-mail ou usuário</User>
      <UserInputBox focused={inputFocused}>
        <UserInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="e-mail ou usuário"
          underlineColorAndroid="transparent"
          onFocus={() => this.setState({ inputFocused: 'UserInputBox' })}
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
        />
        <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={20} color="#666" />
      </PasswordInputBox>
      {this.renderError()}
    </Content>
    <LogInButton>
      {loading ? <Loading size="small" color="#FFF" /> : <LogInText>Entrar</LogInText>}
    </LogInButton>
  </Container>
	  );
	}
}

export default Auth;
