import React from 'react';
import './ListItem.css';
import {BsFillTrashFill} from 'react-icons/bs';
import FlipMove from 'react-flip-move';
 
function ListItem(props){
    const listItems = props.items.map(item => {
        return <div className="list" key={item.key}><p><input type="text" id={item.key} value={item.text}
        onChange ={(e) => {
            props.setUpdate(e.target.value, item.key)
        }} />
        
        <span><BsFillTrashFill className="trash" onClick={()=> props.deleteItem(item.key)} /></span></p></div>
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