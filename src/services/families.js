import axios from 'axios';
import { URL_BACK } from '../constants';

export const getFamilies = async () => {
	const response = await axios.get(`${URL_BACK}/producto-familias`);
	return response.data;
};
