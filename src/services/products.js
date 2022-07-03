import axios from 'axios';
import { URL_BACK } from '../constants';

export const getProducts = async () => {
	const response = await axios.get(`${URL_BACK}/productos`);
	return response.data;
};
