import React from 'react';
import './ListItem.css';
import {BsFillTrashFill} from 'react-icons/bs';
import FlipMove from 'react-flip-move';
import {useEffect,useState} from 'react';

 
function ListItem(props){

    const listItems = props.items.map(item => {
        return <div className="list" key={item._id}><p><input type="text" id={item._id} value={item.text}
        onChange ={(e) => {
            props.setUpdate(e.target.value, item._id)
        }} />
        
        <span><BsFillTrashFill className="trash" onClick={()=> props.deleteItem(item._id)} /></span></p></div>
        });

    return(
        <>
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
        </>        
    );
}

export default ListItem;