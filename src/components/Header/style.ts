import styled from 'styled-components';

export const HeaderContainer = styled.header`
	background-color: #F1F6F8;
	border: 4px solid white;
	padding: 1em;

  position: sticky;
	top: 0;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.div`
	font-weight: 700;
`;

export const ButtonCart = styled.button`
	color: rgba(39, 67, 94, 1.0);
	border: unset;
	background: unset;

	display: flex;
	align-items: center;

	span {
		width: 28px;
		height: 28px;
		font-size: 0.65em;
		font-weight: 700;
		text-align: center;
		line-height: 1.4;
		color: white;
		background-color: rgba(39, 67, 94, 1.0);
		border-radius: 50%;
		padding: 5px 6px;

		display: flex;
		justify-content: center;
	}

	outline: none;
	cursor: pointer;
`;
