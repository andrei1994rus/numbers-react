import React,{useState,useEffect} from 'react';
import {Modal,Col,Row} from 'react-bootstrap';
import {useSelector,useDispatch} from "react-redux";
import $ from 'jquery';

import StylesModal from '../styledComponents/StylesModal';

import header_Page from './header_page';

import {resetRandomArray} from '../reduxFeature/actions';

const ModalRandom=(arr)=>
{
	const [showModalRandom,setShowModalRandom]=useState(false);
	const array=useSelector(state=>state.array_redux.array_random);
	const dispatch=useDispatch();

	useEffect(()=>
	{
		if(array)
		{
			if(array.length>0)
			{
				console.log("array from Redux:",...array);
				setShowModalRandom(true);
			}
		}
	},[array]);

	const hide=()=>
	{
		setShowModalRandom(false);
		dispatch(resetRandomArray());
	}

	$(window).on('load',()=>
    {
    	console.log("$(window).on(load) (for close modal)");
    	hide();
	});

	
	return (showModalRandom) ? 
	(
		<Modal show={showModalRandom} onHide={hide} size="md" centered>
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
						<Col size="xs">#</Col>
						<Col xs={10}>random number</Col>
					</Row>
					{array &&
						array.map((item,index)=>
						(
							<Row className="other_row" key={index}>
								<Col size="xs">{index+1}</Col>
								<Col xs={10}>{item}</Col>
							</Row>
						))
					}
				</StylesModal>
			</Modal.Body>
		</Modal>
	) : <div></div>;
}

export default ModalRandom;