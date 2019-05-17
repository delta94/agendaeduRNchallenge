import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.SafeAreaView`
	flex: 1;
`;
export const Content = styled.ScrollView``;

export const Logout = styled.TouchableOpacity`
	height: 40;
	background: ${colors.lighter};
	justify-content: center;
`;

export const LogoutText = styled.Text`
padding-left: 20px
font-size: 14;
font-weight: bold
`;

export const AvatarContent = styled.View`
	align-items: center;
`;

export const Avatar = styled.Image`
	height: 120;
	width: 90;
	border-radius: 50;
`;

export const Username = styled.Text`
	font-size: 16;
	padding: 8px 0;
`;
