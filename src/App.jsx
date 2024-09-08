import './index.css'
import Header from './static/Header'
import Content from './component/Content'
import Subcontent from './component/subContent/Subcontent'
import { useState } from 'react'


function App() {
  const [isdark, setDark] = useState("")
  const [isToggle, setIsToggle] = useState(true)
  
  const handleToggle = () => {
    setDark(!isdark);
    console.log(isdark)

  }

  return (
    <>
      <div className='body' data-theme={isdark ? "dark": "light"}>
        <Header isToggle={isToggle} 
          setIsToggle={setIsToggle} 
          handleToggle={handleToggle}
          isdark={isdark}
          setDark={setDark}
         />
        <Content></Content>
        <Subcontent></Subcontent>
      </div>
      
    </>
  )
}

export default App
