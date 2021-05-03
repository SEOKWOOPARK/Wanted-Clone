import React, { useState } from 'react';
import './ApplyingZone.css'

function ApplyingZone({props}){
    // const [apply, setApply] = useState(0);

    return (
    <aside className="aside_area">
        <div className="aside_div">
            <header className="aside_header">
                <div>
                <div>채용보상금</div>
                <div className="aside_compensation">
                    <ul>
                        <li>
                            <h4>추천인</h4>
                            <p>{props.compensation.slice(6)}</p>
                        </li>
                        <li>
                            <h4>지원자</h4>
                            <p>{props.compensation.slice(6)}</p>                
                        </li>
                    </ul>
              </div>
                </div>
          <button onClick={(e) => alert('북마크')}>북마크하기</button>
          <button onClick={(e) => alert('지원')}>지원자</button>
					
            </header>
        </div>
    </aside>
  );
}

export default ApplyingZone;