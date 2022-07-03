import React from 'react';
import TableProducts from './TableProducts';
import { Link } from 'react-router-dom';

const PageProducts = () => {
	return (
		<div className="row">
			<div className="col-12">
				<h2>
					Administración de Productos
					<Link to={'/products/create'}>
						<button className="btn">
							<i className="fa-solid fa-circle-plus fa-2x text-success"></i>
						</button>
					</Link>
				</h2>
				<TableProducts />
			</div>
		</div>
	);
};

export default PageProducts;
