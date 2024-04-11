
import './App.css';
import NTK_ClassComp from './components/NTK_ClassComp';
import NTK_FuncDemo from './components/NTK_FuncDemo';

function App() {

  // Khai bao bien doi tuong
  const users = {
    userName:"k22cnt4",
    password:"123456a@",
    firstName:"Nguyễn Trực",
    lastName:"Kiên",
  }

  // Khai báo đối tượng hàm
  function formatName(user){
    return <h2>xin chào, {user.firstName} {user.lastName}</h2>
  }
  return (
    <div className="App">
      {/* Bieu thuc JSX */}
      <div>
        <p> Fullname: {users.firstName} {users.lastName}</p>
        {formatName(users)}
      </div>

      {/* Sử dụng function component */}
      <div>
        <NTK_FuncDemo />
        {/* sử dụng Func_Comp có props */}
        <NTK_FuncDemo userName="NTK" fullName="Nguyễn Trực Kiên" age="20" />
      </div>

      {/* Sử dụng class component */}
      <div>
        {/* dùng không sử dụng props */}
        <NTK_ClassComp />
        {/* Sử dụng props */}
        <NTK_ClassComp company="Fit-NTU - K22CNT4" course="ReactJS" />
        <NTK_ClassComp company="Fit-NTU - K22CNT5" course="ReactJS" />
        <NTK_ClassComp company="Fit-NTU - K22CNT6" course="ReactJS" />
        <NTK_ClassComp company="Fit-NTU - K22CNT7" course="ReactJS" />
      </div>

    </div>
  );
}

export default App;
