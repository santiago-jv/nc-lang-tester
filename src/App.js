 import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState("")
  const [result, setResult] = useState("")
  const handleInput = (event)=>{
    setData(event.target.value);
  }


  const sendData = async (event)=>{
    event.preventDefault();
    try {
      const response = await axios.post('https://nc-lang-compiler.herokuapp.com/',{
        code:data
      })
      
      setResult(response.data.result);
    } catch (error) {
      if(error.response){

        setResult(error.response.data.result);
      }

    }

    
  }
  return (
    <>
      <form onSubmit={sendData} className="App">
        <textarea onChange={handleInput}>
          
        </textarea>
        <button type="submit">Send</button>
      </form>
      <pre>{result}</pre>  
    </>
  );
}

export default App;
