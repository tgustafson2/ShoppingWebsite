import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "./ItemCard.css"


function ItemCard({id, title, price, imageUrl, addToCart}){
    const [count, setCount] = useState(1);
    const incrmentCount = () => {
        if(isNaN(parseInt(count))){
            setCount(1);
        } else {
            setCount(() => parseInt(count)+1);
        }
        
    }
    const decrmentCount = () =>{
        if(isNaN(parseInt(count))){
            setCount(1);
        } else if(count>1) {
            setCount(() => parseInt(count)-1);
        }
    }
    const updateCount = (val) =>{
        if((!isNaN(parseInt(val)) && parseInt(val)>0)||val===""){
            setCount(val); 
        }
             
    }

    const checkIfAdd = () =>{
        if(count!==""){
            addToCart(id,title, price, imageUrl, count);
            setCount(1);
        }
    }
    return(<div className="item-card">
        <div className="image-row">
            <img src={imageUrl} />
        </div>
        <div className="item-info">
            <div className="item-title">{title}</div>
            <div className="item-price">{price}</div>
        </div>
        <div className="item-buy">
            <button onClick={()=>incrmentCount()}><Plus /></button>
            <input type="number" value={count} onChange={(e)=>updateCount(e.target.value)}></input>
            <button onClick={()=>decrmentCount()}><Minus /></button>
            <button onClick={()=>checkIfAdd()}>Add to cart</button>
        </div>
    </div>)
}

export default ItemCard;