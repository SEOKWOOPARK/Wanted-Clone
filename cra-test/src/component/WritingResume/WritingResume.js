import React from 'react';
import './WritingResume.css';

function WritingResume(){
    return (
        <div className="writing_resume">
            <aside>
                <header>
                    <div className="aside_avatar">
                        <div>image 영역</div>
                        <div className="aside_me">
                            <div className="aside_me_name">SEOKWOO PARK</div>
                            <div className="aside_me_email">abcde@gmail.com</div>
                        </div>
                    </div>
                </header>
                <div className="matchup_status">
                    <div>
                        <span>원해요</span>
                        <strong>0</strong>
                    </div>
                    <div>
                        <span>열람</span>
                        <strong>0</strong>
                    </div>
                    <div>
                        <span>받은 제안</span>
                        <strong>0</strong>
                    </div>
                </div>
            </aside>
            <section>
                <div>
                    <div>
                        <header>
                            학교∙직장 등록
                        </header>
                        <div>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <label>
                                    
                                </label>
                            </div>
                        </div>
                        <footer>

                        </footer>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WritingResume;