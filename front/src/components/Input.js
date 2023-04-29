import React, {useState} from "react";
import { useEffect } from "react";

function Input(props){

    const [value, setValue] = useState(props.value || "")

    useEffect(()=>{
        setValue(props.value || "")
    },[props.value])

    useEffect(()=>{
        console.log(props.name,value)
    },[value])

    return(<div className="row">
    <div className="col"><label className="form-label">{props.label}</label></div>
    <div className="col"><input type={props.type ||"text"}className="form-control" onChange={(e)=>{setValue(e.target.value)}} value={value}/></div>
    </div>)
}

export default Input;