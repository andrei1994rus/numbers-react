import React,{useState,useEffect} from 'react';
import {Modal,Col,Row} from 'react-bootstrap';
import {useSelector,useDispatch} from "react-redux";
import $ from 'jquery';

import StylesModal from '../styledComponents/StylesModal';

import headerPage from './headerPage';

import {resetRandomArray} from '../reduxFeature/actions';

const ModalRandom=()=>
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
	};

	$(window).on('load',()=>
    {
    	console.log("$(window).on(load) (for close modal)");
    	hide();
	});

	
	return (showModalRandom) ? 
	(
		<Modal show={showModalRandom} onHide={hide} size="lg" centered>
			<Modal.Header closeButton>
				<StylesModal>
					<Modal.Title id="title">
						{headerPage("Result!")}
				    </Modal.Title>
			    </StylesModal>
		    </Modal.Header>
		    <Modal.Body>
		        <StylesModal>
					<Row className="first_row">
						<Col size="xs">#</Col>
						<Col xs={9}>random number</Col>
					</Row>
					{array &&
						array.map((item,index)=>
						(
							<Row className="other_row" key={index}>
								<Col size="xs">{index+1}</Col>
								<Col xs={9}>{item}</Col>
							</Row>
						))
					}
				</StylesModal>
			</Modal.Body>
		</Modal>
	) : <div></div>;
}

export default ModalRandom;