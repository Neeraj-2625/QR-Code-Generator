import { useState } from 'react'
import './App.css'

function App() {
  const [input,setInput] = useState('');
  const [isVisible,setIsVisible] = useState(false);

  const handleSubmit = () =>{
      if(input===''){
        alert("Please enter text");
        return;
      }
      setIsVisible(true);
  }



  return (
    <>
    <div className='w-full h-screen bg-custom-in flex flex-row min-h-screen justify-center items-center'>
      <div className='w-1/2 p-4 bg-custom-bg text-center text-custom-in rounded-lg flex flex-col justify-center items-center'>
        <h1 className='text-lg font-semibold '>Enter Your text or URL</h1>
        <div>
          <input className='mt-4 p-2 border-2 border-black rounded-lg text-custom-bg'  type="text" 
          placeholder='Enter text' onChange={(e)=>setInput(e.target.value)}/>
        </div>
        <div>
          {isVisible && <img className="mt-4 p-2 border-custom-bg rounded-lg" src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`} alt=""/>}
        </div>
        <div>
          <button className = "text-custom-bg bg-custom-in mt-4 b-8 p-3 text-custom- border-2 border-custom-bg rounded-lg" onClick={handleSubmit}>Generate QR Code</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
