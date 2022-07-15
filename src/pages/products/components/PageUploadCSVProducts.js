import React, { useState } from 'react';
import Papa from 'papaparse';
import { postProduct } from '../../../services/products';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const PageUploadCSVProducts = () => {
	const [productos, setProductos] = useState();
	const navigate = useNavigate();

	const handleChange = (e) => {
		Papa.parse(e.target.files[0], {
			header: true,
			skipEmptyLines: true,
			complete: (results) => {
				setProductos(results.data);
			}
		});
	};

	const onClickCrearProductos = async () => {
		const productosToBD = productos.map((p) => {
			return {
				categoriaId: p.categoriaId,
				familiaId: p.familiaId,
				codigo: p.codigo,
				nombre: p.nombre
			};
		});

		for (const prod of productosToBD) {
			const response = await postProduct(prod);
			if (response.ok) {
				toast('Producto creado!', { type: 'success' });
			} else {
				toast(response.content, { type: 'error' });
			}
		}
		navigate('/products');
	};

	return (
		<>
			<div className="row">
				<div className="col">
					<div className="card shadow">
						<div className="card-body">
							<form>
								<div className="mb3">
									<label htmlFor="file" className="form-label">
										Seleccionar archivo CSV:
									</label>
									<input
										onChange={handleChange}
										type="file"
										className="form-control"
										id="file"
										accept=".csv"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			{productos && productos.length > 0 ? (
				<div className="row mt-5">
					<div className="col">
						<div className="card shadow">
							<div className="card-body">
								<h2 className="display-5">Productos</h2>
								<hr />
								<table className="table">
									<thead>
										<tr>
											<th>codigo</th>
											<th>nombre</th>
											<th>eliminado</th>
											<th>familiaId</th>
											<th>categoriaId</th>
											<th>estado</th>
											<th>imagen</th>
										</tr>
									</thead>
									<tbody>
										{productos.map((p, idx) => {
											return (
												<tr key={idx}>
													<td>{p.codigo}</td>
													<td>{p.nombre}</td>
													<td>{p.eliminado}</td>
													<td>{p.familiaId}</td>
													<td>{p.categoriaId}</td>
													<td>{p.estado}</td>
													<td>{p.imagen}</td>
												</tr>
											);
										})}
									</tbody>
								</table>
								<div className="row">
									<div className="col text-end">
										<button
											className="btn btn-outline-primary"
											onClick={onClickCrearProductos}
										>
											Crear productos
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<p>Seleccione un archivo válido</p>
			)}
		</>
	);
};

export default PageUploadCSVProducts;
