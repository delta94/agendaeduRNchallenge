/* eslint-disable no-tabs */
import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
	border-width: 1;
	border-top-color: ${colors.light};
	border-bottom-color: ${colors.light};
	border-right-color: ${colors.light};
	border-left-width: 4;
	border-left-color: ${colors.primary};
	border-radius: ${metrics.baseRadius}
	margin-bottom: 8;
	shadow-offset: 0px 2px;
	shadow-color: ${colors.black};
	shadow-opacity: 0.3;
	shadow-radius: 1;
`;

export const Content = styled.View`
	padding: 16px 16px 16px 0;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const EventImage = styled.Image`
	height: 100%;
	width: 66;
	margin-left: 12;
`;

export const EventInfo = styled.View`
	flex: 1;
	padding-left: 12;
`;

export const Title = styled.Text`
	font-size: 14;
	color: ${colors.regular};
	padding-bottom: 12px;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 1,
})`
	font-size: 16;
	color: ${colors.darker};
	padding-bottom: 8px;
`;

export const TimeContainer = styled.View`
	flex: 1;
	flex-direction: row;
`;

export const TimerText = styled.Text`
	font-size: 14;
	color: ${colors.dark};
	padding-bottom: 12px;
	padding-left: 6px;
`;

export const Date = styled.Text`
	font-size: 12;
	color: ${colors.regular};
`;
