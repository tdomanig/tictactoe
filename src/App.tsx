import React from 'react';
import GameArea from './components/gameArea/GameArea'
import styled from 'styled-components'


function App() {
  return (
   <AppContainer>
     <GameArea/>

  
   </AppContainer>
  )}

export default App;

const AppContainer=styled.main`
  width:screen;
  height:screen;
  display:flex;
  justify-content: center;
`