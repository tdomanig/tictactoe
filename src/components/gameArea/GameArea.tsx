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

const winnerarray:object[]=[
    {
        state0:currentState,
        state1:currentState1,
        state2:currentState2,
    },
    {
        state0:currentState3,
        state1:currentState4,
        state2:currentState5,
    },
    {
        state0:currentState6,
        state1:currentState7,
        state2:currentState8,
    },
    {
        state0:currentState,
        state1:currentState3,
        state2:currentState6,
    },
    {
        state0:currentState1,
        state1:currentState4,
        state2:currentState7,
    },
    {
        state0:currentState2,
        state1:currentState5,
        state2:currentState8,
    },
    {
        state0:currentState,
        state1:currentState4,
        state2:currentState8,
    },
    {
        state0:currentState2,
        state1:currentState4,
        state2:currentState6,
    }
]
   
const lookingForWinner=(winArray:object[])=>{

   winArray.map((object)=>{
       if(object.state0)
   })

}



let avatar:string=""
let player:number=1

const getCurrentState=(player:number,avatar:string,setCurrentState:Function, currentState:string)=>{
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
        lookingForWinner(winnerarray)
    }
    
    
    

}
 
  return (
   <GameField>
       <WhoPlay id="player">Player1</WhoPlay>
       <PlayRow id="Firstrow">
            <PlayField  onClick={()=>getCurrentState(player,avatar,setCurrentState,currentState)}>{currentState}</PlayField>
            <PlayField onClick={()=>getCurrentState(player,avatar,setCurrentState1,currentState1)}>{currentState1}</PlayField>
            <PlayField onClick={()=>getCurrentState(player,avatar,setCurrentState2,currentState2)}>{currentState2}</PlayField>
       </PlayRow>
       <PlayRow id="Secondrow">
            <PlayField onClick={()=>getCurrentState(player,avatar,setCurrentState3,currentState3)}>{currentState3}</PlayField>
            <PlayField onClick={()=>getCurrentState(player,avatar,setCurrentState4,currentState4)}>{currentState4}</PlayField>
            <PlayField onClick={()=>getCurrentState(player,avatar,setCurrentState5,currentState5)}>{currentState5}</PlayField>
       </PlayRow>
       <PlayRow id="Thirdrow">
            <PlayField onClick={()=>getCurrentState(player,avatar,setCurrentState6,currentState6)}>{currentState6}</PlayField>
            <PlayField onClick={()=>getCurrentState(player,avatar,setCurrentState7,currentState7)}>{currentState7}</PlayField>
            <PlayField onClick={()=>getCurrentState(player,avatar,setCurrentState8,currentState8)}>{currentState8}</PlayField>
       </PlayRow>
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