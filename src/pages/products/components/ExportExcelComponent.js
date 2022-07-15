import React from 'react';
import ReactExport from 'react-export-excel';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportExcelComponent = (props) => {
	let { productos, families } = props;

	productos = productos.map((p) => {
		const familyFound = families.find((f) => {
			if (f.id === p.familiaId) {
				return f;
			}
		});
		console.log(familyFound);

		return {
			...p,
			family_name: familyFound.nombre
		};
	});

	console.log(productos);

	return (
		<ExcelFile
			element={
				<button className="btn btn-primary me-2">
					<i className="fa-solid fa-file-excel"></i>
					Exportar a excel
				</button>
			}
		>
			<ExcelSheet data={productos} name="Productos">
				<ExcelColumn label="Id" value="id" />
				<ExcelColumn label="Código" value="codigo" />
				<ExcelColumn label="Nombre" value="nombre" />
				<ExcelColumn
					label="Estado"
					value={(prod) => (prod.estado ? 'Activo' : 'Inactivo')}
				/>
				<ExcelColumn label="Familia" value="family_name" />
				<ExcelColumn label="Imagen" value="imagen" />
			</ExcelSheet>
			{/* <ExcelSheet data={dataSet2} name="Leaves">
				<ExcelColumn label="Name" value="name" />
				<ExcelColumn label="Total Leaves" value="total" />
				<ExcelColumn label="Remaining Leaves" value="remaining" />
			</ExcelSheet> */}
		</ExcelFile>
	);
};

export default ExportExcelComponent;
