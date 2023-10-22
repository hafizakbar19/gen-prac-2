
import './App.css';
import {Data} from './Data';
import ClassComp from './ClassComp';
import StateDemo from './StateDemo';
import DestructuringClassComp from './DestructuringClassComp';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import ListRender from './components/ListRender';

function App() {
  // const name = "Akb";
  // if(name === "Akbar"){
  //   return <Component1 />;
  // }else{
  //   return <Component2 />;
  // }
  return (
    <ListRender />
  //   <div className="App">
  //     <Data name='Akbar' age='35' />
  //     <ClassComp value='this is the value of class based function from props'/>
  //     <StateDemo value = "this is from state and props"/>
  //     <DestructuringClassComp value="this is the data from class props destructuring" />
  //   </div>
  );
}

export default App;
