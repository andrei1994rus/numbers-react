import {useForm} from 'react-hook-form';
import React,{useState,useMemo,lazy} from 'react';
import {Form} from 'react-bootstrap';

import header_page from '../components/header_page';
import AlertMessage from '../components/alertMessage';

import StylesPage from '../styledComponents/StylesPage';

import withSuspense from '../hoc/withSuspense';

const hint=`Input only number >0 and <171 without chars. This number must not start with zero. 
After input press Enter on your keyboard.`;

const ModalFactorial=lazy(()=>import('../components/modalFactorial'));

const ModalWithSuspense=withSuspense(ModalFactorial);

const Factorial=()=>
{
	const getFactorial=(i)=>(i===1) ? 1 : (i*getFactorial(i-1));

	const find_fact=data=>
    {
    	console.group("find_fact");
    	let arr_fact=[];
    	for(let i=1;i<=data;i++)
    	{
    		let f=i,num=getFactorial(i);
	        let item_arr={f,num};
	        arr_fact.push(item_arr);
      	}
      	console.log("array:",...arr_fact);
      	localStorage.setItem('array_factorial',JSON.stringify(arr_fact));
      	console.groupEnd();
    }
	
	const {register,handleSubmit,errors,setValue}=useForm();
    const [isLoading,setIsLoading]=useState(false);

    const onSubmit=data=>
    {
    	console.group("onSubmit");
    	setIsLoading(true);
    	console.log(`isLoading:${isLoading}`);
	    console.log(data);
	    
	    find_fact(data.factorial);
	    
	    setValue("factorial","");
		
		setIsLoading(false);
		console.log(`isLoading:${isLoading}`);
		console.groupEnd();
    }

    const memoShowModal=useMemo(()=>
    {
    	console.group("memoShowModal=useMemo");
    	
    	if(!isLoading && localStorage.getItem('array_factorial'))
    	{
    		console.log("isLoading:"+isLoading);
    		console.log("localStorage.getItem(array_factorial):"+localStorage.getItem('array_factorial'));
    		console.groupEnd();
    		return true;
    	}

    	console.log("localStorage.getItem(array_factorial):"+localStorage.getItem('array_factorial'));
    	console.log("isLoading:"+isLoading);
    	console.groupEnd();
    	return false;
    },[isLoading]);

    return(
        <StylesPage>
        	<header>
        		{header_page("h1","Find Factorial.")}
        	</header>
            
            {errors.factorial && 
            	<div className="div_alert">
            		<AlertMessage message={errors.factorial.message}/>
            	</div>
            }

            <div>
            	{memoShowModal && <ModalWithSuspense/>}
            </div>
            
            
            <Form className="form" onSubmit={handleSubmit(onSubmit)}>
            	<Form.Control id="factorial_count" type="text" placeholder="input number to find factorial" name="factorial" 
            	ref={register({required:"Input is required",
	                	max:{
	                		value:170,
	                		message:"Max value must be >170 because that factorial of >170 is infinity"
	                	},
	                  	pattern:{
	                    value:/^[1-9]{1}[0-9]*$/i,
	                    message:"Input only number >0 without chars and mustn't start with zero"
	                  	}
	                })}				
                />
               
				<div className="div_hint">
					<Form.Text>{hint}</Form.Text>
				</div>
            </Form>

        </StylesPage>
    );
}

export default Factorial;