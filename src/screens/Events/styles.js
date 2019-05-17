import styled from 'styled-components/native';

export const Container = styled.ScrollView`
	flex: 1;
`;

export const Content = styled.View``;

export const Loading = styled.ActivityIndicator`
	padding-top: 20px;
`;

export const EventList = styled.FlatList``;

export const NoEventsFound = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const NoEventsText = styled.Text``;

export const FooterLoading = styled.ActivityIndicator`
	padding-top: 20px;
	padding-bottom: 30px;
`;

export const EndOfList = styled.View`
	padding-bottom: 30px;
`;
