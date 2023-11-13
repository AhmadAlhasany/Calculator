import React from 'react';
import Grid from './Components/Grid';
import Window from './Components/Window';
import Header from './Components/Header';

function filter (e){
  let temp = e.split('');
  for(let i = 0 ; i < e.length; i++)
    if(e[i] === '*')
      temp[i] = 'x';
    return temp.join('')
}

function App() {
  const [theme, setTheme] = React.useState(1);
  const [exp, setExp] = React.useState('')

  return (
    <div className={`App${theme === 1 ? '1' : theme === 2 ? '2' : '3'} common rf`}>
      <div className='calc'>
        <Header setTheme = {setTheme} theme = {theme}/>
        <Window value ={filter(exp)}/>
        <Grid exp = {exp} setExp = {setExp}/>
      </div>
    </div>
  );
}

export default App;