import React, {useState} from 'react'
import {  FormControl, InputGroup } from "react-bootstrap";
function Todoform() {
    const [input, setInput] = useState('');

//handle chnge to permit the writing in the input
    const handleChange =e =>{
        setInput(e.target.value);
    };

    const handlesubmit =e => {
        e.preventDefault();
        //setInput=('');   if i press add field will be cleared
    };
    return (
        // we use handle submit to prevent our app from refreshing everytime we press add
<form className='todo-form' onSubmit={handlesubmit}>
    <input 
    type='text'
    placeholder='Add a To Do '
    value ={input}
    name='text'
    className='todo-input'
    onChange={handleChange}

    />
    <button className='todo-button'>ADD </button>

</form>


    )
}

export default Todoform
