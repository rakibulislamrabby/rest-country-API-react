import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Countries from './Component/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      {/* <LoadCountries></LoadCountries> */}
    </div>
  );
}

export default App;
