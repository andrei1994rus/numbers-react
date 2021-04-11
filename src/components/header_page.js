import React from 'react';
import StylesHeader from '../styledComponents/StylesHeader';

const header_page=(variant,text)=>
(
	<StylesHeader>
		<h1 id="page_header">
			{text}		
		</h1>
	</StylesHeader>
)

export default header_page;
