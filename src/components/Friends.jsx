import React from "react";

function Friend(props){
    return (
        <>
        <div className="box">
        <div className="col-image">
        <img className="frd-image" src={props.img} alt={props.name} />
        </div>
        <div className="col-text">
        <h1>{props.name}</h1>
        <p ><strong>Age</strong> : {props.age}</p>
        <p><strong>Birthday</strong> : {props.birthday}</p>
        </div>

        </div>
        
        </>
    )
}
export default Friend;