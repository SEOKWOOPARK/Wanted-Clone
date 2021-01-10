import './App.css';
import Navigation from'./component/navigation/navigation.js';
import AddingResume from './component/profileResume/addingResume.js'
import Predicting from './component/predicting/PredictingUpload';

function App() {
  return (
    <div>
			<Navigation />
			<AddingResume />
			<Predicting />
    </div>
  );
}

export default App;
