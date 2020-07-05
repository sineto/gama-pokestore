import axios from 'axios';

export type ResponseData = {
	count: number;
	previous: string;
	next: string;
};

export type ResponseListItem = {
	name: string;
	url: string;
};

export type Pokemon = {
	id: number;
	name: string;
	image: string;
	price: string;
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

export const GetPokeData = async (offset: number | undefined, limit: number) => {
	if (!offset) offset = 0;
	const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
	return response;
};

export const formatPrice = (value: number) => {
	const currency = new Intl.NumberFormat('en', {
		style: 'currency',
		currency: 'USD'
	});

	const price = currency.format(value);
	return price;
};

export const GetPokemon = async (pokemon: ResponseListItem) => {
	const response = await axios.get(pokemon.url);
	const image = `https://pokeres.bastionbot.org/images/pokemon/${response.data.id}.png`;
	const price = formatPrice(response.data.height + response.data.weight);
	return { ...response.data, image, price };
};
