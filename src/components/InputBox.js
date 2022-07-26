import React from 'react';
import { Link } from "react-router-dom";
function InputBox(props) {
  let [searchText, setSearchText] = React.useState("");
  let [numberOfItems, setNumberOfItems] = React.useState(9);
  const handleText = (e) => {
    
    setSearchText(e.target.value);
    
    props.setGlobalSearchText(e.target.value);
  }
  const handleCount = (e) => {
    setNumberOfItems(e.target.value);
    props.setGlobalCount(e.target.value);
  }
  return (
    <>
      {/* i will work on new later*/}
    
        <Link to="/new"
        className="bg-blue-500 hover:bg-blue-700 text-white 
        font-bold py-2 px-4 rounded"
        >Search</Link>
      <input className="border rounded py-1 px-1 mx-2 font-bold"
        type="text" value={searchText} onChange={handleText}></input>
      <input type="number" className="border rounded py-1 px-1 mx-2 font-bold"
        value={numberOfItems} onChange={handleCount}></input>
    </>
  )
}

export default InputBox