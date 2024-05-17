import React, { useEffect, useState } from 'react'

export default function NtkUseEffect() {
    // state: count
    const [count, setCount] = useState(0);

    // Hàm xử lý sự kiện click me
    const ntkHandleClick = ()=>{
        setCount(prev => prev + 1)
    }
    // Sử dụng hàm useEffect để cập nhật lại title; có một tham số
    useEffect(()=>{
        document.title = `Nguyễn Trực Kiên: You clicked ${count} times`;
        console.log(`You clicked ${count} times`);
    });
    // useEffect: tham số thứ 2 là màng rỗng
    useEffect(()=>{
        console.log("Chạy lần đầu tiên - một lần");
    },[])

    // [deps]
    useEffect(()=>{
        console.log(`useEffect count click: `, count)
    },[count])
  return (
    <div>
      <h2>Demo - useEffect: You clicked {count} times</h2>
    <button onClick={ntkHandleClick}>
        Click me
    </button>
    </div>
  )
}
