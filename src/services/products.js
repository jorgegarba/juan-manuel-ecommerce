import axios from 'axios';
import { URL_BACK } from '../constants';

export const getProducts = async () => {
	const response = await axios.get(`${URL_BACK}/productos`);
	return response.data;
};

export const postProduct = async (objProducto) => {
	try {
		const response = await axios.post(`${URL_BACK}/productos`, {
			...objProducto
		});
		if (response.status === 201) {
			return {
				ok: true,
				content: response.data.content
			};
		} else {
			throw new Error('Hubo un error en la creación del producto');
		}
	} catch (error) {
		return {
			ok: false,
			content: error.toString()
		};
	}
};
