import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, addTodoError, addTodoLoading, addTodoSuccess ,getTodoError,getTodoLoading, getTodoSuccess} from "../store/TodoStore/action";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";


export const Todos = () =>{
    useEffect(()=>{
        getData();
    },[])
    const getData = async() =>{
         dispatch(getTodoLoading())
         try{
              const {data} = await axios.get("http://localhost:3001/todo");
              dispatch(getTodoSuccess(data));
         }catch(err){
             dispatch(getTodoError(err))
    
         }

    }
    const dispatch = useDispatch();
    const {loading,error,data} = useSelector((store) => store.todos); //get todo from the store 
    const [text,setText] = useState("");

    return(
        <div>
         <input type = "text" placeholder = "add todo" onChange={e =>setText(e.target.value)}></input>
         <button onClick = {async()=>{
             dispatch(addTodoLoading());
             const payload = {
                 id : uuidv4(),
                 status : false,
                 title : text
             }
            //  dispatch(addTodo(payload))
            try{
                const {data} = await axios.post("http://localhost:3001/todo",payload)
                dispatch(addTodoSuccess(data));
            }
            catch(err){
               dispatch(addTodoError())
            }
            //
         }}>todo</button>
         {data.map((e,id) => (
             <div key = {id}>{e.title}</div>
         ))}

        </div>
    );
};


/*  
todo:- addtodo

1 :- action type
2 :- action
3 :- reducer
4 :- store
5 :- select data from data store and past the 
 

*/



