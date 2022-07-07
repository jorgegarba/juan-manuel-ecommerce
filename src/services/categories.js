import axios from 'axios';
import { URL_BACK } from '../constants';

export const getCategories = async () => {
	const response = await axios.get(`${URL_BACK}/producto-categorias`);
	return response.data;
};
