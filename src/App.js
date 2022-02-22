/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import Main from './components/main/main.js';
import json from '../package.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main />
        <h3 className='version-box'>Version: {json.version}</h3>
      </header>
    </div>
  );
}

export default App;
