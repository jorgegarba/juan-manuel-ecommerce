import { LayoutAdmin } from '../layouts/LayoutAdmin';
import PageHome from '../pages/home/components/PageHome';
import PageProducts from '../pages/products/components/PageProducts';

export const routes = [
	{ path: '/', component: PageHome, container: LayoutAdmin },
	{ path: '/products', component: PageProducts, container: LayoutAdmin }
];
