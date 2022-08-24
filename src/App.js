import logo from './assets/logo.svg';
import './App.css';
import Card from './componentes/Card';

function App() {
  return (
    <div className="App">
     <p className="parrafo"> Bienvenido a la Floreria </p>
     
     <section className='cards'>
     <Card></Card>
     <Card></Card>
     <Card></Card>
    </section>
    
    </div>
  );
}

export default App;
