//import logo from './logo.svg';
import Homepage from './pages/Homepage';
import {data} from "./helpers/data";
import './styles/style.css';


function App() {
  
  
  return (
    <div className="App">
      <Homepage data={data} />
    </div>
  );
}

export default App;
