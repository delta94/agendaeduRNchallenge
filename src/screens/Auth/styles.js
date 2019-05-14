/* eslint-disable no-tabs */
import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.SafeAreaView`
	flex: 1;
`;
export const Content = styled.View`
	flex: 1;
	align-items: flex-start;
	justify-content: center;
	padding: ${metrics.basePadding}px;
`;

export const TitleBox = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
`;

export const Title = styled.Text`
	font-size: 25;
	color: ${colors.darker};
	font-weight: bold;
	padding-bottom: 36;
`;
export const User = styled.Text`
	font-size: 16;
	color: ${colors.dark};
	padding-bottom: 8;
`;

export const UserInputBox = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: white;
	height: 50;
	width: 100%;
	padding: 5px 20px;
	border-width: 2px;
	border-radius: ${metrics.baseRadius};
	border-style: solid;
	border-color: ${props => (props.focused === 'UserInputBox' ? colors.primary : colors.regular)};
`;

export const UserInput = styled.TextInput``;
export const Password = styled.Text`
	font-size: 16;
	color: ${colors.dark};
	padding-bottom: 8;
	margin-top: 17;
`;

export const PasswordInputBox = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: white;
	height: 50;
	width: 100%;
	padding: 5px 20px;
	border-width: 2px;
	border-radius: ${metrics.baseRadius};
	border-style: solid;
	border-color: ${props => (props.focused === 'PasswordInputBox' ? colors.primary : colors.regular)};
`;
export const PasswordInput = styled.TextInput``;

export const ErrorView = styled.View`
	justify-content: center;
	width: 100%;
	align-items: center;
	padding-top: ${metrics.basePadding};
`;

export const Error = styled.Text`
	color: ${colors.danger};
	text-align: center;
	line-height: 21;
`;

export const LogInButton = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	height: 50;
	background: ${colors.primary};
	margin: ${metrics.basePadding}px;
	border-radius: ${metrics.baseRadius};
`;
export const LogInText = styled.Text`
	color: ${colors.white};
`;
export const Loading = styled.ActivityIndicator``;
