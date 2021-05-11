import React,{Suspense} from 'react';

import Loading from '../components/loading';

const withSuspense=Component=>props=>
{
	return(	
		<Suspense fallback={<Loading/>}>
			<Component {...props}/>
		</Suspense>
	);
}

export default withSuspense;