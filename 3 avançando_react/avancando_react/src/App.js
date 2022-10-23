import './App.css';
import Kimetsu from './assets/kimetsu.jpg'

function App() {
  return (
    <div className="App">
      <h1 className="estilo_h1">Avançando em React</h1>
      {/* Imagem em public */}
      <div className="teste">
        <p className="nome_anime">Fullmetal Alchemist</p>
        <img src="/fullmetal.jpg" alt="fullmetal" />
      </div>
      {/* Imagem em assets */}
      <div>
        <p className="nome_anime">Kimetsu no Yaiba</p>
        <img src={Kimetsu} alt="Kimetsu" />
      </div>
    </div>
  );
}

export default App;
