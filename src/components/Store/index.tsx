import React, { useState } from 'react';

import { Pokemon, PokemonCartItem } from '../../Utils';

import Header from '../Header';
import PokemonList from '../PokemonList';
import Footer from '../Footer';

const Store = () => {
	const getStorage: string | null = localStorage.getItem('pokemonCart') || '';
	let initialCart: PokemonCartItem[] = getStorage !== '' ? JSON.parse(getStorage) : [];

	const [ pokemonCart, setPokemonCart ] = useState<PokemonCartItem[]>(initialCart);

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

	const handleDeleteFromCart = (pokemon: PokemonCartItem) => {
		const newPokeCart = pokemonCart.filter(item => item.id !== pokemon.id);
		setPokemonCart(newPokeCart);
		localStorage.setItem('pokemonCart', JSON.stringify(newPokeCart));
	};

	return (
		<>
			<Header
				pokemonCart={pokemonCart}
				pushToCart={handlePushToCart}
				deleteFromCart={handleDeleteFromCart}
				cleanCart={handleCleanCart}
			/>
			<PokemonList
				pushToCart={handlePushToCart}
			/>
			<Footer />
		</>
	);
};

export default Store;
