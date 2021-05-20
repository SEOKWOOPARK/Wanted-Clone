import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';

function navigation(){
    return (
        <div className="navigation_tab">
            <h2 className="company_name">Wanted</h2>
            <nav>
                <ul>
                    <li>탐색</li>
                    <li>직군별 연봉</li>
                    <li>이력서</li>
                    <li>커리어 성장</li>
                    <li>매치업</li>
                    <li>프리랜서</li>
                </ul>
            </nav>
            <Link to="/apply_bookmark">
                
                    <button type="button" className="apply_bookmark">
                        지원 및 북마크
                    </button>
                
            </Link>
        </div>
    );
}

export default navigation;