import React from 'react';
import './WritingResume.css';

function WritingResume(){
    return (
        <div className="writing_resume">
            <aside className="aside_profile">
                <header>
                    <div className="aside_avatar">
                        <div className="aside_image"></div>
                        <div className="aside_me">
                            <div className="aside_me_name">이 름</div>
                            <div className="aside_me_email">abcde@gmail.com</div>
                        </div>
                    </div>
                </header>
                <div className="matchup_status">
                    <div>
                        <div>원해요</div>
                        <div className="matchup_status_number">0</div>
                    </div>
                    <div>
                        <div>열람</div>
                        <div className="matchup_status_number">0</div>
                    </div>
                    <div>
                        <div>받은 제안</div>
                        <div className="matchup_status_number">0</div>
                    </div>
                </div>
            </aside>
            <section className="matchup_form">
                <div>
                    <div>
                        <header>
                            <h5>학교∙직장 등록</h5>
                        </header>
                        <div>
                            <div className="matchup_education">
                                <h6>학교</h6>
                                <input type="text" placeholder="학교를 입력하세요."/>
                            </div>
                            <div className="matchup_company">                                
                                <h6>직장</h6>
                                <div className="matchup_company_status">
                                    <input type="text" placeholder="직장을 입력하세요."/>
                                </div>
                            </div>
                            <label>
                                <div>간단 소개글</div>
                                <div className="matchup_fillout">직무 내용, 경험, 목표 등을 추가해서 더욱 멋진 소개글을 작성해보세요.</div>
                                <input type="text" id="simple_intro" />
                            </label>
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