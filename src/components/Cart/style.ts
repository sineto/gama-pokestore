import styled from 'styled-components';
import { List, DialogContent, styled as styles } from '@material-ui/core';

export const CartList = styles(List)({
		backgroundColor: '#F1F6F8',
});

export const DContent = styles(DialogContent)({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
});

export const Actions = styled.div`
	width: 100%;
	font-weight: 600;
	background: white;
	padding: 1em;
	position: sticky;
	bottom: 0%;
`;

export const Price = styled.div`
	margin-bottom: 0.75em;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const PriceTitle = styled.p`
	color: #27435E;
`;

export const PriceValue = styled.p`
	font-size: 1.1em;
	// font-weight: 700;
	color: #1492E6;
`;

export const Buttons = styled.div``;

export const ButtonCheckout = styled.button`
	width: 100%;
	font-weight: 600;
	color: white;
	border: 3px solid transparent;
	background: #1492E6;
	padding: 0.85em;

	cursor: pointer;
	transition: all 0.2s ease-in-out;

	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		color: #1492E6;
		border-color: #1492E6;
		background-color: white;
	}
`;

export const TextConfirm = styled.p`
	width: 60%;
	font-size: 2em;
	font-weight: 600;
	text-align: center;
	color: #27435E;
`;

export const EmptyCart = styled.div`
	text-align: center;
`;
