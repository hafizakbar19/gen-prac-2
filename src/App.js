
import './App.css';
import {Data} from './Data';
import ClassComp from './ClassComp';
import StateDemo from './StateDemo';
import DestructuringClassComp from './DestructuringClassComp';

function App() {
  return (
    <div className="App">
      <Data name='Akbar' age='35' />
      <ClassComp value='this is the value of class based function from props'/>
      <StateDemo value = "this is from state and props"/>
      <DestructuringClassComp value="this is the data from class prop destructuring" />
    </div>
  );
}

export default App;
