import React, {  FunctionComponent, useState } from 'react';

import styled from 'styled-components'





const GameArea:FunctionComponent=()=> {
    const [currentState,setCurrentState]=useState("")
    const [currentState1,setCurrentState1]=useState("")
    const [currentState2,setCurrentState2]=useState("")
    const [currentState3,setCurrentState3]=useState("")
    const [currentState4,setCurrentState4]=useState("")
    const [currentState5,setCurrentState5]=useState("")
    const [currentState6,setCurrentState6]=useState("")
    const [currentState7,setCurrentState7]=useState("")
    const [currentState8,setCurrentState8]=useState("")

const winnerarray=[
    [
        currentState,
        currentState1,
        currentState2,
    ],
    [
        currentState3,
        currentState4,
        currentState5,
    ],
    [
        currentState6,
        currentState7,
        currentState8,
    ],
    [
        currentState,
        currentState3,
        currentState6,
    ],
    [
        currentState1,
        currentState4,
        currentState7,
    ],
    [
        currentState2,
        currentState5,
        currentState8,
    ],
    [
        currentState,
        currentState4,
        currentState8,
    ],
    [
        currentState2,
        currentState4,
        currentState6,
    ]
]

const reset=()=>{
    setCurrentState("")
    setCurrentState1("")
    setCurrentState2("")
    setCurrentState3("")
    setCurrentState4("")
    setCurrentState5("")
    setCurrentState6("")
    setCurrentState7("")
    setCurrentState8("")
   
    
}
   
const lookingForWinner=(winArray:string[][])=>{

 
    winArray.map((item)=>{
        if(item.every(checkArrayx)===true){
            window.alert("Der Gewinner ist:Player1")
            console.log(item)
            reset()
           
        }
        if(item.every(checkArrayo)===true){
            window.alert("Der Gewinner ist:Player2")
            reset()
        }
    })
    function checkArrayx(inarray:string){
        return inarray==="x"
    }
    function checkArrayo(inarray:string){
        return inarray==="o"
    }

}



let avatar:string=""

lookingForWinner(winnerarray)
const getCurrentState=(avatar:string,setCurrentState:Function, currentState:string)=>{
   
    const playing=document.getElementById("player")
    if(currentState===""){
        if(playing?.innerText==="Player1"){
            avatar="x"
            playing.innerText="Player2"
        }else if(playing?.innerText==="Player2"){
            avatar="o"
            playing.innerText="Player1"
            
        }
        setCurrentState(avatar)
       
    }
    
   
    

}

  return (
   <GameField>
       <WhoPlay id="player">Player1</WhoPlay>
       <PlayRow id="Firstrow">
            <PlayField  onClick={()=>getCurrentState(avatar,setCurrentState,currentState)}>{currentState}</PlayField>
            <PlayField onClick={()=>getCurrentState(avatar,setCurrentState1,currentState1)}>{currentState1}</PlayField>
            <PlayField onClick={()=>getCurrentState(avatar,setCurrentState2,currentState2)}>{currentState2}</PlayField>
       </PlayRow>
       <PlayRow id="Secondrow">
            <PlayField onClick={()=>getCurrentState(avatar,setCurrentState3,currentState3)}>{currentState3}</PlayField>
            <PlayField onClick={()=>getCurrentState(avatar,setCurrentState4,currentState4)}>{currentState4}</PlayField>
            <PlayField onClick={()=>getCurrentState(avatar,setCurrentState5,currentState5)}>{currentState5}</PlayField>
       </PlayRow>
       <PlayRow id="Thirdrow">
            <PlayField onClick={()=>getCurrentState(avatar,setCurrentState6,currentState6)}>{currentState6}</PlayField>
            <PlayField onClick={()=>getCurrentState(avatar,setCurrentState7,currentState7)}>{currentState7}</PlayField>
            <PlayField onClick={()=>getCurrentState(avatar,setCurrentState8,currentState8)}>{currentState8}</PlayField>
       </PlayRow>
       <Reset onClick={reset}>Reset</Reset>
   </GameField>
   
  )}
  
export default GameArea;



  const  PlayField=styled.button`
    color:white;
    background-color: #2f8fe4;
    height: 100px;
    width: 100px;
    &:hover{
        background-color: #275e8e;
    }
    `
    
  const PlayRow=styled.div`
        display:flex;
    
    `
  const GameField=styled.section`
        
    `
const WhoPlay=styled.h1`
    color:red;

`
const Reset=styled.button`
background-color: blue;
color:white;
height:75px;
width:175px;
margin-top:30px;
&:hover{
    background-color:rgb(82, 82, 220);
}

`