import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { getFamilies } from '../../../services/families';
import { getCategories } from '../../../services/categories';
import { getProducts } from '../../../services/products';
import LoadingComponent from '../../../shared/components/LoadingComponent';

const TableProductsPagination = () => {
	const [productos, setProductos] = useState([]);
	const [families, setFamilies] = useState([]);
	const [categories, setCategories] = useState([]);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const getAll = async () => {
		const dataFamilies = await getFamilies();
		const dataCategories = await getCategories();
		const dataProducts = await getProducts();
		setFamilies(dataFamilies.content);
		setCategories(dataCategories.content);

		const prods = dataProducts.content.map((p) => {
			return {
				...p,
				familiaName: dataFamilies.content.find((f) => f.id === p.familiaId)
					.nombre,
				categoriaName: dataCategories.content.find(
					(c) => c.id === p.categoriaId
				).nombre
			};
		});

		const dataProductos = {
			columns: [
				{ label: 'Nombre', field: 'nombre' },
				{ label: 'Imagen', field: 'imagen' },
				{ label: 'Familia', field: 'familiaName' },
				{ label: 'Categoria', field: 'categoriaName' }
			],
			rows: prods
		};

		setProductos(prods);
		setData(dataProductos);

		setLoading(false);
	};
	useEffect(() => {
		getAll();
	}, []);
	return (
		<>
			{loading ? (
				<LoadingComponent
					title={'Cargando'}
					text={'Obteniendo los productos...'}
				/>
			) : (
				<div className="row">
					<div className="col">
						<MDBDataTableV5
							entries={5}
							bordered
							hover
							entriesOptions={[5, 20, 25]}
							data={data}
						/>
					</div>
				</div>
			)}
		</>
	);
};

export default TableProductsPagination;
