import {OUTPUT_RANDOM_ARRAY,RESET_RANDOM_ARRAY} from './types';

const default_state=
{
	array_random:[]
};

export default function reduxReducer(state=default_state,action)
{
	if(action.type===OUTPUT_RANDOM_ARRAY)
	{
		return {
			array_random:action.payload
		};
	}
	
	else if(action.type===RESET_RANDOM_ARRAY)
	{
		return default_state;
	}

	return state;
};