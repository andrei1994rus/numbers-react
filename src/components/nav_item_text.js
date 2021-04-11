import React from 'react';

import {Typography} from '@material-ui/core';

const nav_item_text=(text)=>
(
	<span>
		<Typography className="nav_item" variant="caption">
			{text}
		</Typography>
	</span>
	
)

export default nav_item_text;