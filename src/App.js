import './App.css'
import HelloWorld from './components/HelloWord'


function App() {

  const name = 'Henrique'

  const newName = name.toUpperCase()

  function sum(a,b) {
    return a + b 
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Meu nome é {newName}</p>
      <p>soma: {sum(1,2)}</p>
      <img src={url} alt="Minha imagem" />
      <HelloWorld/>
    </div>
  )
  }

export default App;
