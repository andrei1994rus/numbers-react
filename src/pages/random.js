import React from 'react';
import {useForm} from 'react-hook-form';
import {Form,Button} from 'react-bootstrap';
import {useDispatch} from "react-redux";

import StylesPage from '../styledComponents/StylesPage';

import AlertMessage from '../components/alertMessage';
import header_page from '../components/header_page';
import ModalRandom from '../components/modalRandom';

import withSuspense from '../hoc/withSuspense';

import {outputRandomArray} from '../reduxFeature/actions';

const ModalWithSuspense=withSuspense(ModalRandom);

const hint_count=`Count: input only number >0 and <300 without chars. This number must not start with zero.`;
const hint_range=`Range: input only number >0 without chars and with length not >21. 
This number must not start with zero.`;
const hint_checkbox="If you don't need input range, click checkbox.";
const hint_submit="After input data press button or click Enter on your keyboard.";

const Random=()=>
{
	const {register,handleSubmit,errors,setValue,watch}=useForm();

	const has_def_value=watch("has_def_value");
	const dispatch=useDispatch();

	const output_random=(count,range=3000)=>
	{
		let arr=[];
	    		
	    for(let i=0;i<count;i++)
	    {
	    	arr.push(Math.floor(Math.random()*(range-0)));
	    }
	    return arr;
	}

    const onSubmit=data=>
    {
    	console.group("onSubmit");
    
	    console.log(data);
	    
	    let arr=[];
	    arr=(has_def_value) ? output_random(data.input_random_count) 
	    : output_random(data.input_random_count,data.input_random_range);

	    setValue("input_random_count",'');
	    
	    if(!has_def_value)
	    {
			setValue("input_random_range",'');
	    }

	    console.log("array:",...arr);
	    dispatch(outputRandomArray(Array.from(arr)));
	    
		console.groupEnd();
    }

	return(
		<StylesPage>
			<header>{header_page("h1","Random.")}</header>
			<div className="div_alert">
				{errors.input_random_count &&
					<AlertMessage message={errors.input_random_count.message}/>}
			</div>
			<div className="div_alert">
				{errors.input_random_range &&
					<AlertMessage message={errors.input_random_range.message}/>}
			</div>
			
			<div>
				<ModalWithSuspense/>
			</div>
			
			<Form className="form" onSubmit={handleSubmit(onSubmit)}>
				<Form.Control id="random_count" type="text" placeholder="input count" name="input_random_count" 
					ref={register(
						{
							required:"Count is required",
							max:
							{
								value:300,
								message:"Max value of count is 300"
							},
		                 	pattern:
		                	{
			                    value:/^[1-9]{1}[0-9]*$/i,
			                    message:"Count must be only number >0 without chars and mustn't start with zero"
		                  	}
		                })}/>
				
				<div>
					<Form.Check id="chb" name="has_def_value" label="Default value 3000" ref={register}/>
				</div>
				
	    		
	            {(!has_def_value) &&
	            	<Form.Control id="random_range" type="text" placeholder="input range" name="input_random_range" 
					ref={register(
						{
							required:"Range is required",
							maxLength:
							{
								value:21,
								message:"Length of range value must be not >21"
							},
		                 	pattern:
		                	{
			                    value:/^[1-9]{1}[0-9]*$/i,
			                    message:"Range must be only number >0 without chars and mustn't start with zero"
		                  	}
		                })}/>
	            }
	            <div>
	            	<Button id="submit" variant="primary" type="submit">Submit</Button>
	            </div>	
	            
	            <div className="div_hint">
	            	<Form.Text>{hint_count}</Form.Text> 
	            </div>
	            <div className="div_hint">
	            	<Form.Text>{hint_range}</Form.Text>
	            </div>
	            <div className="div_hint">
	            	<Form.Text>{hint_checkbox}</Form.Text>
	            </div>
	            <div className="div_hint">
	            	<Form.Text>{hint_submit}</Form.Text>
	            </div>

            </Form>
		</StylesPage> 
	);
}

export default Random;