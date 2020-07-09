import styled from 'styled-components';

export const FooterContainer = styled.footer`
	background: rgba(241, 246, 248, 0.5);
	padding: 1em;
	margin-top: 2em;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;

	p {
		font-size: 0.75em;
		font-weight: 600;
		margin: 1em;
		order: 2;
	}

	@media (max-width: 500px) {
		flex-wrap: nowrap;
		flex-direction: column;
		justify-content: center;
	}
`;

export const HardLink = styled.a`
	margin-left: 6px;
	border-bottom: 1px solid;
	cursor: pointer;

	transition: all 0.2s ease-in-out;

	&:hover {
		border-color: transparent;
	}
`;

export const Button = styled.a`
	font-size: 0.85em;
	font-weight: 500;
	color: #1492E6;
	border: 2px solid #1492E6;
	background: white;
	margin: 1em;
	padding: 0.75em;
	cursor: pointer;

	transition: all 0.2s ease-in-out;

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		color: white;
		background-color: #1492E6;
	}

	order: 1;
`;
