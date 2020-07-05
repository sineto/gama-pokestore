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

export const GetPokemon = async (pokemon: ResponseListItem) => {
	const response = await axios.get(pokemon.url);
	const image = `https://pokeres.bastionbot.org/images/pokemon/${response.data.id}.png`;
	return { ...response.data, image };
};
