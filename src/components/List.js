import Item from './Item'

function List() {
    return (
        <>
          <h1>Minha Lista</h1>  
          <ul>
            <Item marca="Ferrari" ano_lancamento ={1985}/>
            <Item marca ="Porsche" ano_lancamento ={2010}/>
            <Item marca ="VW" ano_lancamento ={2023}/>
            <Item marca="Chevrolet" ano_lancamento={1999}/>
            <Item/>
          </ul>
        </>
    )
}

export default List