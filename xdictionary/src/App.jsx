
import './App.css'
import Search from './Dictionary/Search';
import Response from './Dictionary/Response';
import React,{useState} from 'react';
const dictionaryData=
[
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
]

function App() {
  const[data,setData]=useState(dictionaryData);
  const[ans,setAns]=useState("");
 return (
    <>
     <h1>Dictionary App</h1>
     <Search data={data} setAns={setAns}/>
     <Response ans={ans}/>
    </>
  )
}

export default App
