import React, { useEffect, useState } from 'react';
import { URL_BACK_FILES } from '../../../constants';
import { getCategories } from '../../../services/categories';
import { getFamilies } from '../../../services/families';
import { getProducts } from '../../../services/products';
import GenericModal from '../../../shared/components/GenericModal';
import LoadingComponent from '../../../shared/components/LoadingComponent';
import ExportExcelComponent from './ExportExcelComponent';
import { Link } from 'react-router-dom';

const TableProducts = () => {
	const [productos, setProductos] = useState([]);
	const [families, setFamilies] = useState([]);
	const [categories, setCategories] = useState([]);

	const [loading, setLoading] = useState(true);

	const [showModal, setShowModal] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState();

	const getAll = async () => {
		const dataFamilies = await getFamilies();
		const dataCategories = await getCategories();
		const dataProducts = await getProducts();
		setFamilies(dataFamilies.content);
		setCategories(dataCategories.content);
		setProductos(dataProducts.content);
		setLoading(false);
	};
	useEffect(() => {
		getAll();
	}, []);

	const onClickImage = (producto) => {
		setSelectedProduct(producto);
		setShowModal(true);
	};

	return (
		<>
			{selectedProduct ? (
				<GenericModal
					title={selectedProduct.nombre}
					show={showModal}
					setShowModal={setShowModal}
				>
					<div className="row">
						<div className="col text-center">
							<img
								style={{ maxWidth: '250px' }}
								src={`${URL_BACK_FILES}/${selectedProduct.imagen}`}
								alt=""
							/>
						</div>
					</div>
				</GenericModal>
			) : null}

			{loading ? (
				<LoadingComponent
					title={'Cargando'}
					text={'Obteniendo los productos...'}
				/>
			) : (
				<>
					<div className="row mb-3">
						<div className="col text-end">
							<ExportExcelComponent productos={productos} families={families} />
							<Link to={'/products/upload-csv'}>
								<button className="btn btn-secondary">
									Importar desde CSV
								</button>
							</Link>
						</div>
					</div>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Id</th>
								<th scope="col">Código</th>
								<th scope="col">Nombre</th>
								<th scope="col">Estado</th>
								<th scope="col">Imagen</th>
								<th scope="col">Familia</th>
								<th scope="col">Categoría</th>
								<th scope="col">Eliminado</th>
								<th scope="col">Acciones</th>
							</tr>
						</thead>
						<tbody>
							{productos.map((p, idx) => {
								const familyFound = families.find((fa) => {
									if (fa.id === p.familiaId) {
										return fa;
									}
								});
								const categoryFound = categories.find((cat) => {
									if (cat.id === p.categoriaId) {
										return cat;
									}
								});

								return (
									<tr key={p.id}>
										<td>{idx + 1}</td>
										<td>{p.id}</td>
										<td>{p.codigo}</td>
										<td>{p.nombre}</td>
										<td>
											{p.estado ? (
												<i className="fa-solid fa-circle-check text-success"></i>
											) : (
												<i className="fa-solid fa-circle-xmark text-danger"></i>
											)}
										</td>
										<td>
											<img
												onClick={() => {
													onClickImage(p);
												}}
												src={`${URL_BACK_FILES}/${p.imagen}`}
												style={{ width: '100px' }}
											/>
										</td>
										<td>{familyFound.nombre}</td>
										<td>{categoryFound.nombre}</td>
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
				</>
			)}
		</>
	);
};

export default TableProducts;
