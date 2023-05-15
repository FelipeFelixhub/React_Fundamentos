import "./App.css";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";

function App() {
  const nome = "Caroline";

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome="Felipe" />
      <SayMyName nome="Henrique" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Felipe"
        idade="31"
        profissao="Desenvolvedor Senior"
        foto="http://via.placeholder.com/150"
      />
    </div>
  );
  }

export default App;
