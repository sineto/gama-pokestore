import React from 'react';
import { AddBoxRounded, IndeterminateCheckBoxRounded } from '@material-ui/icons';
import { FaTrashAlt } from 'react-icons/fa';
import { FormatPrice, PokemonCartItem } from '../../Utils';

import {
	Container,
	Image,
	Description,
	Infos,
	IncDec,
	Name,
	Price,
	Button,
	ButtonTrash
} from './style';

const CartItem: React.FC<{
	pokemon: PokemonCartItem,
	pushToCart: any,
	deleteFromCart: any
}> = ({
	pokemon,
	pushToCart,
	deleteFromCart
}) => {

	return (
		<>
			<Container>
				<Image src={pokemon.image} alt={pokemon.name + 'image'} />
				<Description>
					<Infos>
						<Name>{pokemon.name}</Name>
						<Price>Total: {FormatPrice(pokemon.price * pokemon.qnt)}</Price>
					</Infos>
					<IncDec>
						<Button onClick={() => pushToCart(pokemon, (-1))}>
							<IndeterminateCheckBoxRounded />
						</Button>
						<span>{pokemon.qnt}</span>
						<Button onClick={() => pushToCart(pokemon, 1)}>
							<AddBoxRounded />
						</Button>
					</IncDec>
				</Description>
				<ButtonTrash onClick={() => deleteFromCart(pokemon)}>
					<FaTrashAlt size={22} />
				</ButtonTrash>
			</Container>
		</>
	);
};

/*
		<Container>
			<img src={pokemon.image} alt={pokemon.name + 'image'} />
			<Description>
				<Actions>
					<Name>{pokemon.name}</Name>
					<Price>Total: {FormatPrice(pokemon.price * pokemon.qnt)}</Price>
					<IncDec>
						<Button onClick={() => pushToCart(pokemon, (-1))}>
							<IndeterminateCheckBoxRounded />
						</Button>
						<span>{pokemon.qnt}</span>
						<Button onClick={() => pushToCart(pokemon, 1)}>
							<AddBoxRounded />
						</Button>
					</IncDec>
				</Actions>
				<ButtonTrash>
					<FaTrashAlt size={22} style={{ color: '#BABDB6' }} />
				</ButtonTrash>
			</Description>
		</Container>

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
 */
export default CartItem;
