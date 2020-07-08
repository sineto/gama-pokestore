import axios from 'axios';

export type ApiMeta = {
	count: number;
	previous: string;
	next: string;
};

export type ApiData = {
	name: string;
	url: string;
};

export type Pokemon = {
	id: number;
	name: string;
	price: number;
	qnt: number;
	sprites: { front_default: string; };
	base_experience: number;
	weight: number;
	height: number;
	stats: {
		base_stat: number;
		effort: number;
		stat: { name: string };
	}[];
	types: {
		type: {
			name: string
		}
	};
};

export type PokemonCartItem = {
	id: number;
	image: string;
	name: string;
	price: number;
	qnt: number;
};

export const FormatPrice = (value: number) => {
	const currency = new Intl.NumberFormat('en', {
		style: 'currency',
		currency: 'USD'
	});

	const price = currency.format(value);
	return price;
};

export const GetApiData = async (offset: number | undefined, limit: number) => {
	if (!offset) offset = 0;
	const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
	return response;
};

export const GetPokemonChar = async (pokemon: ApiData) => {
	const response = await axios.get(pokemon.url);
	const price = response.data.height + response.data.weight;
	return { ...response.data, price, qnt: 0 };
};
