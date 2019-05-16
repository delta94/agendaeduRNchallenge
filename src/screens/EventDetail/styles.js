/* eslint-disable no-tabs */
import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.ScrollView`
	flex: 1;
`;
export const BackgroundImage = styled.Image`
	height: 260;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 1;
`;
export const Slider = styled.View`
	background: ${colors.white};
	flex: 1;
	margin-top: 160;
  z-index: 5
	border-radius: 20;
`;
export const Header = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	padding: 32px;
`;
export const DateIcon = styled.View`
	height: 60;
	width: 60;
	background: ${colors.primaryLight};
	border-radius: 5;
	align-items: center;
	justify-content: center;
`;
export const DateDay = styled.Text`
	color: ${colors.primary}
	font-size: 22;
	font-weight: bold
`;

export const DateText = styled.Text`
	color: ${colors.primary};
	font-size: 14;
`;

export const InfoContainer = styled.View`
	padding-left: 16px;
	flex: 1;
	flex-wrap: wrap;
`;
export const Title = styled.Text`
	font-size: 22;
	font-weight: bold;
`;

export const TimeContainer = styled.View`
	padding-top: 10px;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;
export const TimeText = styled.Text`
	padding-left: 6px;
	font-size: 16;
`;

export const Description = styled.Text`
	padding: 0 32px 32px;
	font-size: 16;
	text-align: justify;
`;
