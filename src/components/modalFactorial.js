import React,{useState} from 'react';
import {Modal,Col,Row} from 'react-bootstrap';
import $ from 'jquery';

import StylesModal from '../styledComponents/StylesModal';

import header_Page from './header_page';

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
						{header_Page("h1","Result!")}
				    </Modal.Title>
			    </StylesModal>
		    </Modal.Header>
		    <Modal.Body>
		        <StylesModal>
					<Row className="first_row">
						<Col size="xs">i!</Col>
						<Col xs={10}>factorial</Col>
					</Row>
					{arr &&
						arr.map((item,index)=>
						(
							<Row className="other_row" key={index}>
								<Col size="xs">{item.f}!</Col>
								<Col xs={10}>{item.num}</Col>
							</Row>
						))
					}
				</StylesModal>
			</Modal.Body>
		</Modal>
	);
}

export default ModalFactorial;