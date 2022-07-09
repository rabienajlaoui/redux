import './App.css';
import Addtask from './component/Addtask';
import Listtask from './component/Listtask';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Addtask/>
      <Listtask/>
    </div>
  );
}

export default App;
