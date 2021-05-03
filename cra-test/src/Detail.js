import React, {Component} from 'react';
import ApplyingZone from './component/ApplyingZone/ApplyingZone';

class Detail extends Component {
    componentDidMount(){
        const {location, history} = this.props;
        if (location.state === undefined){
            history.push('/');
        }
    }
    render(){
        const {location} = this.props;
        if (location.state){
            return (
                <div className="detail_page">
                    <div>
                        <div>
                            <img src={location.state.companyCover} alt=""/>
                        </div>
                        <div>
                            <h2>{location.state.companyName}</h2>
                            <br />
                            <h2>{location.state.role}</h2>
                            <br />
                            <h2>{location.state.compensation}</h2>
                            <br />
                            <h2>{location.state.detailPage.mainRole}</h2>
                        </div>
                        </div>
                    <div>
                        <ApplyingZone props={location.state}/>
                    </div>
                </div>
            );
        }else{
            return null;
        }	
    }
}

export default Detail;