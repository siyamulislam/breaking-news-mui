
import './App.css';
import { Button, Fab, } from '@mui/material/'; 
import { Add } from '@mui/icons-material/'; 
import TopHeadline from './components/TopHeadline/TopHeadline';

function App() {
  return (
    <div className='App-header'>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Fab color="primary" aria-label="add">
      <Add />
      </Fab>

   <TopHeadline></TopHeadline>
  
      

    </div>
  );
}

export default App;
