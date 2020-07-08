import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Pokemon, FormatPrice } from '../../Utils';
import {
	Container,
	CardDescription,
	CardName,
	CardPrice,
	CardSubDesc,
	CardSubTitle,
	CardSubSpan,
	CardButton
} from './style';

const PokemonCard: React.FC<{
	pokemon: Pokemon,
	pushToCart: any
}> = ({ 
	pokemon, 
	pushToCart
}) => {
	return (
		<Container>
			<img src={ pokemon.sprites.front_default } alt={ pokemon.name + 'image'} />

			<CardDescription>
				<CardPrice>{ FormatPrice(pokemon.price) }</CardPrice>
				<CardName>{ pokemon.name }</CardName>
				<CardSubDesc>
					<CardSubTitle>
						Experience
						<CardSubSpan>
							{ pokemon.base_experience }
						</CardSubSpan>
					</CardSubTitle>
					<CardSubTitle>
						Dimensions
						<CardSubSpan>
							{ pokemon.height }m x { pokemon.weight }kg
						</CardSubSpan>
					</CardSubTitle>
				</CardSubDesc>
			</CardDescription>
			<CardButton onClick={() => pushToCart(pokemon, 1)}>
				<FaCartPlus
					size={24}
					style={{ marginRight: 10 }} />
				Add to Cart
			</CardButton>
		</Container>
	);
};

export default PokemonCard;
