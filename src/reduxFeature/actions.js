import {OUTPUT_RANDOM_ARRAY,RESET_RANDOM_ARRAY} from './types';

export function outputRandomArray(arr)
{
	return {
		type:OUTPUT_RANDOM_ARRAY,
		payload:arr
	};
};

export function resetRandomArray()
{
	return {
		type:RESET_RANDOM_ARRAY
	};
};