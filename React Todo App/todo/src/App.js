
import { useState } from 'react';
import './App.css';

function App() {
  const [görev ,setGörev]=useState([""])
  const [liste , setListe] =useState([])


  function ekleme(){

    const item = {id:Math.floor(Math.random()* 999), value:görev}
    setListe(eskiliste=>[...eskiliste , item])
    setGörev("");
  
  }

  function basSil(id){
   const yeniListe = liste.filter(item => item.id !== id)

   setListe(yeniListe)
  }
 
 
  

  return (
    <div className="App">
            <div>
                <h1>Yapılacak İşler</h1>
              

                <input className='int' onChange={(e)=>setGörev(e.target.value)}></input>
                <button className='btn' onClick={ekleme}>Ekleme Yap</button>
              
                  <ul>

                    {liste.map((item, index)=>{
                      return(
                        <li key={index} >
                            {item.value}<button className='btnSil' onClick={()=> basSil(item.id)}>
                                X

                            </button>
                        </li>
                      
                      
                      )})


                    }
                  </ul>
            </div>
    </div>
  );
}

export default App;
