import React, { useState, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';

import Cart from '../Cart';
import { PokemonCartItem } from '../../Utils';


import {
	HeaderContainer,
	Logo,
	ButtonCart
} from './style';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

const Header: React.FC<{
	pokemonCart: PokemonCartItem[],
	pushToCart: any,
	cleanCart: any
}> = ({
		pokemonCart,
		pushToCart,
		cleanCart
	}) => {

	const [ cartState, setCartState ] = useState<boolean>(false);

	const totalItems = pokemonCart
		.map(item => item.qnt)
		.reduce((acc, next) => acc + next, 0);

	const toggleDrawer = (open: any) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setCartState(open);
  };

	return (
		<>
		<HeaderContainer>
			<FaSearch />
			<Logo>
				<Link to='/' > PokéMart </Link>
			</Logo>
			<ButtonCart onClick={toggleDrawer(true)}>
				<span> { totalItems } </span>
				<FaShoppingCart size={24} />
			</ButtonCart>
		</HeaderContainer>
		<Cart
			open={cartState}
			toggleDrawer={toggleDrawer}
			pokemonCart={pokemonCart}
			pushToCart={pushToCart}
			cleanCart={cleanCart}
		/>
		</>
	);
};

export default Header;
