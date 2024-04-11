// import logo from './logo.svg';
import './App.css';
import Class_NguyenTrucKien from './components/Class_NguyenTrucKien';
import Func_JSX_NguyenTrucKien from './components/Func_JSX_NguyenTrucKien';
function App() {
  return (
    <section classname="App">
      <h1>Demo JSX</h1>
      {/* function component demo */}
      <Func_JSX_NguyenTrucKien />
      <Func_JSX_NguyenTrucKien fullName="Nguyen Truc Kien" age="20" />

      <Class_NguyenTrucKien />
      <hr/>
      <Class_NguyenTrucKien info="Hoc ReactJS" time="11" />
    </section>
  );
}

export default App;
