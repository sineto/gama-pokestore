import React from 'react';
import { AddBoxRounded, IndeterminateCheckBoxRounded } from '@material-ui/icons';
import { FormatPrice, PokemonCartItem } from '../../Utils';

import {
	Container,
	Description,
	Actions,
	Name,
	Price,
	Button
} from './style';

const CartItem: React.FC<{
	pokemon: PokemonCartItem,
	pushToCart: any,
}> = ({
	pokemon,
	pushToCart,
}) => {

	return (
		<Container>
			<img src={pokemon.image} alt="" />
			<Description>
				<Name>{pokemon.name}</Name>
				<Price>{FormatPrice(pokemon.price * pokemon.qnt)}</Price>
			</Description>
			<Actions>
				<Button onClick={() => pushToCart(pokemon, (-1))}>
					<IndeterminateCheckBoxRounded />
				</Button>
				<span>{pokemon.qnt}</span>
				<Button onClick={() => pushToCart(pokemon, 1)}>
					<AddBoxRounded />
				</Button>
			</Actions>
		</Container>
	);
};

export default CartItem;
