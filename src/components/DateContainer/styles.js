import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
	padding-top: ${metrics.basePadding};
`;
export const Date = styled.Text`
	color: ${colors.regular};
	font-size: 14;
	font-weight: bold;
	padding-left: ${metrics.basePadding};
`;

export const EventContainer = styled.View`
	padding: ${metrics.baseMargin * 2}px ${metrics.basePadding}px 0;
`;
