import React,{useState} from "react";

const Search=({data,setAns})=>{
    const[input,setInput]=useState("");

    const formSubmit=(e,input)=>{
        
     e.preventDefault();
     const response=data.find((d)=>(d.word.toLowerCase())===(input.toLowerCase()))
     if(!response)
     {
        setAns("Word not found in the dictionary.");
     }
     else{
     setAns(response.meaning);
     }
    }
    return(<>
    <form onSubmit={(e)=>formSubmit(e,input)}>
    <input type="text" placeholder="Search for a word..." onChange={(e)=>setInput(e.target.value)} />
    <button type="submit">Search</button>
    </form>
    </>)
}
export default Search;