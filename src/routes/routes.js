import { LayoutAdmin } from '../layouts/LayoutAdmin';
import PageHome from '../pages/home/components/PageHome';
import PageProducts from '../pages/products/components/PageProducts';
import PageProductsCreate from '../pages/products/components/PageProductsCreate';
import PageUploadCSVProducts from '../pages/products/components/PageUploadCSVProducts';

export const routes = [
	{ path: '/', component: PageHome, container: LayoutAdmin },
	{ path: '/products', component: PageProducts, container: LayoutAdmin },
	{
		path: '/products/create',
		component: PageProductsCreate,
		container: LayoutAdmin
	},
	{
		path: '/products/upload-csv',
		component: PageUploadCSVProducts,
		container: LayoutAdmin
	}
];
