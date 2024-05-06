import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar/Navbar'; 
import ItemlistContainer from './components/ItemListContainer/ItemlistContainer';



function App() {
  return (
    <>
      <Navbar />
      <ItemlistContainer greeting = {'este es un mensaje'} />
    </>
  );
}

export default App;

