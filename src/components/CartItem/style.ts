import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	font-size: 0.85em;
	font-weight: 600;
	text-transform: capitalize;
	color: rgb(39,67,94);
	padding: 1em;

	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: white;
`;

export const Description = styled.div`
	img, span {
		display: block;
	}

	img {
		max-width: 80px;
	}
`;

export const Actions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Button = styled.button`
	color: rgb(39,67,94);
	border: unset;
	background: unset;
	cursor: pointer;
	outline: none;
`;

export const Name = styled.span`
	margin-right: 10px;
`;

export const Price = styled.span`
	color: #1492E6;
`;
