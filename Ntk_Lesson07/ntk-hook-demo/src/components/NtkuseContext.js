import React from 'react'
import NtkUseContext1 from './NtkUseContext1';
export const ThemeContext = createContext(); //Tạo ngữ cảnh để chia sẻ

export default function NtkuseContext() {
    // state
    const [theme,setTheme] = useState('red');

    // Hàm thay đổi theme
    const ntkHandleChange = ()=>{
        setTheme(theme==='red'?'blue':'red');
    }
  return (
    <ThemeContext.Provider value = {theme}>
        <div className='alert'>
            <h2>Demo UseContext</h2>
            <NtkUseContext1 />
            <button onClick={ntkHandleChange}>Change bgcolor</button>

        </div>
    </ThemeContext.Provider>
  )
}
