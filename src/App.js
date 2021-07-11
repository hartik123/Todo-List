import axios from 'axios';
import React from 'react'
import {useState,useEffect} from 'react';
import ListItem from './ListItem';
import './App.css';


function App() {
    const [text,setText]=useState('');

    const [items,setItems]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const getData=async ()=>{
            const {data}=await axios.get('/task')
            console.log(data);
            setItems(data);
            setLoading(false)
        }
        getData();
    },[loading]);

    // functions
    const handleInput=(e)=>{
        setText(e.target.value);
    }

    const addItem=async (e)=>{
        e.preventDefault();
        console.log(text);
        setText('');
        const {data}=await axios.post('/task',{text})
        setLoading(true)
    }

    const deleteItem= async (id)=>{
        const {data}=await axios.delete(`/task/${id}`);
        setLoading(true)
    }
    const setUpdate=async (val,id)=>{
         console.log(`${val}`)
         const {data}=await axios.put(`/task/${id}`,{text:val});
         setLoading(true);
    }
    return (
        <div className="app">
            <header>
                <form id="to-do-form" onSubmit={(e)=>addItem(e)}>
                    <input type="text" placeholder="Enter text"
                    value={text} onChange={(e)=>handleInput(e)} />
                    <button type="submit">Add</button>
                </form>
            </header>
            <ListItem items={items} deleteItem = {deleteItem}
               setUpdate = {setUpdate}
            />
        </div>
        
    )
}

export default App
