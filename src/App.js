import logo from './logo.svg';
import './App.css';
import {Simpson} from "./components/Simpson/Simpson";

function App() {
  return (
    <div className="App">
        <Simpson name={"Homer"} surname={"Simpson"} img={"https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"}/>
        <Simpson name={"Marge"} surname={"Simpson"} img={"https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png"}/>
        <Simpson name={"Lisa"} surname={"Simpson"} img={"https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png"}/>
        <Simpson name={"Bart"} surname={"Simpson"} img={"https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"}/>
    </div>
  );
}

export default App;
