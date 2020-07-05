import styled from 'styled-components';

// light blue = #F6F9FA
// blue = #1492E6
// dark blue = #27435E - rgb(39,67,94)

export const Container = styled.article`
	font-weight: 700;
	margin: 1.5em 1em;
	border: 3px solid #BABDB6;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	transition: all 0.2s ease-in-out;

	img {
		max-width: 140px;
		margin: 1em;
		display: block;
	}

	&:hover {
		box-shadow: 6px 10px 10px 10px  rgba(20, 146, 230, 0.1);
		border-color: rgba(20, 146, 230, 1.0);
	}
`;

export const CardDescription = styled.div`
	width: 100%;
	font-weight: 600;
	background: #F6F9FA;
	padding: 1em;

	display: flex;
	flex-direction: column;
	// justify-content: center;
	// align-items: center;
`;

export const CardName = styled.p`
	text-transform: capitalize;
	margin-bottom: 0.85em;
`;

export const CardPrice = styled.span`
	font-size: 0.85em;
	font-weight: 700;
	color: #1492E6;
`;

export const CardSubDesc = styled.div`
	display: flex;
`;

export const CardSubTitle = styled.p`
	font-size: 0.80em;
	margin-right: 1em;
`;

export const CardSubSpan = styled.span`
	color: rgba(39, 67, 94, 0.4);
	display: block;
`;

const Button = styled.button`
	font-weight: 600;
	font-size: 0.75em;
	color: inherit;
	background: transparent;
	border: 3px solid transparent;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;
`;


export const CardButton = styled(Button)`
	width: 100%;
	color: #BABDB6;
	padding: 1em;

	transition: all 0.2s ease-in-out;

	&:hover {
		color: white;
		background: #1492e6;
	}
`;
