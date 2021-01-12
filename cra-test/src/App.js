import './App.css';
import Navigation from'./component/navigation/navigation.js';
import AddingResume from './component/profileResume/addingResume.js';
import CardView from './component/CardView.js';

function App() {
  return (
    <div>
			<Navigation />
			<AddingResume />
			<CardView />
    </div>
  );
}

export default App;
