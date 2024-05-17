import React from 'react'
import NtkUseState from './components/NtkUseState'
import NtkUseEffect from './components/NtkUseEffect'
import NtkuseContext from './components/NtkuseContext'
import './app.css'
export default function App() {
  return (
    <div className='container border mt-3'>
        <h1 className='text-center'>Nguyễn Trực Kiên - Hook</h1>
        <hr/>
        <NtkUseState />
        <hr/>
        <NtkUseEffect />
        <hr/>
        <NtkuseContext /> 
    </div>
  )
}