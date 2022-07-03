import React from 'react';

const FormProductCreate = () => {
	return (
		<form>
			<div className="mb-3">
				<label htmlFor="nombre" className="form-label">
					Nombre:
				</label>
				<input
					type="text"
					className="form-control"
					id="nombre"
					placeholder="Ejm: Panetón"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="codigo" className="form-label">
					Codigo:
				</label>
				<input
					type="text"
					className="form-control"
					id="codigo"
					placeholder="Ejm: COD-123"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="familia" className="form-label">
					Familia:
				</label>
				<select className="form-select" id="familia">
					<option selected>Familia 1</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
			</div>
			<div className="mb-3">
				<label htmlFor="archivo" className="form-label">
					Imagen del producto:
				</label>
				<input className="form-control" type="file" id="archivo" />
			</div>
			<div className="text-end">
				<button className="btn btn-primary">Crear</button>
			</div>
		</form>
	);
};

export default FormProductCreate;
