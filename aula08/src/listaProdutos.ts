import { Lista } from "./types";

//Criar uma lista de produtos eletrônicos com os seguintes dados:
//id,nome,preco,desc,imagem=path

const imgProdutos = "https://via.placeholder.com/50"


export const listaProdutos:Lista[] = [
    {
        id: 1,
        nome: "Smartphone",
        preco: 1500.00,
        desc: "Celular com tela de 6 polegadas",
        imagem: imgProdutos
    },
    {
        id: 2,
        nome: "Tablet",
        preco: 800.00,
        desc: "Tablet com tela de 10 polegadas",
        imagem: imgProdutos
    },
    {
        id: 3,
        nome: "Notebook",
        preco: 2500.00,
        desc: "Notebook com processador Intel Core i5",
        imagem: imgProdutos
    },
    {
        id: 4,
        nome: "Impressora",
        preco: 300.00,
        desc: "Impressora de alta qualidade",
        imagem: imgProdutos
    },
    {
        id: 5,
        nome: "Fone de Ouvido",
        preco: 200.00,
        desc: "Fone de ouvido sem fio",
        imagem: imgProdutos
    }
];

if(!localStorage.getItem("lista")){
    localStorage.setItem("lista", JSON.stringify(listaProdutos))
}