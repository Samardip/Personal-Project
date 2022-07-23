import React from 'react'
import { TodoItem } from './TodoItem'
export default function Todos(props) {
    let TodosStyle={
        minHeight: "70vh"
    }
    return (
        <div className="container my-4" style={TodosStyle}>
            <h3 className="text-center my-3">Todos List</h3>
            {props.todos.length===0?"No Todos to Display" :
            props.todos.map((t)=>{
                return (
                <>
                <TodoItem todo={t} key={t.sno} onDelete={props.onDelete}/>
                <hr/>
                </>
                )
            })
            }
        </div>
    )
}
