import React, { useState } from 'react';
import './ApplyingZone.css'

function ApplyingZone({props}){
    const [apply, setApply] = useState(0);
    const [bookmark, setBookmark] = useState(0);

    return (
        <aside className="aside_area">
            <div className="aside_div">
                <header className="aside_header">
                    <div>
                    <h3>채용보상금</h3>
                    <div className="aside_compensation">
                        <ul>
                            <li>
                                <h4>추천인</h4>
                                <p><b>{props.compensation.slice(6)}</b></p>
                            </li>
                            <li>
                                <h4>지원자</h4>
                                <p><b>{props.compensation.slice(6)}</b></p>                
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="aside_button">
                        <button className="aisde_bookmark" onClick={(e) => alert('북마크에 저장되었습니다.')}>북마크하기</button>
                        <button className="aside_apply" onClick={(e) => alert('지원하기')}>지원하기</button>
                    </div>
                        
                </header>
            </div>
        </aside>
  );
}

export default ApplyingZone;