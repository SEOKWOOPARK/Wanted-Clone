import {HashRouter, Route} from 'react-router-dom';
import Detail from './Detail';
import './App.css';
import Navigation from'./component/navigation/navigation.js';
import AddingResume from './component/profileResume/addingResume.js';
import CardView from './component/CardView.js';


function App() {
  return (
    <div>
			<HashRouter>
				<Navigation />
				{/* <AddingResume /> */}
				{/* <CardView /> */}
				<Route path="/" exact={true} component={CardView} />
				<Route path="/companyName/:id" component={Detail}/>
			</HashRouter>
    </div>
  );
}

export default App;
