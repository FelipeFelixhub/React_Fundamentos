import "./App.css";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
  const nome = "Caroline";

  return (
    <div className="App">
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
