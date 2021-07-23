import React, {useState} from 'react'
import data from './data'

function App() {
  const[count,setCount] = useState(0)
  const[text,setText] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if(count <= 0){
      amount = 1
    }
    if(count > 8){
      amount = 8
    }
    setText(data.slice(0,amount))
  }
  return (
    <section>
      <h1>Dummy Text Generator</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" value={count} id="amount" name="amount" onChange={(e)=>setCount(e.target.value)}></input>
        <button className="btn">Generate</button>
      </form>
      <div className="info">
        {text.map((item,index)=>{
          return <p key={index}>{item}</p>
        })}
      </div>
    </section>
  );
}

export default App;
