import {HashRouter, Route} from 'react-router-dom';
import Detail from './Detail';
import './App.css';
import Navigation from'./component/navigation/navigation.js';
import CardView from './component/CardView.js';
import CarouselContainer from './component/CarouselContainer.js';
import AddingResume from './component/profileResume/AddingResume.js';
import WritingResume from './component/WritingResume/WritingResume.js';
import applyedList from './component/ApplyingZone/ApplyingZone.js';

function App() {
    console.log(applyedList);
    return (
        <div>
            <Navigation />
            <HashRouter>
                <Route path="/" exact={true} component={CarouselContainer}/>
                <Route path="/" exact={true} component={AddingResume}/>
                <Route path="/" exact={true} component={CardView} />
                <Route path="/companyName/:id" component={Detail}/>
                <Route path="/resume" component={WritingResume} />
            </HashRouter>
        </div>
    );
}

export default App;
