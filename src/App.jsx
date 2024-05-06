import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar/Navbar'; 
import ItemlistContainer from './components/ItemListContainer/ItemlistContainer';
import Carrousel from './components/Carrousel/Carrousel';



function App() {
  return (
    <>
      <Navbar />
      <ItemlistContainer greeting = {'este es un mensaje'} />
      <Carrousel />
    </>
  );
}

export default App;

