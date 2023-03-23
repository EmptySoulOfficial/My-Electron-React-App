import './App.css';
import pck from '../package.json'
import DemoContent from './components/content/DemoContent/DemoContent'
import TitleBar from './components/modules/TitleBar/TitleBar';

function App() {

  return (
    <div className="App">
      <TitleBar />
      <div className="App-Container">
        <DemoContent packageversion={pck.version} />
      </div>
    </div>
  );
}

export default App;
