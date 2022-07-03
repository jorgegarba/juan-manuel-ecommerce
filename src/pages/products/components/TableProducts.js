import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../services/products';
import LoadingComponent from '../../../shared/components/LoadingComponent';

const TableProducts = () => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getProducts().then((data) => {
			setProductos(data.content);
			setLoading(false);
		});
	}, []);

	return (
		<>
			{loading ? (
				<LoadingComponent
					title={'Cargando'}
					text={'Obteniendo los productos...'}
				/>
			) : (
				<table className="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Id</th>
							<th scope="col">Código</th>
							<th scope="col">Nombre</th>
							<th scope="col">Estado</th>
							<th scope="col">Imagen</th>
							<th scope="col">Familia</th>
							<th scope="col">Eliminado</th>
							<th scope="col">Acciones</th>
						</tr>
					</thead>
					<tbody>
						{productos.map((p, idx) => {
							return (
								<tr key={p.id}>
									<td>{idx + 1}</td>
									<td>{p.id}</td>
									<td>{p.codig}</td>
									<td>{p.nombre}</td>
									<td>
										{p.estado ? (
											<i className="fa-solid fa-circle-check text-success"></i>
										) : (
											<i className="fa-solid fa-circle-xmark text-danger"></i>
										)}
									</td>
									<td>
										<img src={p.imagen} />
									</td>
									<td>{p.familiaId}</td>
									<td>{p.eliminado}</td>
									<td>
										<button className="btn btn-secondary me-2">
											<i className="fa-solid fa-pencil me-2"></i>
											Editar
										</button>
										<button className="btn btn-danger">
											<i className="fa-solid fa-trash me-2"></i>
											Eliminar
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
		</>
	);
};

export default TableProducts;
