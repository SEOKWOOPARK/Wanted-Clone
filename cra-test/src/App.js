import {HashRouter, Route} from 'react-router-dom';
import Detail from './Detail';
import './App.css';
import Navigation from'./component/navigation/navigation.js';
import CardView from './component/CardView.js';

function App() {
    return (
        <div>
            <Navigation />
            <HashRouter>
                <Route path="/" exact={true} component={CardView} />
                <Route path="/companyName/:id" component={Detail}/>
            </HashRouter>
        </div>
    );
}

export default App;
