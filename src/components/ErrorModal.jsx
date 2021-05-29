import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ErrorModal.css';

const ErrorModal = ({ error }) => {
	const [close, setClose] = useState(true);

	return (
		<Modal size='lg' show={close} centered onHide={() => setClose(false)}>
			<Modal.Header className='modal__header'>
				<Modal.Title className='modal__title'>{error.name}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h2 className='modal__h2'>Ooops!</h2>

				<p className='modal__p'>Something went wrong. {error.message}</p>
				<div style={{ textAlign: 'center' }}>
					<Button
						className='modal__button'
						size='lg'
						variant='dark'
						onClick={() => setClose(false)}>
						Try Again
					</Button>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default ErrorModal;
