import React from 'react';
import NewRecuritUpload from './NewRecruitUpload.js';
import newrecruit from '../jsonFile/newrecruit.json';
import './NewRecruit.css';

function NewRecruit(){
    return (
        <div className="predict_pass_expected">
            <h3 className="section_name">새로운 채용</h3>
            <NewRecuritUpload props={newrecruit}/>
        </div>
    );
}

export default NewRecruit;