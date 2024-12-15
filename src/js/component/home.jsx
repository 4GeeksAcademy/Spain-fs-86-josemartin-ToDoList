import React from "react";
import { useState } from "react";

const reyesList = [{
	who: "Hans",
	what: "termomix",
	where: "Saspikalea",
  },  {
	who: "My brother",
	what: "pan",
	where: "his new house",
  },  {
	who: "David",
	what: "Red Bull",
	where: "Benalmádena",
  }]
  
	
  
  function Home() {
  
	const [state, setState] = useState(reyesList)
	const [who, setWho] = useState("")
	const [what, setWhat] = useState("")
	const [where, setWhere] = useState("")
  
  
	const agregar = () => {
	  setState([...state, {who: who, what: what, where: where}])
	  setWho("")
	  setWhat("")
	  setWhere("")
	}

	const eliminarItem = (listItemIndex) => {
	  const list = state.filter((listItem, index) => {
		return index != listItemIndex
	  })
	  setState(list)
	}
  
	return (
	  <>
	  	<p>Dear Santa Claus...</p>
	   <input type="text" placeholder="who" value={who}  onChange={(e) => {
		 setWho(e.target.value)
	   }}></input>
	   <input type="text" placeholder="what" value={what} onChange={(e) => {
		setWhat(e.target.value)
	   }}></input>
	   <input type="text" placeholder="where" value={where} onChange={(e) => {
		setWhere(e.target.value)
	   }}></input>
	   <button onClick={agregar}>Add</button>
	   <ul>
		{state.map((item, index) => {
		  return (<>
			<li>
			  {item.who + " wants a " + item.what + " in " + item.where} <button onClick={() => eliminarItem(index)}>Remove</button> 
			</li>
		  </>)
		})}
	   </ul>
	   <p>{state.length + " item left"}</p>
	  </>
	)
  }
  
  export default Home;
