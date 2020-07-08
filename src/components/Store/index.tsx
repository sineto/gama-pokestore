import React, { useState } from 'react';

import { Pokemon, PokemonCartItem } from '../../Utils';

import Header from '../Header';
import PokemonList from '../PokemonList';

const Store = () => {
	const getStorage: string | null = localStorage.getItem('pokemonCart') || '';
	let initialCart: PokemonCartItem[] = getStorage !== '' ? JSON.parse(getStorage) : [];

	// type Counter = {
	// 	totalprice: number;
	// 	totalitems: number;
	// };

	const [ pokemonCart, setPokemonCart ] = useState<PokemonCartItem[]>(initialCart);
	// const [ counter, setCounter ] = useState<Counter>(null);

	const handlePushToCart = (pokemon: Pokemon, qnt: number) => {

		for (let i = 0; i < pokemonCart.length; i++) { if (pokemonCart[i].id === pokemon.id) {
				console.log('entrou no if');
				const updateQnt = (qnt < 0 && pokemonCart[i].qnt <= 0) ? 0 : pokemonCart[i].qnt + qnt;
				let newPokeCart: PokemonCartItem[] = pokemonCart;
				newPokeCart[i] = { ...pokemonCart[i], qnt: updateQnt };

				// pokemon => [...newPokeCart] - will 'force'
				// refresh each time an existent item gets added
				setPokemonCart(pokemonCart => [...newPokeCart]);
				localStorage.setItem('pokemonCart', JSON.stringify(pokemonCart));
				return;
			}
		}

		const newPokeCart: PokemonCartItem[] = [
			...pokemonCart, {
			id: pokemon.id,
			name: pokemon.name,
			image: pokemon.sprites.front_default,
			price: pokemon.price,
			qnt: pokemon.qnt + 1
		}];

		setPokemonCart(newPokeCart)
		localStorage.setItem('pokemonCart', JSON.stringify(newPokeCart));
	};

	const handleCleanCart = () => {
		setPokemonCart([]);
		localStorage.removeItem('pokemonCart');
	};

	return (
		<>
			<Header
				pokemonCart={pokemonCart}
				pushToCart={handlePushToCart}
				cleanCart={handleCleanCart}
			/>
			<PokemonList
				pushToCart={handlePushToCart}
			/>
		</>
	);
};

export default Store;
