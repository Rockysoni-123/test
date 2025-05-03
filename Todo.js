import React from "react";
import { useState } from "react";
import EachTodo from "./EachTodo";
function Todo(){

    const[todos,setTodos] =useState(
        [
            {
                title : "wakeup at 6 am ",
                completed : true,
                isEditing : false,
                editText : ""
            },
            {
                title : "jogging at 7 am ",
                completed : false,
                isEditing : false,
                editText : ""
            }
        ]
    )
    const [inputText,setInputText] = useState(""); //string
    const [updateTodoInputText, setUpdateTodoInputText] = useState("")
    const handleSubmit = () => {

        //todos --- grp of objs ---

        //const temp = {
          //  title : inputText,
            //completed : false
        //}

        if(inputText.trim() !== "") {
        const temp =[...todos, {
            title : inputText,
            completed : false,
            isEditing : false ,
            editText:""
        }]
        setTodos(temp);
        setInputText("")
        }
    }
    
    const handleChange = (index) => {

        const temp = [...todos];
        temp[index].completed =  !todos[index].completed

        setTodos(temp)

        //console.log(index,index)
    }
    const handleDelete = (index) => {
        const temp = [...todos];
        const filteredData = temp.filter((item,i) => i!==index)
       // console.log(filteredData,'filter')
        setTodos(filteredData)
    }

    //console.log(inputText,"todo")
    const handleEdit = (index) => {
        const temp = [...todos];
        // const filteredData = temp.map((item,i) => i== index ? {...item,isEditing : true } : {...item,isEditing:false});
        // setTodos(filteredData)
        temp[index].isEditing = true 
        setTodos(temp)

    }
    const handleUpdateTodoSubmit = (index) => {
        const temp = [...todos]
       // temp[index].title = updateTodoInputText
       temp[index].title = todos[index].editText      
        temp[index].isEditing = false
        setTodos(temp)
        setUpdateTodoInputText("")
    }
    
    console.log(todos,"todos")
    const handleUpdateInput = (e,index) => {
        const temp =[...todos];
        temp[index].editText=e.target.value;
        setTodos(temp)

    }

     return(
        <div>
            <h1> Todo Application</h1>
            <div>
            <input type="text" placeholder="enter the todo title" value={inputText}
            onChange={(e) =>  setInputText(e.target.value) }/>
            <button 
            onClick={(e) => handleSubmit()}
            >submit</button>
            </div>
            {
                todos.map((item,index) =>(
                     <div key={index}>
                        
                        <EachTodo item={item}
                        index={index}
                        handleUpdateInput={handleUpdateInput}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                        handleChange={handleChange}
                        handleUpdateTodoSubmit={handleUpdateTodoSubmit}
                        />
                    </div>

                ))
            }
        </div>
    )
}
export default Todo;