import styled from 'styled-components';

export const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const Pagination = styled.div`
	margin: 1em;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #1492E6;
`;

const Button = styled.button`
	font-weight: 600;
	color: #1492E6;
	border: 2px solid #1492E6;
	background: white;
	padding: 0.65em;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	transition: all 0.2s ease-in-out;

	&:hover:enabled {
		color: white;
		background-color: #1492E6;
	}

	&:disabled {
		color: #BABDB6;
		border-color: #BABDB6;
		cursor: not-allowed;
	}
`;

export const PrevButton = styled(Button)`
	margin-right: 0.15em;
`;

export const NextButton = styled(Button)`
	margin-left: 0.15em;
`;

