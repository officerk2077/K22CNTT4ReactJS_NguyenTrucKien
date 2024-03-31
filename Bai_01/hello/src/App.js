import logo from './logo.svg';
import './App.css';
import Tvc from './components/Tvc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <Tvc />
      <Tvc email="wwwkienmario123@gmail.com" phone="0363789548" />
      <Tvc email="admin@gmail.com" phone="123456789" company="CTY quang kien" />
    </div>
  );
}

export default App;
