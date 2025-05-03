import React from "react"
function EachTodo({item,index,
    handleUpdateInput,
    handleEdit,
    handleDelete,
    handleChange,
    handleUpdateTodoSubmit}) {
    return (

        <ul>
            <li>
                {
                    item.isEditing ? (
                        <>
                            <input type="text" placeholder='enter the todo'

                                onChange={(e) => handleUpdateInput(e, index)}

                                value={item.editText}
                            />
                        </>
                    ) :
                        (
                            <span className=""
                                style={{ textDecoration: item.completed ? "line-through" : "none" }}>{item.title}
                            </span>
                        )
                }

                {
                    item.isEditing ?
                        (
                            <button
                                onClick={() => handleUpdateTodoSubmit(index)}
                            >save</button>
                        ) :
                        (
                            <button
                                onClick={() => handleEdit(index)}
                            >edit</button>
                        )
                }
                <button
                    onClick={() => handleDelete(index)}
                >delete</button>
                <button
                    onClick={() => handleChange(index)}
                >{item.completed ? "undo" : "completed"}</button>
            </li>
        </ul>


    )
}
export default EachTodo;