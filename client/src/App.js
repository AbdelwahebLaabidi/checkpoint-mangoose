import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavListe from './Components/NavListe';
import Home from './Components/Home';
import ListeContact from './Components/ListeContact';
import AddListe from './Components/AddListe';
import EditListe from './Components/EditListe';

function App() {
  return (
    <div>
          <NavListe/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ListeContact' element={<ListeContact/>}/>
        <Route path='/AddListe' element={<AddListe/>}/>
        <Route path='/EditListe/:id' element={<EditListe/>}/>
      </Routes>
    </div>
  );
}

export default App;
