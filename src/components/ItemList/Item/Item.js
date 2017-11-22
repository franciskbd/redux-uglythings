import React from "react";
import "./Item.css";

let Item = (props) => (

  <div className="item">
    <p>{props.data.title}</p>
    <p>{props.data.description}</p>
    <div className= "img" style={{backgroundImage: `url(${props.data.url})`}}>
    </div>
</div>
)
export default Item;
