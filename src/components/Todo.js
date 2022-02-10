import React , {useState, useEffect} from 'react'
import Todoform from './Todoform'

function Todo() {

    const [edit,setEdit] = useState({

    })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
         console.log("res",res)

            return res.json();
    
        })           
        .then(data => {
            setEdit(data)
        });
    });
    return (
        <div>
           <Todoform/> 
        </div>
    )
}

export default Todo
