import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
	flex: 1;
	padding-top: ${metrics.basePadding};
`;
export const Date = styled.Text`
	color: ${colors.regular};
	font-size: 14;
	padding-left: ${metrics.basePadding};
`;

export const EventContainer = styled.View`
	padding: ${metrics.baseMargin * 2}px ${metrics.basePadding}px 0;
`;
