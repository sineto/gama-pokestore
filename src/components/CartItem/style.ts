import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	font-size: 0.85em;
	font-weight: 600;
	text-transform: capitalize;
	color: rgb(39,67,94);
	background-color: white;
	padding: 1em;

	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
export const Image = styled.img`
	max-width: 80px;
	margin: 10px;
`;

export const Description = styled.div`
	width: 100%;
`;

export const Name = styled.span`
	text-align: left;
	margin: 0 10px 8px 0;
`;

export const Price = styled.span`
	text-align: left;
	color: #1492E6;
`;

export const Infos = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

export const IncDec = styled.div`
	margin-top: 0.65em;
	display: flex;
	align-items: center;

	span {
		width: 30px;
		text-align: center;
		display: block;
		margin: 0 1em;
	}
`;

export const Button = styled.button`
	color: rgb(39,67,94);
	border: unset;
	background: unset;
	cursor: pointer;
	outline: none;
`;

export const ButtonTrash = styled(Button)`
	float: right;
	color: #BABDB6;

	&:hover {
		color: #EF2929;
	}
`;
