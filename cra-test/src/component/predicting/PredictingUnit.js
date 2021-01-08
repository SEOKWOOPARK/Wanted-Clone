import React from 'react';

function Predicting({props}){
	return (
		<div className="predicting_pass">
			<img src={props.companyCover} alt={props.originalPage} />
			<h2 className="role">{props.role}</h2>
			<h3 className="company_name">{props.companyName}</h3>
			<h3 className="location">{props.location}</h3>
			<h3 className="compensation">{props.compensation}</h3>
		</div>
	);
}

export default Predicting;