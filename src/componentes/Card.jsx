import React from "react";
import { useState } from "react";
import "./Card.css";

// hooks funcion que modifica el estado o  contenido de un componente
// se definenen antes del return y siempre empiezan con use... 
// dentro del usestate(initialstate) se pone el estado inicial

function Card(){
    const [likes,setLikes] = useState(0)  //devuelve arreglo con dos posiciones
    
    const giveLike = ()=>{
        setLikes(likes+1)

    }

    const [unlike,setUnlike] = useState(0)

    const giveUnlike =()=>{
        setUnlike(unlike+1)
    }
    
    const [Catch,setcatch] = useState(0)

    const giveCatch =()=>{
        setcatch(Catch+1)
    }

    const [love,setlove] = useState(0)

    const giveLove =()=>{
        setlove(love+1)
    }



    return <React.Fragment>

    <article className="card">
        {console.log(likes)}
        {console.log(unlike)}
        {console.log(Catch)}
        {console.log(love)}
        <img src="https://www.gaceta.unam.mx/wp-content/uploads/2020/10/cflodes.jpg" alt="" />
        <h1>Nombre planta</h1>
        <p> {likes} Me gusta </p>
        <button onClick={giveLike}> Me Gusta </button>
        <p> {unlike} No me gusta</p>
        <button onClick={giveUnlike}> No Me Gusta</button>
        <p> {Catch} Sorprendidos </p>
        <button onClick={giveCatch}> Me Sorprende</button>
        <p> {love} Me encanta</p>
        <button onClick={giveLove}> Me Encanta</button>

    </article>
    </React.Fragment> 
}

export default Card;