
import './App.css';
import {Data} from './Data';
import ClassComp from './ClassComp';

function App() {
  return (
    <div className="App">
      <Data name='Akbar' age='35' />
      <ClassComp value='this is value of class based function from prop'/>
    </div>
  );
}

export default App;
