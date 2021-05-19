import React from 'react';
import './ApplyingAndBookmark.css';
import {applyedList, bookmarkedList} from '../ApplyingZone/ApplyingZone.js';

function CardViewFunc(array){
    return(
        array.map((v, index) => {
            return(
                <li key={index}>
                    <div className="predict_area">
                        <img
                            className="image" 
                            src={v.companyCover}
                            alt={v.index} 
                            width="255px" 
                            height="auto" 
                        />
                        <div className="predict_body">
                            <div className="job_role">{v.role}</div>
                            <div className="job_company_name">{v.companyName}</div>
                            <div className="job_location">{v.location}</div>
                            <div className="job_compensation">{v.compensation}</div>
                        </div>
                    </div>
                </li>
            )
        })
    )
}


function ApplyingAndBookmark(){
    return (
        <div className="apply_bookmark_page">
            <h4>지원 현황과 북마크 상태를 볼 수 있는 페이지입니다.</h4>
            <div className="apply_company_list">
                <h5>지원한 회사 영역입니다.</h5>
                <ul className="apply_company">
                    {CardViewFunc(applyedList)}
                </ul>
            </div>
            <div className="bookmark_company_list">
                <h5>북마크 회사 영역입니다.</h5> 
                <ul className="bookmark_company">
                    {CardViewFunc(bookmarkedList)}
                </ul>
            </div>
        </div>
	);
}

export default ApplyingAndBookmark;