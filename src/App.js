import React from 'react'
import { useEffect } from 'react'
import RegForm from './component/RegForm'
const App = () => {
  useEffect(() => {
    document.title = "RegForm";
  }, []);
  return (
    <>
      <RegForm/>
    </>
  )
}

export default App
