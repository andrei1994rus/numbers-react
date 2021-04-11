import icon from '../svg/loading.svg';
import React from 'react';

import StylesLoading from '../styledComponents/StylesLoading';

const Loading=()=>
{
	return(
		<StylesLoading> 
			<img src={icon} className="icon" alt="icon" />
		</StylesLoading>
	);
}

export default Loading;