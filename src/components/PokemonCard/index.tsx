import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Pokemon } from '../../Utils/Common';
import {
	Container, 
	CardDescription,
	CardName, 
	CardSubDesc,
	CardSubTitle,
	CardSubSpan,
	CardButton
} from './style';

const PokemonCard: React.FC<{pokemon: Pokemon}> = ({ pokemon }) => {
	return (
		<Container>
			<img src={ pokemon.sprites.front_default } alt={ pokemon.name + 'image'} />

			<CardDescription>
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
			<CardButton> <FaCartPlus size={24} style={{ marginRight: 10 }}/> Add to Cart </CardButton>
		</Container>
	);
};

export default PokemonCard;
