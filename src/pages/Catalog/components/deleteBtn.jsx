import { useContext, useEffect, useState } from "react";
import useItemDelete from "../../../hooks/useItemDelete";

// context
import axios from "axios";

import { ItemContext } from "../context/ItemContext";
import { PendingContext } from "../../../context/PendingContext";

const DeleteBtn = (props) => {

    const [item,setItem,items,setNewItems] = useContext(ItemContext); 

    const refreshItemList = () => {
        
        let cloneList = [...items];

        cloneList = cloneList.filter((valid_item) => valid_item != props.item);

        setNewItems(cloneList);

    }

    const {deleteReq} = useItemDelete(props.item.id,refreshItemList);

    return (
        
        <button className="del-btn util-btn" onClick={()=> deleteReq()}><i class="fa-regular fa-trash-can" style={{"color": "#ffffff"}}></i> Delete</button>
    
    )
}

export default DeleteBtn;