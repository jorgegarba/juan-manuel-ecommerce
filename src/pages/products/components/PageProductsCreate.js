import React from 'react';
import FormProductCreate from './FormProductCreate';

const PageProductsCreate = () => {
	return (
		<>
			<div className="row">
				<div className="col">
					<h2>Crear Producto</h2>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<div className="card">
						<div className="card-body">
							<FormProductCreate />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PageProductsCreate;
