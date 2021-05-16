import React from 'react';
import './resume.css';
import {Link} from 'react-router-dom';

function AddingResume(){
	return (
        <div>
            {/* <HashRouter>
                <Route path="/resume" component={WritingResume} />
            </HashRouter> */}
            <div className="adding_resume">
                <p className="comment">프로필에 이력서 추가하고, 인사담당자에게 직접 면접 제안 받으세요.</p>
                <Link to="/resume">
                    <button type="button" className="btn">이력서 강화하기</button>
                </Link>    
            </div>
        </div>        
	);
}

export default AddingResume;