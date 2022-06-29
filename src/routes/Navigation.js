import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import { routes } from './routes';
const Navigation = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(
					({ component: Component, path, container: Layout }, idx) => {
						return (
							<Route
								path={path}
								element={
									<Layout>
										<Component />
									</Layout>
								}
								key={idx}
							/>
						);
					}
				)}
			</Routes>
		</BrowserRouter>
	);
};

export default Navigation;
