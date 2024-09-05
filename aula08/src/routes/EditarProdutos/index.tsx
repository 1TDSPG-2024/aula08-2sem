import { useParams } from "react-router-dom";
import { Lista } from "../../types";
import { useEffect, useState } from "react";

export default function EditarProdutos(){

      //MUDANDO O TÍTULO DA PÁGINA!!!
      document.title = "EDITAR PRODUTOS";

      //Realizando um destructuring para recuperar o parâmetro que foi passado na rota:
      //Ex: Se a rota criada foi: /meus-dados/:dados
      //O destructuring irá recuperar o dado que foi passado na rota e atribuir a propriedade de um elemento cuja o nome é aquele criado na rota, antes do dois pontos,ou seja, (:dados)
      //Então teriamos que realizar a seguinte ação para receber esta informação.
      // const{dados} = useParams(), um detalhe aqui é que o useParams() pertence ao react-router e deve ser importado dele
      const {id} = useParams();

      const listaProdutosString = localStorage.getItem("lista") || '[]';
      const lista:Lista[] = JSON.parse(listaProdutosString);

      const [produto, setProduto] = useState<Lista>()

      useEffect(()=>{
        setProduto(lista.find((prod) => prod.id === Number(id)));
      });

      return(
      <div>
        <h1>Olá, mundo sou o EditarProdutos!</h1>
        <div>
          <h2>ID: {id}</h2>
          <form>
            <div>
              <label>Nome:</label>
              <input type="text" name="nome" value={produto?.nome} />
            </div>
            <div>
              <label>Preço:</label>
              <input type="number" name="preco" value={produto?.preco} />
            </div>
            <div>
              <label>Descrição:</label>
              <textarea name="desc" value={produto?.desc}></textarea>
            </div>
            <div>
              <figure>
                <img src={produto?.imagem} alt={produto?.desc} />
              </figure>
            </div>
            <div>
              <button type="button">Editar</button>
            </div>
          </form>
        </div>
      </div>
    );
  } 