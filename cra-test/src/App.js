import {HashRouter, Route} from 'react-router-dom';
import Detail from './Detail';
import './App.css';
import Navigation from'./component/Navigation/Navigation.js';
import CardView from './component/CardView.js';
import CarouselContainer from './component/CarouselContainer.js';
import AddingResume from './component/profileResume/AddingResume.js';
import WritingResume from './component/WritingResume/WritingResume.js';
import applyedList from './component/ApplyingZone/ApplyingZone.js';
import ApplyingAndBookmark from './component/ApplyingAndBookmark/ApplyingAndBookmark.js';

function App() {
    console.log(applyedList);
    return (
        <div>            
            <HashRouter>
                <Navigation />
                <Route path="/" exact={true} component={CarouselContainer}/>
                <Route path="/" exact={true} component={AddingResume}/>
                <Route path="/" exact={true} component={CardView} />
                <Route path="/companyName/" component={Detail}/>
                <Route path="/resume" component={WritingResume} />
                <Route path="/apply_bookmark" component={ApplyingAndBookmark}/>
            </HashRouter>
        </div>
    );
}

export default App;
