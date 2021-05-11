import React,{useState} from 'react';
import {Modal,Col,Row} from 'react-bootstrap';
import $ from 'jquery';

import StylesModal from '../styledComponents/StylesModal';

import headerPage from './headerPage';

const ModalFactorial=()=>
{
	const [showModal,setShowModal]=useState(true);

	const arr=JSON.parse(localStorage.getItem('array_factorial'));

	$(window).on('load',()=>
    {
		console.log("$(window).on(load) (for close modal)");
		hide.call();
	});

	const hide=()=>
	{
		localStorage.removeItem('array_factorial');
		setShowModal(false);
	}

	return(
		<Modal show={showModal} onHide={hide} size="lg" centered>
			<Modal.Header closeButton>
				<StylesModal>
					<Modal.Title id="title">
						{headerPage("Result!")}
				    </Modal.Title>
			    </StylesModal>
		    </Modal.Header>
		    <Modal.Body>
		        <StylesModal>
					<Row className="first_row_fact">
						<Col size="xs">i!</Col>
						<Col xs={9}>factorial</Col>
					</Row>
					{arr &&
						arr.map((item,index)=>
						(
							<Row className="other_row_fact" key={index}>
								<Col size="xs">{item.f}!</Col>
								<Col xs={9}>{item.num}</Col>
							</Row>
						))
					}
				</StylesModal>
			</Modal.Body>
		</Modal>
	);
}

export default ModalFactorial;