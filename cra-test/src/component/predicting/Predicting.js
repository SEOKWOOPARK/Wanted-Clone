import React, { useEffect } from 'react';
import PredictingUnit from './PredictingUnit';
import predict from '../imageFile/predicting.json'

function Predicting(){
	return (
		<div>
			<PredictingUnit props={predict}/>
		</div>
	);
}

export default Predicting