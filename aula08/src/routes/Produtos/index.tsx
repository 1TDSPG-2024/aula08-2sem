import { Link } from "react-router-dom";
import { listaProdutos } from "../../listaProdutos";
import { MinhaTabela }



export default function Produtos() {

  //MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "PRODUTOS";

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <MinhaTabela>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Descrição</th>
            <th>Imagem</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {listaProdutos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td>{produto.desc}</td>
              <td><img src={produto.imagem} alt={produto.nome} /></td>
              <td><Link to={`/editar/produtos/${produto.id}`}>Editar</Link></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6}>Total de produtos: <span>{listaProdutos.length}</span></td>
          </tr>
        </tfoot>
      </MinhaTabela>
    </div>
  );
}

export const MinhaTabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;

&  
thead{
    background-color: #009879;
  color: #6f0f0f;
}

&
th{
    padding: 12px 15px;
  border: 1px solid #dddddd;
}
&
tr{
    &:nth-child(even) {
        background-color: #f3f3f3;
      }
      &:nth-child(odd) {
        background-color: #ffffff;
      }
}
&
td{
    padding: 12px 15px;
  border: 1px solid #dddddd;
}

`