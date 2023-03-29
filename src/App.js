import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import './Style.css';
import api from "./Services/Api";


function App() {

  const [input,setInput] = useState('')
  const [cep, setCep] = useState({})

  const Search = async() => {
    //01310930/json/

    if(input === ''){ alert('You not typing nothing')
  return;
  }
  try{
    const response = await api.get(`${input}/json`)
    setCep(response.data)
    setInput('')
    
  }catch{
    alert('Code not Valid!!')
    setInput('')
  }


  }


  return (
    <div className="container">
      <h1 className='title'>CEP BRAZIL</h1>
      <div className='containerInput'>
        <input type='text'
        placeholder='typing your code...'
        value={input}
        onChange={(e)=> {setInput(e.target.value)}}
        />
        <button className='buttonSearch' onClick={Search}>
      <FiSearch size={15} color='#000' />
    </button>
        </div>

        <main className="main">
          <h2> Code: {cep.cep}</h2>
          <span>City:{cep.localidade}</span>
          <span>Neighborhood:{cep.bairro}</span>
          <span>Adress: {cep.logradouro}</span>
          <span>DDD: {cep.ddd}</span>
        </main>

    </div>
  );
}

export default App; 
