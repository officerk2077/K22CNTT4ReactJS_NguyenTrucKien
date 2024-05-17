import React, { useState } from 'react';

export default function NtkUseState() {
    const [count, setCount] = useState(0);
    //Mảng
    const [list, setList]= useState([1,9]);

    //Hàm xử lý sự kiện "Thêm ngẫu nhiên"
    const ntkHandleList= ()=>{
        //sinh ngẫu nhiên một giá trị số
        let num = parseInt(Math.random()*100);
        // Cập nhật lại state list
         setList([
        ...list,
        num
        ])
        // cách khác
        // let lst = list.push(num);
        // setList(lst);
    }
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 100)}>
                Click me
            </button>
            <hr/>
            <h3>list: {list.toString()}</h3>
            <button onClick={ntkHandleList}>Thêm ngẫu nhiên</button>
        </div>
    );
}
