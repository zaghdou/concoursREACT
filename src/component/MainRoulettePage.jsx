import React from 'react'
import './RoulettePage.css'
import RoulettePage from './RoulettePage'
import { ContextProvider } from '../context/ContextProvider'


export const MainRoulettePage = ()=> {
  return (
    
    <ContextProvider>
        <RoulettePage />
    </ContextProvider>
  )
}
