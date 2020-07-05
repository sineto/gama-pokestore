import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ResponseData, GetPokeData, Pokemon, GetPokemon } from '../../Utils/Common';
import PokemonCard from '../PokemonCard';

import {
	Content,
	Pagination,
	PrevButton,
	NextButton
} from './style';

const PokeList = () => {
	const [ apiResource, setApiResource ] = useState<ResponseData | null>(null);
	const [ pokemonList, setPokemonList ] = useState<Pokemon[]>([]);
	const [ offset, setOffset ] = useState<number>(0);
	const limit: number = 20;

	useEffect(() => {
		const getPokeList = async () => {
			const { data: { count, next, previous, results } } = await GetPokeData(offset, limit);
			let pokeList = [];

			for await (const pokemon of results) {
				const pokeData = await GetPokemon(pokemon);
				pokeList.push(pokeData);
			};

			setApiResource({ count, next, previous });
			setPokemonList(pokeList);
		};

		getPokeList();
	}, [offset]);

	console.log('api resources', apiResource);
	console.log('pokemon list', pokemonList);
	console.log('handle Next Button', offset);

	const handlePrevButton = () => {
		if (apiResource?.previous) {
			setOffset(offset-20);
		}
	};

	const handleNextButton = () => {
		if (apiResource) {
			(offset > apiResource.count)
				? setOffset(apiResource.count)
				: setOffset(offset+20);
		}
	};

	return(
		<>
			{
				pokemonList[0] ? (
				<div>
					<Content>
						{
							pokemonList.map((pokemon: Pokemon) => {
								return <PokemonCard key={pokemon.id} pokemon={ pokemon } />
							})
						}
					</Content>

					<Pagination>
						<PrevButton
							onClick={handlePrevButton}
							disabled={apiResource?.previous === null}
						>
							<FaChevronLeft /> Prev
						</PrevButton>

						<NextButton
							onClick={handleNextButton}
							disabled={apiResource?.count ? offset >= apiResource.count : false}
						>
							Next <FaChevronRight />
						</NextButton>
					</Pagination>
				</div>

				) : 'Loading...'
			}
		</>
	);
};

export default PokeList;
