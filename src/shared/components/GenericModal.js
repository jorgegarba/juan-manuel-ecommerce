import React from 'react';
import { Modal } from 'react-bootstrap';

const GenericModal = (props) => {
	const { show, setShowModal, children, title } = props;
	return (
		<Modal
			size="lg"
			centered
			show={show}
			onHide={() => {
				setShowModal(false);
			}}
		>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{children}</Modal.Body>
			<Modal.Footer>
				<button
					className="btn btn-danger"
					onClick={() => {
						setShowModal(false);
					}}
				>
					Cerrar
				</button>
			</Modal.Footer>
		</Modal>
	);
};

export default GenericModal;
