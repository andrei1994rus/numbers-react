import React from 'react';

import {Typography} from '@material-ui/core';

const link_text=(text)=>
(
	<span>
		<Typography className="link" variant="caption">
			{text}
		</Typography>
	</span>
);


export default link_text;