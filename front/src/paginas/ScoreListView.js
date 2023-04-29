import React, { useEffect, useState} from "react";
import Table from "../components/Table";
import API from "../utils/API";
import Spinner from "../components/Spinner"
import Button from "../components/Button";

function ScoreListView(){

    const[scoreList, setScoreList] = useState([])
    const[isLoading, setLoading] = useState(false)
    const[message, setMessage] = useState("")

    const loadData = () =>{
        setLoading(true)
        setMessage("")
        API.call("scores/",(response)=>{
            console.log(response)
            setScoreList(response)
            setLoading(false)
        },
        (error)=>{
            setMessage("Error en el sistema")
            console.log(error)
            setLoading(false)
        }
        
        )
    }

    useEffect(()=> {
        loadData()
    },[])

    return(<div className="container">
    <h1>Lista de puntajes</h1>
    <Button onClick={loadData} type="primary">Refresh</Button>
    {message}
    {isLoading ? 
        <Spinner msg = "Loading..."/>: 
        <Table headers = {[
            {title: "User", key:"user.email"},
            {title: "Score", key: "score"}
        ]} data = {scoreList}/>}
    </div>)
}

export default ScoreListView;